import './digital.css';
import d1 from '../../assets/digital/1.svg';
import d2 from '../../assets/digital/2.svg';
import d3 from '../../assets/digital/3.svg';
import d4 from '../../assets/digital/4.svg';
import d5 from '../../assets/digital/5.svg';
import d6 from '../../assets/digital/6.svg';
import d7 from '../../assets/digital/7.svg';
import d8 from '../../assets/digital/8.svg';

function Digital() {
    return (
        <div className='digital'>
            <p className='main_title'>DIGITAL ART</p>
            <div>
                <img src={d1} />
                <img src={d2} />
                <img src={d3} />
                <img src={d4} />
            </div>
            <div>
                <img src={d5} />
                <img src={d6} />
                <img src={d7} />
                <img src={d8} />
            </div>
        </div>
    )
}

export default Digital;