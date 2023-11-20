import * as React from 'react';

export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {}

const Label = React.forwardRef<HTMLInputElement, LabelProps>(
  ({ className, ...props }) => (
    <label
      className={`font-medium leading-none mb-2 peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${className}`}
      {...props}
    />
  )
);
Label.displayName = 'Label';

export { Label };
