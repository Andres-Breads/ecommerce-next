import Link from 'next/link'
import { LoginForm } from '@/components/Auth'
import styles from './sign-in.module.scss'

export default function SignInPage() {
    return (
        <div className={styles.signIn}>
            <h3>Iniciar Sesión</h3>
            <LoginForm />

            <div className={styles.actions}>
                <Link href="/auth/sign-up">¿No tienes una cuenta?</Link>
            </div>
        </div>
    )
}
