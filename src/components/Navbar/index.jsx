import styles from "./Navbar.module.scss";
import { ReactComponent as Logo } from "../../assets/img/icons/Lutent.svg";
import { ReactComponent as Search } from "../../assets/img/icons/Search.svg";
import { ReactComponent as UsaFlagIcon } from "../../assets/img/icons/USAFlag.svg";
import { ReactComponent as OpenLegthIcon } from "../../assets/img/icons/OpenMenu.svg";

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.navbar__wrapper}>
          <div className={styles.navbar__logo}>
            <a href="/">
              <Logo />
            </a>
          </div>
          <div className={styles.navbar__search}>
            <a href="/">
              <Search />
            </a>
            <input
              className={styles.navbar__search__input}
              type="text"
              placeholder="Serch"
            />
          </div>
          <div className={styles.navbar__items}>
            <button className={styles.navbar__flag}>
              <UsaFlagIcon />
              <p>English</p>
              <OpenLegthIcon />
            </button>
            <a  className={styles.navbar__link__one} href="/">Help</a>
            <a className={styles.navbar__link__second} href="/">Create an Event</a>
            <div className={styles.navbar__buttons}>
            <button className={styles.navbar__buttons__sign}>Sign up</button>
            <button className={styles.navbar__buttons__log}>Log in</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
