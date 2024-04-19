import SideNavigation from "../components/layout/side-navigation";

export default function ProfileLayout({ children }) {
  return (
    <div className="profile-page">
      <SideNavigation />
      {children}
    </div>
  );
}
