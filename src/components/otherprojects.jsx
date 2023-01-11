import MiniProject from "./miniprojects"
export default function OtherProjects() {
    return (
        <section className="bg-secondary">
            <h2>Other Projects</h2>
            <div className="otherprojects-container padding-1">
                <MiniProject />
                <MiniProject />
                <MiniProject />
                <MiniProject />
            </div>
        </section>
    )
}