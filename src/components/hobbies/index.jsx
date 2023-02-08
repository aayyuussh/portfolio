import './hobbies.css';
import hamburger from '../../assets/icons/hamburger.svg';
import paintBrush from '../../assets/icons/paintBrush.svg';
import tea from '../../assets/icons/tea.svg';
import playing from '../../assets/icons/playing.svg';
import music from '../../assets/icons/music.svg';

function Hobbies() {
    return (
        <div className='hobbies'>
            <p className='main_title'>HOBBIES</p>
            <div className='hobbies_grp'>
                <div className='hobby_card'>
                    <img src={hamburger} />
                    <p>I love to Eat</p>
                </div>
                <div className='hobby_card'>
                    <img src={paintBrush} />
                    <p>I love to Draw</p>
                </div>
                <div className='hobby_card'>
                    <img src={tea} />
                    <p>I love tea</p>
                </div>
                <div className='hobby_card'>
                    <img src={playing} />
                    <p>I enjoy playing volleyball</p>
                </div>
                <div className='hobby_card'>
                    <img src={music} />
                    <p>I love to listen music</p>
                </div>
            </div>
        </div>
    )
}

export default Hobbies;