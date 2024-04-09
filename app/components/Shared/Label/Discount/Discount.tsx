import classNames from "classnames"
import styles from "./Discount.module.scss"

export function Discount({
    children,
    className,
}: Readonly<{
    children: React.ReactNode,
    className?: any
}>) {
    return (
        <span className={classNames(styles.labelDiscount, { [className]: className })}>
            {children}
        </span>
    )
}