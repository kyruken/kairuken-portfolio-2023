
export default function Navbar() {
    return (
        <nav className='flex jc-spacebetween ai-center'>
            <h2>Kyle Arenas</h2>
            <ul className='flex gap-2'>
                <li><a href="#home">Home</a></li>
                <li><a href="#aboutme">About me</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
            </ul>
            <div className='hamburger-menu'>
                <div className='line1'></div>
                <div className='line2'></div>
                <div className='line3'></div>
            </div>
        </nav>
    )
}