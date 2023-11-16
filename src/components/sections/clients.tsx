import { forwardRef } from 'react';

export const Clients = forwardRef<
  HTMLSelectElement,
  React.HTMLAttributes<HTMLSelectElement>
>(({ ...props }, ref) => {
  return (
    <section id="client" className="grid md:px-20 px-10 py-20" ref={ref}>
      <div className="grid items-center gap-2 justify-center mb-10">
        <h1 className="font-bold text-4xl text-center">My Clients</h1>
        <div className="h-1 w-20 bg-green-400 justify-self-center flex"></div>
      </div>
    </section>
  );
});

Clients.displayName = 'Clients';
