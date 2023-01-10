
export default function Socials() {
    return (
        <section>
            <h2>Socials/Contact</h2>
            <div className='flex content-reverse ai-center jc-center gap-5'>
                <div className="flex-column ai-center jc-flexend contact-container">
                    <img alt='linkedin icon'></img>
                    <h3>Linkedin</h3>
                </div>
                <div className="flex-column ai-center jc-flexend contact-container">
                    <img alt='github icon'></img>
                    <h3>Github</h3>
                </div>
                <div className="flex-column ai-center jc-flexend contact-container">
                    <img alt='email icon'></img>
                    <h3>Email</h3>
                </div>
            </div>
        </section>
    )
}