import Button from '@ui/components/Button/Button';

export default function App() {
  return (
    <>
      <h1>Hello World</h1>
      <div className="flex items-center gap-4 p-8">
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
    </>
  );
}
