
export default function MiniProject(props) {
    return (
        <article className="miniproject-container content-container content-reverse padding-lr-1 padding-tb-2">
            <img alt='other project'></img>
            <div className="flex-column">
                <h4>{props.title}</h4>
                <p>{props.description}</p>
                <div className="flex jc-center gap-1">
                    <a href={props.demo}><button className="red-button-mini">Demo</button></a>
                    <a href={props.code}><button className="red-button-mini">Code</button></a>
                </div>
            </div>
        </article>
    )
}