import classes from "./NoInternet.module.css";
import image from "../assets/sad.svg";
const NoInternet = () => {
  return (
    <div>
      <div className={classes.imageLocation}>
        <img src={image} alt="" className={classes.photo} />
      </div>
      <div className={classes.text}>
        <h1>404</h1>
        <h2>Page not found</h2>
        <h4>
          This page you looking for doesn't exist or other error occurred.{" "}
        </h4>
      </div>
    </div>
  );
};

export default NoInternet;
