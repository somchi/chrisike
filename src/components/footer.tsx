import { Copyright } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="h-28 grid px-10 md:px-20">
      <div className="flex items-center gap-2 font-semibold text-lg flex-wrap">
        <span>Copyright </span>
        <Copyright />
        <span> {new Date().getFullYear()}</span>
        <span className="text-green-400">Christopher Ike.</span>
        <span>All Rights Reserved</span>
      </div>
    </footer>
  );
};
