import { cn } from '@utils/cn';

type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement>;

export default function Label({ children, className, ...props }: LabelProps) {
  return (
    <label className={cn(className)} {...props}>
      {children}
    </label>
  );
}
