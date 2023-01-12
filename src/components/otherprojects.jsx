import MiniProject from "./miniprojects"
export default function OtherProjects() {
    return (
        <section className="bg-secondary padding-lr-4 padding-tb-5">
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
