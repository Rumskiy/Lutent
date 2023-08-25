import styles from "./Header.module.scss";
import HeaderImg from "../../assets/img/compressed/headerImg.png";

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.header__wrapper}>
          <h1 className={styles.header__h1}>
            Find the right event <br />
            in lutsk for you
          </h1>
          <img src={HeaderImg} alt="" />
        </div>
      </div>
    </div>
  );
};
