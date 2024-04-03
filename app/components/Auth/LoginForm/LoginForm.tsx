"use client"

import { Form } from "semantic-ui-react"

export function LoginForm() {
  return (
    <Form>
        <Form.Input
            name="identifier"
            type="text"
            placeholder="Correo electrónico o nombre de usuario"
        />
        <Form.Input
            name="password"
            type="password"
            placeholder="Contraseña"
        />

        <Form.Button type="submit" fluid>
            Entrar
        </Form.Button>
    </Form>
  )
}
