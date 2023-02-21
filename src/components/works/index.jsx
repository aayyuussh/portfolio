import './works.css';
import Hover from 'react-3d-hover';

function Works() {
    return (
        <div className='works'>
            <p className='main_title'>WORKS</p>
            <div className='work_tile' style={{paddingTop: '2vmax'}}>
                <div>
                    <Hover max={15} scale={0.98} speed={500}>
                        <a href='https://www.behance.net/gallery/151043199/Pregocare' target='_blank' style={{cursor: 'pointer'}}>
                            <img src="https://ik.imagekit.io/hfut635vd/images/pregocare.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1675833283595" className='work_tile_img'/>
                        </a>
                    </Hover>
                </div>
                <div>
                    <Hover max={15} scale={0.98} speed={500}>
                        <a href='https://www.behance.net/gallery/163758011/ParkEz' target='_blank' style={{cursor: "pointer"}}>
                            <img src="https://ik.imagekit.io/hfut635vd/images/parkez.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1676970409974" className='work_tile_img'/>
                        </a>
                    </Hover>
                </div>
            </div>
            <div className='work_tile' style={{paddingTop: '2vmax'}}>
                <div>
                    <Hover max={15} scale={0.98} speed={500}>
                        <a href='https://drive.google.com/drive/folders/1ALsaMSbmbpJS9OHa3L_0h5hdGah3uzfw?usp=sharing' target='_blank' style={{cursor: 'pointer'}}>
                            <img src="https://ik.imagekit.io/hfut635vd/images/manipulation.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1675833285837" className='work_tile_img'/>
                        </a>
                    </Hover>
                </div>
                <div>
                    <Hover max={15} scale={0.98} speed={500}>
                        <a href='https://drive.google.com/drive/folders/13ZxK0ZWhxMRuFSOWQsK4Fe2HseXtxv-j?usp=sharing' target='_blank' style={{cursor: 'pointer'}}>
                            <img src="https://ik.imagekit.io/hfut635vd/images/tshirt.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1675833283118" className='work_tile_img'/>
                        </a>
                    </Hover>
                </div>
            </div>
        </div>
    )
}

export default Works;