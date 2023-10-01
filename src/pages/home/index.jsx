import Works from '../../components/works';
import './home.css'
import scroll from '../../assets/icons/scroll.svg';
import { useEffect, useRef, useState } from 'react';

const delay = (time) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve("ok"), time);
    });
};

function Home(){
    const text = ["Ayush", "Varshney"];
    const [state, setState] = useState("Ayush");
    const changeText = async () => {
        for(let i = 0; i < text.length; ) {
            await delay(2000);
            setState(text[i]);
            i = (i + 1) % 2;
        }
    };
    useEffect(() => {
        changeText();
    }, []);
    return (
        <div>
            <div className='home_hero'>
                <div className='home_hero_tile'>
                    <div className='home_hero_left'>
                        {/* <p className='welcome_text'>Welcome to my portfolio</p> */}
                        <p className='hi_text'>Hi!! I am <span className={state}>{state}</span></p>
                        <p className='desc_text'>-Product Design -Interactions -Graphics Design</p>
                        <p className='desc_text' style={{color: "var(--685648, #685648)", fontSize: "0.9vmax"}}>Previously worked 
                            <a style={{fontSize: '0.9vmax', cursor: 'pointer', textDecoration: 'none', color: "var(--685648, #685648)"}} href="https://www.summerofbitcoin.org/" target='_blank'> @Summer of Bitcoin</a>
                            <a style={{fontSize: '0.9vmax', cursor: 'pointer', textDecoration: 'none', color: "var(--685648, #685648)"}} href="https://getalby.com/" target='_blank'> @Alby</a>
                            <a style={{fontSize: '0.9vmax', cursor: 'pointer', textDecoration: 'none', color: "var(--685648, #685648)"}} href="https://www.indepay.com/" target='_blank'> @Indepay</a>
                            <a style={{fontSize: '0.9vmax', cursor: 'pointer', textDecoration: 'none', color: "var(--685648, #685648)"}} href="https://cure.link/" target='_blank'> @Curelink</a>
                        </p>
                    </div>
                    <div className='artwork_hero_right'>
                        <img src="https://ik.imagekit.io/hfut635vd/images/homephoto.svg?updatedAt=1694116218440" />
                    </div>
                </div>
                <div className='scroll_section'>
                    <span>Scroll to see my <span style={{fontSize: '1vmax', color: '#F0B18E', fontWeight: '500'}}>WORK</span></span>
                    <a href='#scrollwork'><div className='scrollanimation'></div></a>
                </div>
            </div>
            <div id="scrollwork">
                <Works />
            </div>
        </div>
    )
}

export default Home;