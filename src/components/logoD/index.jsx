import './logoD.css';
import blocsoc from '../../assets/images/blocsoc.svg';
import gambitor from '../../assets/images/gambitor.svg';
import explorin from '../../assets/images/explorin.svg';
import instagram from '../../assets/images/instagram.svg';
import hawt from '../../assets/images/hawt.svg';
import outreach from '../../assets/images/outreach.svg';

function LogoD() {
    return (
        <div className='logoD'>
            <p className='main_title'>LOGO DESIGN</p>
            <div className='logo_grid'>
                <img src={blocsoc} />
                <img src={gambitor} />
                <img src={explorin} />
                <img src={instagram} />
                <img src={hawt} />
                <img src={outreach} />
            </div>
        </div>
    )
}

export default LogoD;