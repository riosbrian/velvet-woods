import { cn } from '@utils/cn';
import { cva, type VariantProps } from 'class-variance-authority';
import Spinner from '@ui/components/Spinner/Spinner';

const variants = cva(
  'cursor-pointer active:scale-95 border py-2 px-4 rounded-sm font-medium transition-all duration-300 ease-in-out',
  {
    variants: {
      variant: {
        primary:
          'bg-green-500 border-green-500 text-white hover:bg-green-600 hover:border-green-600 hover:shadow-lg hover:shadow-green-500/30',
        secondary:
          'bg-transparent border-green-500 text-green-600 hover:bg-green-50/50',
        ghost:
          'border-transparent bg-transparent text-green-600 hover:border-green-500 hover:bg-green-50/30',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  },
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof variants> & { isLoading?: boolean };

export default function Button({
  children,
  className,
  isLoading,
  variant,
  ...props
}: ButtonProps) {
  return (
    <button
      disabled={isLoading}
      {...props}
      className={cn(variants({ variant }), className)}
    >
      {!isLoading ? children : <Spinner />}
    </button>
  );
}
