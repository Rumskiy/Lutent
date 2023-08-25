import style from "./Categories.module.scss";
import img from "../../assets/img/icons/categories1.svg";

const Comp = () => {
  return (
    <a className={style.comp} href="#">
      <div className={style.comp}>
        <div className={style.comp__wrapper}>
          <div className={style.comp__img}>
            <img src={img} alt="" />
          </div>
          <h2>Crypto</h2>
        </div>
      </div>
    </a>
  );
};

export const Categories = () => {
  return (
    <div className={style.categories}>
      <div className={style.container}>
        <div className={style.categories__wrapper}>
          <Comp />
          <Comp />
          <Comp />
          <Comp />
          <Comp />
          <Comp />
          <Comp />
          <Comp />
        </div>
      </div>
    </div>
  );
};
