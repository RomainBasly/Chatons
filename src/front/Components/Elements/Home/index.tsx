import Link from "next/link";
import React from "react";
import { DefaultTemplate } from "../../DefaultTemplate";
import { HomeCard } from "../HomeCard";

interface IProps {}

export const Home: React.FC<IProps> = (props: IProps) => {
  return (
    <DefaultTemplate>
      <Link href={"./Signalement"}>
        <HomeCard textDescription={"Signalement"} title={"Signalement"} />
      </Link>
    </DefaultTemplate>
  );
};
