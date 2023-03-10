
export default function MiniProject(props) {
    return (
        <article className="miniproject-container content-container content-reverse padding-lr-1 padding-tb-1">
            <img src={props.image} alt='mini project image'></img>
            <div className="flex-column padding-lr-1">
                <h3 className='margin-top-1'>{props.title}</h3>
                <div className="margin-bottom-1">
                    <p>{props.description}</p>
                </div>
                <div className="flex jc-center gap-3">
                    <a target="_blank" href={props.demo}><button className="red-button-mini">Demo</button></a>
                    <a target="_blank" href={props.code}><button className="red-button-mini">Code</button></a>
                </div>
            </div>
        </article>
    )
}