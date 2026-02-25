import { cn } from '@utils/cn';
import { cva, type VariantProps } from 'class-variance-authority';

const variants = cva(
  'p-2 border rounded-sm transition-all duration-300 ease-in-out outline-none',
  {
    variants: {
      variant: {
        default:
          'border-primary-400 focus:ring-4 focus:ring-primary-400/20 focus:shadow-sm',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

type InputProps = React.InputHTMLAttributes<HTMLInputElement> &
  VariantProps<typeof variants>;

export default function Input({
  type = 'text',
  variant,
  className,
  ...props
}: InputProps) {
  return (
    <input
      {...props}
      type={type}
      className={cn(variants({ variant }), className)}
    />
  );
}
