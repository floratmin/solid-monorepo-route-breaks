import {ParentProps} from "solid-js";

export default function Home(props: ParentProps) {

  return (
    <>
      <p>bar template</p>
      {props.children}
    </>
  );
}
