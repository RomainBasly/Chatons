import React, { ReactNode } from "react";
import { Inter } from "next/font/google";
import classes from "./classes.module.scss";

import { Header } from "../../Elements/Header";
import Footer from "../../Elements/Footer/Footer";

interface IProps {
  title?: string;
  children?: ReactNode;
}

export const DefaultTemplate: React.FC<IProps> = (props: IProps) => {
  let { title, children } = props;
  return (
    <div className={classes["root"]}>
      <Header />
      <h1>{title}</h1>
      <div className={classes["content"]}>{children}</div>
      <Footer />
    </div>
  );
};
