import { cn } from '@utils/cn';
import { cva, type VariantProps } from 'class-variance-authority';

const variants = cva('flex', {
  variants: {
    variant: {
      default: 'flex-col gap-2',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

type GroupProps = {
  children: React.ReactNode;
  className?: string;
} & VariantProps<typeof variants>;

export default function Group({ children, variant, className }: GroupProps) {
  return <div className={cn(variants({ variant }), className)}>{children}</div>;
}
