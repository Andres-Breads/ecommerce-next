import { Metadata } from 'next';

type Props = {
    params: { platform: string, game: string }
}

export function generateMetadata(
    { params } : Props
): Metadata {
    return {
        title: `${params.platform} | ${params.game}`
    }
}

export default function Game({ params }: Props) {
    console.log(params)
    return (
        <div>
            <h1>Estamos en la plataforma {params.platform}</h1>
            <h2>Estamos en el juego {params.game}</h2>
        </div>
    )
}
