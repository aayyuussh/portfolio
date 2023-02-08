import './works.css';
import pregocare from '../../assets/images/pregocare.svg';
import redesign from '../../assets/images/redesign.svg';
import manipulation from '../../assets/images/manipulation.svg';
import tshirt from '../../assets/images/tshirt.svg';
import Hover from 'react-3d-hover';

function Works() {
    return (
        <div className='works'>
            <p className='main_title'>WORKS</p>
            <div className='work_tile' style={{paddingTop: '2vmax'}}>
                <div>
                    <Hover max={15} scale={0.98} speed={500}>
                        <img src={pregocare} className='work_tile_img'/>
                    </Hover>
                </div>
                <div>
                    <Hover max={15} scale={0.98} speed={500}>
                        <img src={redesign} className='work_tile_img'/>
                    </Hover>
                </div>
            </div>
            <div className='work_tile' style={{paddingTop: '2vmax'}}>
                <div>
                    <Hover max={15} scale={0.98} speed={500}>
                        <img src={manipulation} className='work_tile_img'/>
                    </Hover>
                </div>
                <div>
                    <Hover max={15} scale={0.98} speed={500}>
                        <img src={tshirt} className='work_tile_img'/>
                    </Hover>
                </div>
            </div>
        </div>
    )
}

export default Works;