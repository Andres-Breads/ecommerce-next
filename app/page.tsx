"use client"

import Image from "next/image";
import Link from "next/link";
import { Button } from "semantic-ui-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Estamos en la HOME</h1>
      <Link href="/ps5/fortnite">PS5 - Fortnite</Link>

      <Button primary>Ir al Login</Button>
    </main>
  );
}
