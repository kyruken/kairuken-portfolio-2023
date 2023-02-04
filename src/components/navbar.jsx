
export default function Navbar() {
    return (
        <nav className='flex padding-lr-4 padding-tb-1'>
            <h2>Kyle Arenas</h2>
            <ul className='flex gap-2'>
                <li><a href="#home">Home</a></li>
                <li><a href="#aboutme">About me</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
            </ul>
        </nav>
    )
}