"use client"
import { Container } from "semantic-ui-react";
import classNames from "classnames";
import { Footer, TopBar } from "@/components/Layout";
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
  return (
    <>
      <TopBar isOpenSearch={isOpenSearch} />

      <Container fluid>
        <div className={classNames({ [styles.relative]: relative })}>
          {isContainer ? <Container>{children}</Container> : children}
        </div>
      </Container>

      <Footer />
    </>
  )
}
