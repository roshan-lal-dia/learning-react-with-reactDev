function MyButton() {
  //logic I guess
  let buttonName = "First Button";
  return (
    <>
      <button>This is a {buttonName}</button>
    </>
  );
}

export default function MyApp() {
  return (
    <>
      <h2>Hello World</h2>
      <MyButton />
    </>
  );
}
