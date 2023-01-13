import Project from './project'
import ReverseProject from './reverseproject'
export default function MyProjects() {
    return (
        <section className='padding-lr-4 padding-tb-5' id='projects'>
            <h2>My Projects</h2>

            <Project
                title='Eco Up Sustainability Application'
                technology='React, Node.js, Express, Mongodb'
                description='Eco up is a full stack application that employs JSON web tokens to allow for user sessions. Users can sign up to solve sustainability problems to lighten their impact on the Earth. Users can send submissions of their solved problem for others to see.'
                image=''
                demo=''
                code='https://github.com/kyruken/frontend-ecoup'
            />
            <ReverseProject
                title='VG Inventory Application'
                technology='Node.js, Express, MongoDb, EJS'
                description='VG Inventory Application is a backend application utilizing EJS as a view engine to present users with a user interface. This application is used to add or delete video games, genres, or publishers on the app. Video games can also be searched by genres and publishers.'
                image=''
                demo='https://vg-inventory-app.onrender.com'
                code='https://github.com/kyruken/vg-inventory-application'
            />
            <Project
                title='Blog Application'
                technology='React, Node.js, Express, MongoDb'                
                description='Blog application is a full stack application consisting of two frontend programs connecting to a backend program. The first frontend contains a UI for users to visit and see blogs, and the other frontend program is an admin dashboard where the admin must log in to perform admin commands.'
                image=''
                demo=''
                code='https://github.com/kyruken/frontend-blog-page'
            />

        </section>
    )
}