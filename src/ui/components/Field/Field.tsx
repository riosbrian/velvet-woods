import Group from '@ui/components/Field/Group';
import Label from '@ui/components/Field/Label';
import Legend from '@ui/components/Field/Legend';
import { cn } from '@utils/cn';

type FieldProps = React.FieldsetHTMLAttributes<HTMLFieldSetElement>;

export default function Field({ children, className, ...props }: FieldProps) {
  return (
    <fieldset className={cn(className)} {...props}>
      {children}
    </fieldset>
  );
}

Field.Legend = Legend;
Field.Group = Group;
Field.Label = Label;
