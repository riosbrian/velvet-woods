import { cn } from '@utils/cn';
import { cva, type VariantProps } from 'class-variance-authority';
import Spinner from '@ui/components/Spinner/Spinner';

const variants = cva(
  'cursor-pointer active:scale-95 border py-2 px-4 rounded-sm font-medium transition-all duration-300 ease-in-out',
  {
    variants: {
      variant: {
        primary:
          'bg-primary-400 border-primary-400 text-white hover:bg-primary-300 hover:border-primary-300 hover:shadow-lg hover:shadow-primary-300/30',
        secondary:
          'bg-transparent border-primary-400 text-primary-400 hover:bg-primary-300/50',
        ghost:
          'border-transparent bg-transparent text-primary-400 hover:border-primary-400',
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
