"use client"

import Image from "next/image";
import Link from "next/link";
import { Button } from "semantic-ui-react";
import { useAuth } from "@/hooks";

export default function Home() {
  const { user, logout } = useAuth();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2>Games Shop</h2>
      <Button primary>Ir al Login</Button>

      {user ? (
        <div>
          <p>
            Hola, {user.firstname} {user.lastname}
          </p>
          <Button onClick={logout}>Cerrar Sesión</Button>
        </div>
      ) : (
        <div>
          <Link href="/auth/sign-in">Iniciar Sesion</Link>
        </div>
      )}
    </main>
  );
}
