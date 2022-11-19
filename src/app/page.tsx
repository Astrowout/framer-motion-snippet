import { Heading, WordPicker } from "../components";

export default async function Home() {
    return (
        <main className="flex-grow flex items-center justify-center min-h-screen">
            <Heading />

            <WordPicker />
        </main>
    )
}
