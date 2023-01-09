
export default function Navbar() {
    return (
        <nav className='flex jc-spacebetween ai-center padding-lr-3'>
            <h2>Kyle Arenas</h2>
            <ul className='flex gap-2'>
                <li>Home</li>
                <li>About me</li>
                <li>Skills</li>
                <li>Projects</li>
            </ul>
            <div className='hamburger-menu'>
                <div className='line1'></div>
                <div className='line2'></div>
                <div className='line3'></div>
            </div>
        </nav>
    )
}