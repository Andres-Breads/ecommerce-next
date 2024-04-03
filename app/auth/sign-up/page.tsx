import Link from 'next/link'
import { RegisterForm } from '@/components/Auth'
import styles from './sign-up.module.scss'

export default function SignUpPage() {
    return (
        <>
            <div className={styles.signIn}>
                <h3>Crear cuenta</h3>
                <RegisterForm />

                <div className={styles.actions}>
                    <Link href="/auth/sign-in">Atras</Link>
                </div>
            </div>
        </>
    )
}
