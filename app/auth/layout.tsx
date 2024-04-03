"use client"

import Link from "next/link";
import { Icon, Image } from "semantic-ui-react";
import styles from "./AuthLayout.module.scss"

export default function AuthLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
  return (
    <div className={styles.container}>
        <div className={styles.topBar}>
            <Link href="/">
              <Image src="/images/logo.png" alt="Gaming" />
            </Link>
            <Link href="/">
              <Icon name="close" />
            </Link>
        </div>

        <div className={styles.blockLeft}>{children}</div>
        
        <div className={styles.blockRight}></div>
    </div>
  )
}
