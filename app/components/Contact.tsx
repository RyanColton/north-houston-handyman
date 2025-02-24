'use client'
import Button from "./UILibrary/Button";
import FadeIn from "./UILibrary/FadeIn";
import { useEffect, useState } from "react";

type ContactProps = {
  shouldFadeOnScroll?: boolean;
};

export default function Contact({ shouldFadeOnScroll }: ContactProps) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [messageSent, setMessageSent] = useState(false);

    return (
      <div className="h-screen flex justify-center items-center" >
        <FadeIn delay={500} shouldFade={shouldFadeOnScroll}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-4 items-center justify-center bg-white/60 p-10">
              <h1 className="text-5xl font-bold text-center mb-4">Contact</h1>
              {messageSent && <p className="text-2xl font-medium mb-4">Message sent successfully!</p>}
              {!messageSent && <p className="text-2xl font-medium mb-4">Please fill out the form below to get in touch.</p>}
              <div
                style={{
                    gridTemplateAreas: `
                        'name email'
                        'message message'
                        'button .'
                    `
                }}
                className="grid grid-cols-2 gap-4 w-full"
              >
                  <input onChange={(e) => setName(e.target.value)} style={{ gridArea: 'name' }} className="w-full border border-themeDarkBlue rounded-md p-2" type="text" placeholder="Name" />
                  <input onChange={(e) => setEmail(e.target.value)} style={{ gridArea: 'email' }} className="w-full border border-themeDarkBlue rounded-md p-2 invalid:border-red-500 invalid:text-red-500 invalid:border-2" type="email" placeholder="Email" />
                  <textarea onChange={(e) => setMessage(e.target.value)} style={{ gridArea: 'message' }} className="w-full h-40 border border-themeDarkBlue rounded-md p-2" placeholder="Message" />
                  <Button
                    onClick={() => {
                      if (name && email && message) {
                          window.location.href = `mailto:northhoustonhandyman1@gmail.com?subject=${name} - ${email}&body=${message}`;
                        setName('');
                        setEmail('');
                        setMessage('');
                        setMessageSent(true);
                      } else {
                        alert('Please fill in all fields');
                      }
                    }}
                    disabled={messageSent}
                    style={{ gridArea: 'button' }}
                    className="w-fit"
                    variant="primary"
                    type="submit"
                    >
                      Send Email
                    </Button>
              </div>

              <p>Or</p>
              <p>Call or text Gary at <a href="tel:+13464597777">346-459-7777</a></p>
            </div>
          </FadeIn>
      </div>
    );
  }