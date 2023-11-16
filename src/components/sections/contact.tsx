import { forwardRef } from 'react';
import { ContactForm } from '../contact-form';

export const Contact = forwardRef<
  HTMLSelectElement,
  React.HTMLAttributes<HTMLSelectElement>
>(({ ...props }, ref) => {
  return (
    <section
      id="contact"
      className="md:px-5 px-10 py-20 bg-gray-700 grid"
      ref={ref}
    >
      <div className="max-w-screen-2xl grid justify-self-center w-full">
        <div className="grid items-center gap-2 justify-center mb-10">
          <h1 className="font-bold text-4xl text-center">Get in Touch</h1>
          <div className="h-1 w-20 bg-green-400 justify-self-center flex"></div>
        </div>
        <div className="grid w-full md:justify-center md:flex gap-8 gap-y-8">
          <div className="md:w-4/5 grid md:order-2 order-1">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
});

Contact.displayName = 'Contact';
