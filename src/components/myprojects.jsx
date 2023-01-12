import Project from './project'
import ReverseProject from './reverseproject'
export default function MyProjects() {
    return (
        <section className='padding-lr-4 padding-tb-5' id='projects'>
            <h2>My Projects</h2>

            <Project />
            <ReverseProject />
            <Project />

        </section>
    )
}