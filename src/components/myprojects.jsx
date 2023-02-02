import Project from './project'
import ReverseProject from './reverseproject'
import ecoup from '../assets/videos/ecoup.mp4'
import vginvapp from '../assets/videos/vginvapp.mp4'
import blog from '../assets/videos/blog.mp4'
export default function MyProjects() {
    return (
        <section className='padding-lr-4 padding-tb-5' id='projects'>
            <h2 className='ta-center'>My Projects</h2>

            <Project
                title='Eco Up'
                technology='React, Node.js, Express, Mongodb'
                description='Eco up is a problem solving application focused on sustainability. Users can sign up to solve sustainability problems and look at other user submissions.'
                video={ecoup}
                demo='https://ecoup.onrender.com'
                code='https://github.com/kyruken/frontend-ecoup'
            />
            <ReverseProject
                title='VG Inv App'
                technology='Node.js, Express, MongoDb, EJS'
                description='VG inventory application is used to add or delete video games, genres, or publishers on the app. Video games can also be searched by genres and publishers.'
                video={vginvapp}
                demo='https://vg-inventory-app.onrender.com'
                code='https://github.com/kyruken/vg-inventory-application'
            />
            <Project
                title='Blog Application'
                technology='React, Node.js, Express, MongoDb'                
                description='Blog Application is a blog website that takes posts from an admin page. Users will view these posts on the blog page and can comment.'
                video={blog}
                demo='https://kingofthebeasts-blog.onrender.com'
                code='https://github.com/kyruken/frontend-blog-page'
            />

        </section>
    )
}