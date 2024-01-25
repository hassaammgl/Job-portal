import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  return (
    <div>
      <h1>Normal PAges Link</h1>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/portfolio">PortF</Link>
      <Link to="/go">Go</Link>
      <Link to="/to">To</Link>
      <h1>Hash Links</h1>
      <HashLink smooth to="/#home">Home</HashLink>
      <HashLink smooth to="/#about">About</HashLink>
      <HashLink smooth to="/#portfolio">PortF</HashLink>
      <HashLink smooth to="/#go">Go</HashLink>
      <HashLink smooth to="/#to">To</HashLink>
    </div>
  );
};

export default Header;
