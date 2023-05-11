import logo from '../images/logo2.png';

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
    <div style={{ display: 'flex', alignItems: 'center' }}>
  <span className='span-git'>Go to repository</span>
  <i className="fa-solid fa-arrow-right"></i>
</div>

            <a href="https://github.com/nicola-saladino/progetto-scrum" target="_blank" rel="noreferrer">
  <button className="uk-button uk-button-text">
    <i className="fa-brands fa-github fa-spin"></i>
  </button>
</a>

</div>

          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
