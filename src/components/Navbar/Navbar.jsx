import { CartWidget } from "../CartWidget/CartWidget";
import { Logo } from "../Logo.jsx/Logo";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <div className={styles.containerNavbar}>
      <Logo />
      <ul className={styles.containerList}>
        <li>
          {" "}
          <a href="#"> Cajas</a>
        </li>
        <li>
          {" "}
          <a href="#"> Skins</a>
        </li>
        <li>
          {" "}
          <a href="#"> Todo</a>
        </li>
      </ul>
      <CartWidget />
    </div>
  );
};
