import { Modal } from "semantic-ui-react"

export function BasicModal({
    children,
    show,
    onClose,
    title
}: Readonly<{
    children: React.ReactNode,
    show: boolean,
    onClose: () => void,
    title: string
}>) {
    return (
        <Modal open={show} onClose={onClose} size="small">
            <Modal.Header>{title}</Modal.Header>
            <Modal.Content>{children}</Modal.Content>
        </Modal>
    )
}
