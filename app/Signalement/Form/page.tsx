import React from "react";
import dynamic from "next/dynamic";

import classes from "./classes.module.scss";
import TextContent from "../../../src/front/Components/TextContent/dictionnary.json";
import { DefaultTemplate } from "../../../src/front/Components/Materials/Template/DefaultTemplate";

interface IProps {}

const OpenStreetMap = dynamic(
  () => import("../../../src/front/Components/Elements/MapOpenStreetMap"),
  { ssr: false }
);

const Form: React.FC<IProps> = () => {
  return (
    <DefaultTemplate title={TextContent.pages.form.title}>
      <div className={classes["root"]}>
        <form action="/">
          <div className={classes["catSituation"]}>
            <h3>{TextContent.pages.form.catSituation}</h3>
            {TextContent.pages.form.catSituationLabels.map((situation) => (
              <div className={classes["checkboxContainer"]} key={situation.id}>
                <label
                  htmlFor={situation.shortLabel}
                  className={classes["label"]}
                >
                  {situation.longLabel}
                </label>
                <input
                  type="checkbox"
                  id={situation.shortLabel}
                  name={situation.shortLabel}
                  className={classes["input"]}
                />
              </div>
            ))}
          </div>
          <OpenStreetMap />
        </form>
      </div>
    </DefaultTemplate>
  );
};

export default Form;
