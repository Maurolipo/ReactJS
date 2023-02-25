import { CartWidget } from "../CartWidget/CartWidget";
import { Logo } from "../Logo.jsx/Logo";

export const Navbar = () => {
  return (
    <div>
        <Logo />
      <ul>
        <li>Cajas</li>
        <li>Skins</li>
        <li>Nosotros</li>
      </ul>
      <CartWidget />
    </div>
  );
};
