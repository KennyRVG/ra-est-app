import Link from "next/link";

import classes from "./header-navigation.module.css";

export default function HeaderNavigation() {
  return (
    <nav className={classes["header-navigation"]}>
      <Link href="/"><i id="icon" className="fa fa-home"></i> Home</Link>
      <Link href="/about"><i id="icon" className="fa fa-institution"></i> About</Link>
      <Link href="/contact"><i id="icon" className="fa fa-address-card-o"></i> Contact</Link>
      <Link href="/profile"><i id="icon" className="fa fa-user"></i> Profile</Link>
    </nav>
  );
}
