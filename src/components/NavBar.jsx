import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img
          src="/images/logo.png"
          alt="PropertyFinder Logo"
          className="navbar-logo"
        />
        <span className="navbar-name">KeyStone</span>
      </div>

      <div className="navbar-right">
        <button className="navbar-btn notifications">
          <img src="/images/notif.png"/>
        </button>
        <button className="navbar-btn signin">Sign In</button>
      </div>
    </nav>
  );
}

export default Navbar;
