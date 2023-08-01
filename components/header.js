export default function Header() {
  return (
    <header>
      <div className="header">
        <img id="logo" src="logocar.png" />
        <a id="homeButton" className="link" href="/">
          Home
        </a>
        <a id="homeButton" className="link" href="/bikes">
          Motorcycles
        </a>
      </div>
    </header>
  );
}
