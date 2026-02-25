import { cn } from '@utils/cn';
import { createContext, useContext } from 'react';

// --- TYPES ---
export type Col = {
  id: string | number;
  header: string;
  min_width?: string | number;
  align?: 'left' | 'center' | 'right';
};

type TableProps = React.TableHTMLAttributes<HTMLTableElement> & { cols: Col[] };
type TableSectionProps = React.HTMLAttributes<HTMLTableSectionElement>;
type TableRowProps = React.HTMLAttributes<HTMLTableRowElement>;
type TableHeadCellProps = React.ThHTMLAttributes<HTMLTableCellElement>;
type TableCellProps = React.TdHTMLAttributes<HTMLTableCellElement>;

type TableContextValue = {
  cols: Col[];
};

const ALIGN_CLASSES = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
} as const;

// --- CONTEXT ---
const TableContext = createContext<TableContextValue | null>(null);

function useTableContext() {
  const context = useContext(TableContext);
  if (!context)
    throw new Error('Table sub components must be used inside a Table Context');
  return context;
}

// --- MAIN COMPONENT ---
export default function Table({
  children,
  className,
  cols,
  ...props
}: TableProps) {
  return (
    <TableContext.Provider value={{ cols }}>
      <div className="overflow-x-auto rounded-sm border border-gray-200">
        <table className={cn('w-full', className)} {...props}>
          {children}
        </table>
      </div>
    </TableContext.Provider>
  );
}

// --- SUBCOMPONENTS ---

/* Colgroup */
Table.Colgroup = function Colgroup() {
  const { cols } = useTableContext();
  return (
    <colgroup>
      {cols.map((col) => (
        <col key={col.id} width={col.min_width || '150px'} />
      ))}
    </colgroup>
  );
};

/* Row */
Table.Row = function Row({ children, className }: TableRowProps) {
  return <tr className={cn(className)}>{children}</tr>;
};

/* Cells */
Table.THCell = function THCell({ children, className }: TableHeadCellProps) {
  return <th className={cn('p-2', className)}>{children}</th>;
};

Table.TDCell = function TDCell({ children, className }: TableCellProps) {
  return <td className={cn('p-2', className)}>{children}</td>;
};

/* THead & Content */
const HeaderContent = () => {
  const { cols } = useTableContext();
  return (
    <Table.Row>
      {cols.map((col) => (
        <Table.THCell
          key={col.id}
          className={ALIGN_CLASSES[col.align || 'left']}
        >
          {col.header}
        </Table.THCell>
      ))}
    </Table.Row>
  );
};

Table.THead = function THead({
  children,
  className,
  ...props
}: TableSectionProps) {
  return (
    <thead className={cn('bg-gray-50', className)} {...props}>
      {children || <HeaderContent />}
    </thead>
  );
};

/* TBody */
Table.TBody = function TBody({
  children,
  className,
  ...props
}: TableSectionProps) {
  return (
    <tbody className={cn(className)} {...props}>
      {children}
    </tbody>
  );
};
