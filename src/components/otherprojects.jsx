import MiniProject from "./miniprojects"
import gigagamers from "../assets/projecticons/gigagamers.png"
import koin from "../assets/projecticons/koin.png"
import tenzies from "../assets/projecticons/tenzies.png"
import tictactoe from "../assets/projecticons/tictactoe.png"
export default function OtherProjects() {
    return (
        <section className="bg-secondary padding-lr-4 padding-tb-5">
            <h2 className="ta-center">Other Projects</h2>
            <div className="otherprojects-container padding-1">
                <MiniProject 
                title='Gigagamers'
                description='Gigagamers is a backend application where users can sign up to log in and post onto a message board.'
                image={gigagamers}
                demo='https://gigagamers.onrender.com/'
                code='https://github.com/kyruken/gigagamers'
                />
                <MiniProject
                title='Koin'
                description='Koin is a frontend application that fetches from the Coinlayer API and pulls coin data to display to users.' 
                image={koin}
                demo='https://kyruken.github.io/Koin/'
                code='https://github.com/kyruken/Koin'
                />
                <MiniProject 
                title='Tenzies'
                description='Tenzies is a frontend application that mimics the board game tenzies. Users roll until they match all 6 die.'
                image={tenzies}
                demo='https://kyruken.github.io/Tenzies/'
                code='https://github.com/kyruken/Tenzies'
                />
                <MiniProject 
                title='Tic-Tac-Toe'
                description='Tic-Tac-Toe is a frontend application resembling the famous game, tic-tac-toe. Two players required.'
                image={tictactoe}
                demo='https://kyruken.github.io/tic-tac-toe/'
                code='https://github.com/kyruken/tic-tac-toe'
                />
            </div>
        </section>
    )
}
