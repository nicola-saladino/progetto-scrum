import { Link } from 'react-router-dom';
import logo from '../logo.png'

function Header() {
  return (
    <div>
      <nav className="uk-navbar-container">
        <div className="uk-container">
          <div className="uk-navbar ">
            <div className="uk-navbar-center ">
              <img src={logo} alt='logo' className="uk-navbar-item uk-logo uk-margin-medium-top"></img>
            </div>
            <div className="uk-navbar-right uk-margin-medium-top">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="uk-button uk-button-default uk-margin-small-left">GitHub</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
