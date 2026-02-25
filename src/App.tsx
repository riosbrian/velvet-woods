import Button from '@ui/components/Button/Button';
import Field from '@ui/components/Field/Field';
import Input from '@ui/components/Input/Input';
import Table, { type Col } from '@ui/components/Table/Table';
import { useId } from 'react';
import { useForm } from 'react-hook-form';

type FormData = {
  firstname: string;
  email: string;
  password: string;
};

export default function App() {
  const id = useId();
  const { register, handleSubmit } = useForm<FormData>();
  function onSubmit(data: FormData) {
    console.log(data);
  }

  const cols: Col[] = [
    { id: 1, header: 'Column 1', min_width: '100px' },
    { id: 2, header: 'Column 2', min_width: '100px' },
    { id: 3, header: 'Column 3', min_width: '100px' },
    { id: 4, header: 'Column 4', min_width: '100px' },
    { id: 5, header: 'Column 5', min_width: '100px', align: 'left' },
  ];

  const data = Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    title: `Cabaña ${String.fromCharCode(65 + i)}`,
    status: i % 3 === 0 ? 'Disponible' : 'Ocupado',
    price: Math.floor(Math.random() * (200 - 80 + 1) + 80),
    createdAt: new Date(2026, 1, i + 1).toLocaleDateString(),
  }));

  return (
    <div className="p-4">
      <h1>Hello World</h1>
      <h2>Buttons</h2>
      <div className="mb-4 flex items-center gap-4">
        <Button onClick={() => console.log('Clicked!')}>Primary</Button>
        <Button variant={'secondary'} onClick={() => console.log('Clicked!')}>
          Secondary
        </Button>
        <Button
          isLoading={true}
          variant={'ghost'}
          onClick={() => console.log('Clicked!')}
        >
          Ghost
        </Button>
      </div>
      <h2>Inputs</h2>
      <div className="mt-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Field>
            <Field.Group>
              <Field.Label htmlFor={id + 'firstname'}>FirstName</Field.Label>
              <Input id={id + 'firstname'} {...register('firstname')} />
            </Field.Group>
          </Field>
          <Field>
            <Field.Group>
              <Field.Label htmlFor={id + 'email'}>Email</Field.Label>
              <Input id={id + 'email'} type="email" {...register('email')} />
            </Field.Group>
          </Field>
          <Field>
            <Field.Group>
              <Field.Label htmlFor={id + 'password'}>Password</Field.Label>
              <Input
                id={id + 'password'}
                type="password"
                {...register('password')}
              />
            </Field.Group>
          </Field>
          <Button type="submit">Send</Button>
        </form>
      </div>
      <h2>Table</h2>
      <Table cols={cols}>
        <Table.Colgroup />
        <Table.THead />
        <Table.TBody>
          {data.map((cabin) => (
            <Table.Row
              className="border-b border-b-gray-300 last:border-b-0"
              key={cabin.id}
            >
              <td className="p-2 text-nowrap">{cabin.id}</td>
              <td className="p-2 text-nowrap">{cabin.title}</td>
              <td className="p-2 text-nowrap">{cabin.price}</td>
              <td className="p-2 text-nowrap">{cabin.status}</td>
              <td className="p-2 text-nowrap">{cabin.createdAt}</td>
            </Table.Row>
          ))}
        </Table.TBody>
      </Table>
    </div>
  );
}
