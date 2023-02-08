import './illustrations.css';
import i1 from '../../assets/illustrations/1.svg';
import i2 from '../../assets/illustrations/2.svg';
import i3 from '../../assets/illustrations/3.svg';
import i4 from '../../assets/illustrations/4.svg';
import i5 from '../../assets/illustrations/5.svg';
import i6 from '../../assets/illustrations/6.svg';

function Illustrations() {
    return (
        <div className='illustrations'>
            <p className='main_title'>ILLUSTRATIONS</p>
            <div className='ill_tile' style={{paddingTop: '3vmax'}}>
                <img src={i1} />
                <img src={i2} />
                <img src={i3} />
            </div>
            <div className='ill_tile'>
                <img src={i4} />
                <img src={i5} />
                <img src={i6} />
            </div>
        </div>
    )
}

export default Illustrations;