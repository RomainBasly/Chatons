import React from "react";
import classes from "./classes.module.scss";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return <div className={classes["logo"]}>footer</div>;
};

export default Footer;
