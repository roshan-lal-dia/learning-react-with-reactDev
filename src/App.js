function MyButton() {
  //logic I guess
  let buttonName = "First Button";
  return (
    <>
      <button>This is a {buttonName}</button>
    </>
  );
}

function Profile() {
  const USER = {
    name: "Roshan Lal Dia 💞",
    imageUrl:
      "https://www.tensionends.com/wp-content/uploads/2022/09/Beautiful-Girl-DP-Images-1.jpg",
    imageSize: 90,
  };
  return (
    <>
      <h1>{USER.name}</h1>
      <img
        className="avatar"
        src={USER.imageURL}
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

export default function MyApp() {
  return (
    <>
      <h2>Hello World</h2>
      <Profile />
      <MyButton />
    </>
  );
}
