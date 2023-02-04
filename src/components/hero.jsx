
export default function Hero() {
    return (
        <header className='flex-column ai-center jc-center padding-lr-4 padding-top-3 padding-bottom-4' id='home'>
            <h1 className="f-weight-light">Hi, I'm <span className='highlight'>Kyle.</span></h1>
            <h2 className="f-weight-light padding-tb-1">I'm a <span className="highlight">full stack developer.</span></h2>
            <div className="flex gap-3">
                <a href="#projects"><button className="red-button">Projects</button></a>
                <a href="#aboutme"><button className="greenline-button">About me</button></a>
            </div>
            <a target="_blank" href="https://www.linkedin.com/in/kyle-arenas-49224a22a/"><img className='side-button side-button-l' src="../src/assets/linkedin.png" width="50"></img></a>
            <a target="_blank" href="https://github.com/kyruken"><img className='side-button side-button-g' src="../src/assets/github.png" width="50"></img></a>
            <a href="mailto:kairukencode@gmail.com"><img className='side-button side-button-e' src="../src/assets/email.png" width="50"></img></a>
        </header>
    )
}