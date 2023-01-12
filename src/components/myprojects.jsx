import Project from './project'
import ReverseProject from './reverseproject'
import OtherProjects from './otherprojects'
export default function MyProjects() {
    return (
        <section id='projects'>
            <h2>My Projects</h2>

            <Project />
            <ReverseProject />
            <Project />

            <OtherProjects />
        </section>
    )
}