"use client";
import Link from "next/link";
import React from "react";
import logo from "../../../../../public/logo/logo.png";
import classes from "./classes.module.scss";
import burger from "../../../Assets/burger_menu.svg";
import Button from "../../Materials/buttons";

interface IProps {
  isConnected?: boolean;
}

interface State {}

class HeaderClass extends React.Component<IProps, State> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }

  public override render() {
    return (
      <div className={classes["root"]}>
        <div className={classes["logo"]}>
          <Link href="/">
            <img src={String(logo.src)} alt="logo" />
          </Link>
        </div>
        <div className={classes["connectButton"]}>
          {this.props.isConnected ? (
            <div className={classes["burger"]}>
              <img src={String(burger.src)} alt="Burger To Navigate" />
            </div>
          ) : (
            <Button>Connect yourself dude</Button>
          )}
        </div>
      </div>
    );
  }
}

export const Header: React.FC<IProps> = (props: IProps) => {
  return <HeaderClass {...props} />;
};
