
export default function Socials() {
    return (
        <section className='padding-lr-4 padding-tb-5'>
            <h2>Socials/Contact</h2>
            <div className='flex-column gap-3 socials-container'>
                <div className="flex ai-center gap-0">
                    <div className="icon-circle">
                        <svg width="24px" height="24px" viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                            <g id="style=linear">
                                <g id="email">
                                    <path id="vector" d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z" stroke="#000000" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                    <path id="vector_2" d="M18.7698 7.7688L13.2228 12.0551C12.5025 12.6116 11.4973 12.6116 10.777 12.0551L5.22998 7.7688" stroke="#000000" stroke-width="1.5" stroke-linecap="round" />
                                </g>
                            </g>
                        </svg>
                    </div>
                    <span>Email: </span>
                    <a>kyruken@gmail.com</a>
                </div>

                <div className="flex ai-center gap-0">
                    <div className="icon-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 72 72"><g fill="none" fill-rule="evenodd"><rect width="72" height="72" fill="#000" rx="4" /><path fill="#FFF" d="M13.139 27.848h9.623V58.81h-9.623V27.848zm4.813-15.391c3.077 0 5.577 2.5 5.577 5.577 0 3.08-2.5 5.581-5.577 5.581a5.58 5.58 0 1 1 0-11.158zm10.846 15.39h9.23v4.231h.128c1.285-2.434 4.424-5 9.105-5 9.744 0 11.544 6.413 11.544 14.75V58.81h-9.617V43.753c0-3.59-.066-8.209-5-8.209-5.007 0-5.776 3.911-5.776 7.95V58.81h-9.615V27.848z" /></g></svg>
                    </div>
                    <div>
                        <span>Linkedin: </span>
                        <a href='https://www.linkedin.com/in/kyle-arenas-49224a22a/'>https://www.linkedin.com/in/kyle-arenas-49224a22a/</a>
                    </div>
                </div>

                <div className="flex ai-center gap-0">
                    <div className="icon-circle">
                    <svg width='32px' height='32px' xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"/></svg>
                    </div>
                    <span>Github: </span>
                    <a href='https://github.com/kyruken'>https://github.com/kyruken</a>
                </div>

                {/* <a href='/' className="flex-column ai-center jc-flexend contact-container padding-tb-0">
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
                </a> */}
            </div>
        </section>
    )
}