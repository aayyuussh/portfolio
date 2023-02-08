import './works.css';
import Hover from 'react-3d-hover';

function Works() {
    return (
        <div className='works'>
            <p className='main_title'>WORKS</p>
            <div className='work_tile' style={{paddingTop: '2vmax'}}>
                <div>
                    <Hover max={15} scale={0.98} speed={500}>
                        <img src="https://ik.imagekit.io/hfut635vd/images/pregocare.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1675833283595" className='work_tile_img'/>
                    </Hover>
                </div>
                <div>
                    <Hover max={15} scale={0.98} speed={500}>
                        <img src="https://ik.imagekit.io/hfut635vd/images/redesign.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1675833283410" className='work_tile_img'/>
                    </Hover>
                </div>
            </div>
            <div className='work_tile' style={{paddingTop: '2vmax'}}>
                <div>
                    <Hover max={15} scale={0.98} speed={500}>
                        <img src="https://ik.imagekit.io/hfut635vd/images/manipulation.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1675833285837" className='work_tile_img'/>
                    </Hover>
                </div>
                <div>
                    <Hover max={15} scale={0.98} speed={500}>
                        <img src="https://ik.imagekit.io/hfut635vd/images/tshirt.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1675833283118" className='work_tile_img'/>
                    </Hover>
                </div>
            </div>
        </div>
    )
}

export default Works;