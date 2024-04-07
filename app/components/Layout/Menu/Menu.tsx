import { useState, useEffect } from "react"
import { Image, Icon, Input } from "semantic-ui-react"
import { Platform } from "@/api"
import styles from "./Menu.module.scss"

const platformCtrl = new Platform();

export function Menu({ isOpenSearch }: Readonly<{ isOpenSearch: boolean }>) {
    const [platforms, setPlatforms] = useState(null)

    useEffect(() => {
      (async () => {
        try {
            const response = await platformCtrl.getAll()
            setPlatforms(response.data);
        } catch (error) {
            console.error(error);
        }
      })()
    }, [])
    
    return (
        <div>MENU</div>
    )
}
