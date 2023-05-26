import React from "react";
import classes from "./classes.module.scss";
import paw from "../../../Assets/cat-paw.svg";
import info from "../../../Assets/info.svg";

interface IProps {
  textDescription: string;
  title: string;
}

export const HomeCard: React.FC<IProps> = (props) => {
  const { title, textDescription } = props;
  return (
    <div className={classes["root"]}>
      <div className={classes["illustration"]}>
        <img src={String(paw.src)} alt="cat paw" />
      </div>
      <div className={classes["description"]}>
        <h3>{title}</h3>
        {textDescription}
        <div className={classes["infoContainer"]}>
          <img src={String(info.src)} alt="cat paw" />
        </div>
      </div>
    </div>
  );
};
