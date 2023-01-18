// TODO - add ForkPoint logo and link to home page
import logo from "../../images/fp-logo.png"
import './Header.scss'

const freeShippingText = "FREE SHIPPING ON ALL ORDERS ABOVE 99$";
function Header() {
  return (
    <>
      <div className="free-shipping-div">{freeShippingText}</div>
      <div className="login-nav-div">Language, login, items bucket</div>
      <nav>
        <div className="logo-menu">
          <div className="logo"><img className="logo-img" src={logo} alt="" /></div>
          <div className="menu-container">
            <ul>
              <li><a href="www.google.com">Store</a></li>
              <li><a href="www.google.com">Company</a></li>
              <li><a href="www.google.com">Airbag</a></li>
              <li><a href="www.google.com">Athletes</a></li>
              <li><a href="www.google.com">News</a></li>
            </ul>
          </div>
        </div>
        <div className="search-wrapper">
          <div className="for-search">
            <label for="search">Search<img src="" alt="" />
              <input type="text" />
            </label>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
