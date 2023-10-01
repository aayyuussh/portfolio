import './footer.css'

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
                        <div className='behance'></div>
                    </a>
                    <a href='https://twitter.com/Ayush31453170' target='_blank'>
                        <div className='twitter'></div>
                    </a>
                    <a href='https://www.instagram.com/_ayush.varshney/' target='_blank'>
                        <div className='instagram'></div>
                    </a>
                    <a href='https://www.linkedin.com/in/ayush-varshney-57a982201/' target='_blank'>
                        <div className='linkedin'></div>
                    </a>
                    <a href='https://dribbble.com/123ayush' target='_blank'>
                        <div className='dribble'></div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer;