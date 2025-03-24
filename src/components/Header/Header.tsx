import "./Header.scss";
import Logo from "../../UI/Logo";

const Header = () => {
  return (
    <header className="header">
        <div className="container header__container">
          <Logo 
            img="./logo.png"
            label="header__logo"
            alt="header logo"
          />

          <nav className="header__nav">
            <ul className="header__list">
              <li className="header__list-item">
                <a href="/">Главная</a>
              </li>

              <li className="header__list-item">
                <a href="/">Каталог</a>
              </li>
            </ul>
          </nav>

        </div>
    </header>
  )
}

export default Header