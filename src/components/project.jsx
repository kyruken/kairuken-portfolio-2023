
export default function Project() {
    return (
        <article className="content-container ai-center margin-bottom-3">
            <div className="flex-column gap-3">
                <h3>Project Title</h3>
                <div className="paragraph-container">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div className="flex jc-center gap-4">
                    <button className="red-button">Demo</button>
                    <button className="red-button">Code</button>
                </div>
            </div>
            <img alt='img about project'></img>
        </article>
    )
}