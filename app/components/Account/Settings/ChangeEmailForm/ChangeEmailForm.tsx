import { Form } from "semantic-ui-react"
import styles from "./ChangeEmailForm.module.scss"

export function ChangeEmailForm() {
    return (
        <Form className={styles.form}>
            <label>Cambiar correo electrónico</label>

            <Form.Input name="email" placeholder="Nuevo correo electrónico" />
            <Form.Input name="repeatEmail" placeholder="Repetir correo electrónico" />
            <Form.Button type="submit">Enviar</Form.Button>
        </Form>
    )
}
