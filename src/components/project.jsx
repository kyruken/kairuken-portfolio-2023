
export default function Project(props) {
    return (
        <article className="content-container ai-center margin-bottom-3 gap-2">
            <div className="flex-column gap-2">
                <h3>{props.title}</h3>
                <i>{props.technology}</i>
                <div className="paragraph-container">
                    <p>{props.description}</p>
                </div>
                <div className="flex jc-center gap-4">
                    <a href={props.demo} target="_blank"><button className="red-button">Demo</button></a>
                    <a href={props.code} target="_blank"><button className="red-button">Code</button></a>
                </div>
            </div>
            <div className="video-container">
                <video playsInline autoPlay muted loop>
                    <source src={props.video} type='video/mp4'></source>
                    Your browser doesn't support the video tag.
                </video>
            </div>
        </article>
    )
}