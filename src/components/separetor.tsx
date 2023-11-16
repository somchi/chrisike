import React from 'react';

export interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: string;
}

const Separator = React.forwardRef<HTMLDivElement, SeparatorProps>(
  ({ className, orientation = 'horizontal', ...props }, ref) => (
    <div
      ref={ref}
      className={`shrink-0 bg-slate-200 dark:bg-slate-800 ${
        orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]'
      } ${className}`}
      {...props}
    />
  )
);
Separator.displayName = Separator.displayName;

export { Separator };
