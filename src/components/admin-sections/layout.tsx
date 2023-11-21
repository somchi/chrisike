import React from 'react';
import { AdminHeader } from './header';

type Props = {
  children: React.ReactNode;
};

export default function AdminAuthLayout({ children }: Props) {
  return (
    <div className="text-gray-300">
      <AdminHeader />
      {children}
    </div>
  );
}
