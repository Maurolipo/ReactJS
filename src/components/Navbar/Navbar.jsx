import { CartWidget } from "../CartWidget/CartWidget";
import { Logo } from "../Logo.jsx/Logo";
import styles from "./Navbar.module.css"

export const Navbar = () => {
  return (
    <div className={styles.containerNavbar}>
        <Logo />
      <ul className={styles.containerList}>
        <li>Cajas</li>
        <li>Skins</li>
        <li>Todo</li>
      </ul>
      <CartWidget />
    </div>
  );
};
