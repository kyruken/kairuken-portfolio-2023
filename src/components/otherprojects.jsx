import MiniProject from "./miniprojects"
import gigagamers from "../assets/projecticons/gigagamers.png"
import koin from "../assets/projecticons/koin.png"
import tenzies from "../assets/projecticons/tenzies.png"
import stringgen from "../assets/projecticons/stringgen.png"
export default function OtherProjects() {
    return (
        <section className="bg-secondary padding-lr-4 padding-tb-5">
            <h2 className="ta-center">Other Projects</h2>
            <div className="otherprojects-container padding-1">
                <MiniProject 
                title='Gigagamers'
                description='Gigagamers is a backend application where users can sign up, log in, and post onto a message board.'
                image={gigagamers}
                demo=''
                code='https://github.com/kyruken/gigagamers'
                />
                <MiniProject
                title='Koin'
                description='Koin is a frontend application that pulls from Coinlayer API and takes coin data to display to users.' 
                image={koin}
                demo=''
                code='https://github.com/kyruken/Koin'
                />
                <MiniProject 
                title='Tenzies'
                description='Tenzies is a frontend application that resembles the board game tenzies. Users roll until they match all 6 die.'
                image={tenzies}
                demo=''
                code='https://github.com/kyruken/Tenzies'
                />
                <MiniProject 
                title='String Generator'
                description='String Generator is a frontend application that pulls from a Random Word API and allows users to pull random words.'
                image={stringgen}
                demo=''
                code='https://github.com/kyruken/string-generator'
                />
            </div>
        </section>
    )
}
