import BootstrapClient from "../utils/client-bootstrap";
import Header from "./_Templates/Header";

export default function Home() {
    return (
        <main>
            <BootstrapClient />
            <Header />
            <h1>Test Home</h1>
        </main>
    );
}