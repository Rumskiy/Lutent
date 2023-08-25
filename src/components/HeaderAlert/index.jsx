import { ReactComponent as PraporIcon } from "../../assets/img/icons/UA.svg";
import { ReactComponent as CrossIcon } from "../../assets/img/icons/Cross.svg";
import styles from "./HeaderAlert.module.scss";

function HeaderAlert() {
  return (
    <div className={styles.message}>
      <div className={styles.container}>
        <div className={styles.message__wrapper}>
          <PraporIcon />
          <p className={styles.message__p}>
            Stop the War. Support Ukraine.
            <a href="/" className={styles.message__link}>
              Make a Donation
            </a>
            to United24 program.
          </p>
        </div>
        <div className={styles.message__item}>
          <button className={styles.message__item__btn}>
            {/* <img src={Cross} className={styles.message__cross} alt="" /> */}
            <CrossIcon />
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeaderAlert;
