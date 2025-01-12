import { h, Fragment } from "preact"
import { useParams } from "react-router-dom"

import Nav from "../Nav"
import Scratch from "./Scratch"

export default function ScratchPage() {
    const { slug } = useParams<{ slug: string }>()

    return <>
        <Nav />
        <main>
            <Scratch slug={slug} />
        </main>
    </>
}
