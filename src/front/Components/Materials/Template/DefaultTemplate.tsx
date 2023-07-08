import React, { ReactNode } from "react";
import classes from "./classes.module.scss";

import { Header } from "../../Elements/Header";
import Footer from "../../Elements/Footer/Footer";

interface IProps {
  title?: string;
  children?: ReactNode;
}

export const DefaultTemplate: React.FC<IProps> = (props: IProps) => {
  let { children } = props;
  return (
    <div className={classes["root"]}>
      <Header />
      <div className={classes["content"]}>{children}</div>
      <Footer />
    </div>
  );
};
