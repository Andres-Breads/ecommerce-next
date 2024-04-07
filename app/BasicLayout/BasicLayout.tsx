"use client"
import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";
import classNames from "classnames";
import styles from "./BasicLayout.module.scss"

export default function BasicLayout({
    children,
    isOpenSearch = false,
    isContainer = false,
    relative = false,
}: Readonly<{
    children: React.ReactNode;
    isOpenSearch?: boolean;
    isContainer?: boolean;
    relative?: boolean;
}>) {
  console.log(isContainer);
  
  return (
    <>
      <Container fluid>
        <div className={classNames({ [styles.relative]: relative })}>
          {isContainer ? <Container>{children}</Container> : children}
        </div>
      </Container>
    </>
  )
}
