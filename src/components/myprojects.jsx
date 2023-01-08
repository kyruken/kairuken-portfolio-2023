import Project from './project'
import OtherProjects from './otherprojects'
export default function MyProjects() {
    return (
        <section>
            <h2>My Projects</h2>

            <Project />
            <Project />
            <Project />

            <OtherProjects />
        </section>
    )
}