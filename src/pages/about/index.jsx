import Experience from '../../components/experience';
import Hobbies from '../../components/hobbies';
import Skills from '../../components/skills';
import image from '../../assets/images/cameraRoll.svg';
import Marquee from 'react-fast-marquee';
import './about.css'

function About(){
    return (
        <div>
            <div className='about'>
                <p>I'm a 3rd year undergraduate at IIT Roorkee studying Production and Industrial Engineering. My journey so far has a series of curves and at each curve I've learnt something new, understood myself better.</p>
                <p>An amalgamation of my interests; design, technology and products, has inclined me towards UX design, specifically, creating strategic and meaningful experiences for people. More over, I love taking initiatives and have also led teams to solve problems and connect everyone with vision. Now, I'm looking to grow and explore the field with experts and users around the world.</p>
                <p style={{paddingBottom: '3vmax'}}>Along the way, I've learned to embrace the process, think holistically, collaborate in a team and empathize with the users better. I've dived into multiple projects as a UX designer and gained a deeper understanding of all four. Besides design, I like to draw and to play volleyball.</p>
                <a href='https://drive.google.com/file/d/1wZ6zUd53IVe8XYIqBjhCJcO0H9ix7I4L/view' target='_blank'>Look at my resume</a>
            </div>
            <div className='camera_roll'>
                <Marquee gradient={false}>
                    <img src={image} />
                    <img src={image} />
                    <img src={image} />
                    <img src={image} />
                    <img src={image} />
                    <img src={image} />
                    <img src={image} />
                    <img src={image} />
                    <img src={image} />
                    <img src={image} />
                </Marquee>
            </div>
            <Hobbies />
            <Skills />
            <Experience />
        </div>
    )
}

export default About;