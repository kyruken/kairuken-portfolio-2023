
export default function Socials() {
    return (
        <section>
            <h2>Socials/Contact</h2>
            <div className='flex content-reverse ai-center jc-center gap-5'>
                <a href='/' className="flex-column ai-center jc-flexend contact-container padding-tb-0">
                    <img className='margin-left-1' src='../src/assets/linkedin.png' alt='linkedin icon' width='175'></img>
                    <h3>Linkedin</h3>
                </a>
                <a href='/' className="flex-column ai-center jc-flexend contact-container padding-tb-0">
                    <img src='../src/assets/github.png' alt='github icon' width='150'></img>
                    <h3>Github</h3>
                </a>
                <a href='/' className="flex-column ai-center jc-flexend contact-container padding-tb-0">
                    <img src='../src/assets/email.png' alt='email icon' width='150'></img>
                    <h3>Email</h3>
                </a>
            </div>
        </section>
    )
}