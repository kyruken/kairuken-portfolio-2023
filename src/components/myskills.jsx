
export default function MySkills() {
    return (
        <section className="bg-secondary padding-tb-4">
            <h2>My Skills</h2>
            <div className="flex content-reverse jc-center ai-center gap-5">
                <div className="bg-primary skill-container">
                    <h3>Front-end</h3>
                    <ul>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>Javascript</li>
                        <li>React</li>
                    </ul>
                </div>
                <div className="bg-primary skill-container">
                    <h3>Back-end</h3>
                    <ul>
                        <li>Node.js</li>
                        <li>Express</li>
                        <li>MongoDb</li>
                        <li>EJS</li>
                    </ul>
                </div>
                <div className="bg-primary skill-container">
                    <h3>Technologies</h3>
                    <ul>
                        <li>NPM</li>
                        <li>Git</li>
                        <li>Github</li>
                        <li>Postman</li>
                        <li>VS Code</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}