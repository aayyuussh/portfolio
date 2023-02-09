import Experience from '../../components/experience';
import Hobbies from '../../components/hobbies';
import Skills from '../../components/skills';
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
                <Marquee gradient={false} speed={30}>
                    <div className='camera_roll_images'>
                        <img src="https://ik.imagekit.io/hfut635vd/my_photos/WhatsApp_Image_2023-01-24_at_11.46_11.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1675886669623" />
                        <img src="https://ik.imagekit.io/hfut635vd/my_photos/Frame_850.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1675886665625" />
                        <img src="https://ik.imagekit.io/hfut635vd/my_photos/Frame_851.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1675886665131" />
                        <img src="https://ik.imagekit.io/hfut635vd/my_photos/Frame_848.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1675886664906" />
                        <img src="https://ik.imagekit.io/hfut635vd/my_photos/Frame_847.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1675886664789" />
                        <img src="https://ik.imagekit.io/hfut635vd/my_photos/Frame_846.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1675886664604" />
                        <img src="https://ik.imagekit.io/hfut635vd/my_photos/Frame_849.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1675886664481" />
                        <img src="https://ik.imagekit.io/hfut635vd/my_photos/Frame_843.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1675886664287" />
                        <img src="https://ik.imagekit.io/hfut635vd/my_photos/Frame_844.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1675886664186" />
                        <img src="https://ik.imagekit.io/hfut635vd/my_photos/Frame_845.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1675886664075" />
                        <img src="https://ik.imagekit.io/hfut635vd/my_photos/Frame_841.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1675886661085" />
                        <img src="https://ik.imagekit.io/hfut635vd/my_photos/Frame_842.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1675886663267" />
                        <img src="https://ik.imagekit.io/hfut635vd/my_photos/Frame_840.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1675886660775" />
                        <img src="https://ik.imagekit.io/hfut635vd/my_photos/Frame_839.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1675886660560" />
                        <img src="https://ik.imagekit.io/hfut635vd/my_photos/Frame_837.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1675886660355" />
                        <img src="https://ik.imagekit.io/hfut635vd/my_photos/Frame_838.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1675886660058" />
                        <img src="https://ik.imagekit.io/hfut635vd/my_photos/Frame_836.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1675886659867" />
                        <img src="https://ik.imagekit.io/hfut635vd/my_photos/Frame_833.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1675886659795" />
                        <img src="https://ik.imagekit.io/hfut635vd/my_photos/Frame_835.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1675886659762" />
                        <img src="https://ik.imagekit.io/hfut635vd/my_photos/Frame_832.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1675886659700" />
                        <img src="https://ik.imagekit.io/hfut635vd/my_photos/Frame_834.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1675886659599" />
                    </div>
                </Marquee>
            </div>
            <Hobbies />
            <Skills />
            <Experience />
        </div>
    )
}

export default About;