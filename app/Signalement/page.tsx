import dynamic from "next/dynamic";
import React from "react";
import { DefaultTemplate } from "../../src/front/Components/DefaultTemplate";
import Button from "../../src/front/Components/Materials/buttons";
import classes from "./classes.module.scss";
import TextContent from "../../src/front/Components/TextContent/dictionnary.json";

const Map = dynamic(
  () => import("../../src/front/Components/Elements/MapOpenStreetMap"),
  { ssr: false }
);

const Page: React.FC = () => {
  return (
    <div className={classes["roota"]}>
      <DefaultTemplate title={"Signaler un chat blessé ou gravement malade"}>
        <div className={classes["contenta"]}>
          <h3>{TextContent.pages.signalement.title}</h3>

          <p>{TextContent.pages.signalement.fakeContent}</p>
        </div>
        <Map />
        <Button variant="submit">
          {TextContent.pages.signalement.textButton}
        </Button>
      </DefaultTemplate>
    </div>
  );
};

export default Page;
