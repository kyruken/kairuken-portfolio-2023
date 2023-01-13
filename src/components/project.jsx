
export default function Project(props) {
    return (
        <article className="content-container ai-center margin-bottom-3">
            <div className="flex-column gap-3">
                <h3>{props.title}</h3>
                <i>{props.technology}</i>
                <div className="paragraph-container">
                    <p>{props.description}</p>
                </div>
                <div className="flex jc-center gap-4">
                    <a href={props.demo}><button className="red-button">Demo</button></a>
                    <a href={props.code}><button className="red-button">Code</button></a>
                </div>
            </div>
            <img alt='img about project'></img>
        </article>
    )
}