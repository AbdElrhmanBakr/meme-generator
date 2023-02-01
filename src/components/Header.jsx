import logo from '../assets/logo.png';

function Header() {
  return (
    <header className="header--container">
        <img src={logo} alt="HeaderLogo" className="header--logo" />
        <h2 className="header--title">Meme Generator</h2>
        <h4 className="header--app">React-APP-5</h4>
    </header>
  );
}

export default Header;