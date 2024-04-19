import classes from "./main-footer.module.css";

export default function MainFooter() {
  return (
    <footer className={classes["main-footer"]}>
      <p>
        <i className="fa fa-copyright"></i> Terms & conditions
      </p>
      <span>
        <p>Follow us:</p>
        <i className="fa fa-facebook"></i>
        <i className="fa fa-google"></i>
        <i className="fa fa-linkedin"></i>
        <i className="fa fa-twitter"></i>
        <i className="fa fa-apple"></i>
        <i className="fa fa-bitcoin"></i>
        <i className="fa fa-telegram"></i>
        <i className="fa fa-youtube-square"></i>
        <i className="fa fa-windows"></i>
      </span>
    </footer>
  );
}
