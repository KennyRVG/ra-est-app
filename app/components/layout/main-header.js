import Link from "next/link";
import Image from "next/image";

import classes from "./main-header.module.css";
import logoImg from "@/assets/logo.svg"
import HeaderNavigation from "./header-navigation";

export default function MainHeader() {
  return (
    <header className={classes["main-header"]}>
      <span>
        <Link id="nav" href="/"><i className="fa fa-navicon"></i></Link>
        <Link href="/"><i className="fa fa-angle-left"></i></Link>
        <Link href="/"><i className="fa fa-angle-right"></i></Link>
      </span>
      <Link id="logo" href="/"><Image src={logoImg} alt="Company Logo" priority width={80} /></Link>
      <HeaderNavigation />
    </header>
  );
}
