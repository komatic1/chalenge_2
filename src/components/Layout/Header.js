import React from "react";
import sushiImage from "../../assets/sushi.jpg";
import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={styles}>
        <h1>Япона Кухня</h1>
        <button>Корзина</button>
      </header>
      <div>
        <img src={sushiImage} alt="Блюда японской кухни" />
      </div>
    </React.Fragment>
  );
};

export default Header;
