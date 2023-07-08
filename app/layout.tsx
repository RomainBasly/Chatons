import React from "react";
import classes from "./classes.module.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={classes["root"]}>{children}</body>
    </html>
  );
}
