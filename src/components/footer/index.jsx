import './footer.css'
import behance from '../../assets/icons/behance.svg';
import twitter from '../../assets/icons/twitter.svg';
import instagram from '../../assets/icons/instagram.svg';
import linkedin from '../../assets/icons/linkedin.svg';
import dribble from '../../assets/icons/dribble.svg';

function Footer(){
    return (
        <div className='footer'>
            <div className='footer_left'>
                <p>Let's Have A Conversation!</p>
                <a href='mailto:ayushvarshney0407@gmail.com'>ayushvarshney0407@gmail.com</a>
            </div>
            <div className='footer_right'>
                <div className='footer_icons'>
                    <a href='https://www.behance.net/ayushvarshney1' target='_blank'>
                        <img src={behance} />
                    </a>
                    <a href='https://twitter.com/Ayush31453170' target='_blank'>
                        <img src={twitter} />
                    </a>
                    <a href='https://www.instagram.com/_ayush.varshney/' target='_blank'>
                        <img src={instagram} />
                    </a>
                    <a href='https://www.linkedin.com/in/ayush-varshney-57a982201/' target='_blank'>
                        <img src={linkedin} />
                    </a>
                    <a href='https://dribbble.com/123ayush' target='_blank'>
                        <img src={dribble} />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer;