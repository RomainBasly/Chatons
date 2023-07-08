import React from "react";
import { DefaultTemplate } from "../../src/front/Components/Materials/Template/DefaultTemplate";
import Button from "../../src/front/Components/Materials/buttons";
import classes from "./classes.module.scss";
import TextContent from "../../src/front/Components/TextContent/dictionnary.json";
import Link from "next/link";
import { EButtonVariant } from "../../src/front/Components/Elements/enums";

const Page: React.FC = () => {
  return (
    <DefaultTemplate title={TextContent.pages.signalementIntro.title}>
      <div className={classes["roota"]}>
        <div className={classes["content"]}>
          <h3>{TextContent.pages.signalementIntro.subtitle}</h3>
          <p>{TextContent.pages.signalementIntro.prérequis}</p>
          <ul>
            {TextContent.pages.signalementIntro.indications.map(
              (indication) => {
                return <li key={indication.id}>{indication.indication}</li>;
              }
            )}
          </ul>
          <p>{TextContent.pages.signalementIntro.fakeContent}</p>
        </div>
        <div className={classes["buttons-container"]}>
          <Link href={"/"}>
            <Button variant={EButtonVariant.SECONDARY} size="xsmall">
              {TextContent.common.buttons.retour}
            </Button>
          </Link>
          <Link href={"Signalement/Form"}>
            <Button variant={EButtonVariant.PRIMARY}>
              {TextContent.common.buttons.suivant}
            </Button>
          </Link>
        </div>
      </div>
    </DefaultTemplate>
  );
};

export default Page;
