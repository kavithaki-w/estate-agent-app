import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img
          src="assets/logo.png"
          alt="PropertyFinder Logo"
          className="navbar-logo"
        />
        <span className="navbar-name">PropertyFinder</span>
      </div>

      <div className="navbar-right">
        <button className="navbar-btn notifications">
          🔔
        </button>
        <button className="navbar-btn signin">Sign In</button>
      </div>
    </nav>
  );
}

export default Navbar;
