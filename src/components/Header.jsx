import React from 'react';

function Header() {
  return (
    <div>
      <nav className="uk-navbar-container">
        <div className="uk-container">
          <div className="uk-navbar">
            <div className="uk-flex uk-navbar-center">
              <a className="uk-navbar-item uk-logo" href="#">Logo</a>
              <div className="uk-margin-left uk-margin-auto-left">
                <button className="uk-button uk-button-default">Button</button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
