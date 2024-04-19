import Link from "next/link";

import classes from "./side-navigation.module.css";

export default function SideNavigation() {
  return (
    <nav className={classes["side-navigation"]}>
      <Link href="/profile/account"><i id="icon" className="fa fa-gear"></i> Account</Link>
      <Link href="/profile/authorisation"><i id="icon" className="fa fa-street-view"></i> Authorisation</Link>
      <Link href="/profile/contacts"><i id="icon" className="fa fa-street-view"></i> Contacts</Link>
      <Link href="/profile/properties"><i id="icon" className="fa fa-sitemap"></i> Properties</Link>
      <Link href="/profile/tenants"><i id="icon" className="fa fa-street-view"></i> Tenants</Link>
      <Link href="/profile/suppliers"><i id="icon" className="fa fa-street-view"></i> Suppliers</Link>
      <Link href="/profile/contracts"><i id="icon" className="fa fa-street-view"></i> Contracts</Link>
      <Link href="/profile/accounting"><i id="icon" className="fa fa-street-view"></i> Accounting</Link>
      <Link href="/profile/cash"><i id="icon" className="fa fa-street-view"></i> Cash</Link>
      <Link href="/profile/transactions"><i id="icon" className="fa fa-street-view"></i> Transactions</Link>
      <Link href="/profile/reporting"><i id="icon" className="fa fa-street-view"></i> Reporting</Link>
    </nav>
  );
}
