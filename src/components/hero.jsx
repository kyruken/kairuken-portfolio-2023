
export default function Hero() {
    return (
        <header className='flex-column ai-center jc-center padding-tb-4'>
            <h1 className="f-weight-light">Hi, I'm <span className='highlight'>Kyle.</span></h1>
            <h2 className="f-weight-light">I'm a <span className="highlight">full stack developer.</span></h2>
            <div className="padding-tb-0 flex gap-3">
                <button className="red-button">Projects</button>
                <button className="greenline-button">About me</button>
            </div>
            <img className='side-button side-button-l' src="../src/assets/linkedin.png" width="50"></img>
            <img className='side-button side-button-g' src="../src/assets/github.png" width="50"></img>
            <img className='side-button side-button-e' src="../src/assets/email.png" width="50"></img>
        </header>
    )
}