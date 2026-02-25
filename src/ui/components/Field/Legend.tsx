type LegendProps = React.HTMLAttributes<HTMLLegendElement>;

export default function Legend({ children }: LegendProps) {
  return <legend>{children}</legend>;
}
