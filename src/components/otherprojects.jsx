import MiniProject from "./miniprojects"
export default function OtherProjects() {
    return (
        <section className="bg-secondary padding-lr-4 padding-tb-5">
            <h2>Other Projects</h2>
            <div className="otherprojects-container padding-1">
                <MiniProject 
                title='Gigagamers'
                description='Gigagamers is a backend application where users that sign up can post onto an online postboard. Users that are not signed up are unable to see the usernames for each post.'
                image=''
                demo=''
                code='https://github.com/kyruken/gigagamers'
                />
                <MiniProject
                title='Koin'
                description='Koin is a frontend application that is a coinbase-lite program. The application fetches from coinlayer API to present crypto currency coins for users to see.' 
                image=''
                demo=''
                code='https://github.com/kyruken/Koin'
                />
                <MiniProject 
                title='Tenzies'
                description='Tenzies is a frontend application that resembles the board game tenzies. Users must roll until their 6 die are all of the same number while having the ability to hold dice.'
                image=''
                demo=''
                code='https://github.com/kyruken/Tenzies'
                />
                <MiniProject 
                title='Quizzical'
                description='Quizzical is a frontend application that fetches from a Quiz API to obtain questions. Users must then answer random questions. Users receive a score at the end.'
                image=''
                demo=''
                code='https://github.com/kyruken/quizzical'
                />
            </div>
        </section>
    )
}
