import Button from '@ui/components/Button/Button';

export default function App() {
  return (
    <>
      <h1>Hello World</h1>
      <Button onClick={() => console.log('Clicked!')}>Click Me!</Button>
    </>
  );
}
