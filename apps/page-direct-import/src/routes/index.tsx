import { Title } from "@solidjs/meta";

const r = {
  	a: 'Hello',
}
export default function Home() {
  return (
    <main>
      <Title>Hello World</Title>
      <h1>Hello world! {r.a}</h1>
    </main>
  );
}
