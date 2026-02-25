import { cn } from '@utils/cn';
import { cva, type VariantProps } from 'class-variance-authority';

const variants = cva('cursor-pointer py-2 px-4 rounded-sm font-semibold', {
  variants: {
    variant: {
      primary: '',
      secondary: '',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

type ButtonProps = React.HTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof variants>;

export default function Button({
  children,
  className,
  variant,
  ...props
}: ButtonProps) {
  return (
    <button {...props} className={cn(variants({ variant }), className)}>
      {children}
    </button>
  );
}
