import ClickButton from "./Components/ClickButton";
import MyComponent from "./MyComponent";
import { useState } from "react";

function MyButton() {
  //logic I guess
  let buttonName = "First Button";
  return (
    <>
      <button>This is a {buttonName}</button>
    </>
  );
}

function SameStateButton({ count, onClick }) {
  return (
    <>
      <button onClick={onClick}>Clicked {count} times together</button>
    </>
  );
}

function Profile() {
  const USER = {
    name: "Roshan Lal Dia 💞",
    imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
    imageSize: 90,
  };
  return (
    <>
      <h1>{USER.name}</h1>
      <img
        className="avatar"
        src={USER.imageUrl}
        alt={"Photo of " + USER.name}
        style={{
          width: USER.imageSize,
          height: USER.imageSize,
        }}
      />
      <br />
    </>
  );
}

function ProductPage() {
  const products = [
    { title: "cabbage", id: 1, isFruit: false },
    { title: "apple", id: 2, isFruit: true },
    { title: "banana", id: 3, isFruit: true },
  ];

  const listItems = products.map((product) => (
    <li
      key={product.id}
      style={{
        color: product.isFruit ? "magenta" : "red",
      }}
    >
      {product.title}
    </li>
  ));

  return (
    <>
      <ul>{listItems}</ul>
    </>
  );
}

export default function MyApp() {
  //sharing data between Components
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return (
    <>
      <h2>Hello World!</h2>
      <Profile />
      <MyButton />
      <ProductPage />
      <ClickButton />
      <ClickButton />
      <MyComponent />
      <SameStateButton count={count} onClick={handleClick} />
      <SameStateButton count={count} onClick={handleClick} />
    </>
  );
}
