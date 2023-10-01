import { useState } from 'react';
import './works.css';
import Hover from 'react-3d-hover';

function Works() {

    const [showMore, setShowMore] = useState(false);

    return (
        <div className='works'>
            <p className='main_title'>WORKS</p>
            <div className='work_tile' style={{paddingTop: '2vmax'}}>
                <div>
                    <Hover max={15} scale={0.98} speed={500}>
                        <a href='https://medium.com/@ayushvarshney0407/my-experience-at-summer-of-bitcoin-2023-bbb26a97237b' target='_blank' style={{cursor: 'pointer'}}>
                            <img src="https://ik.imagekit.io/hfut635vd/images/sob.svg?updatedAt=1694116501204" className='work_tile_img'/>
                        </a>
                    </Hover>
                </div>
                <div>
                    <Hover max={15} scale={0.98} speed={500}>
                        <a href='https://www.behance.net/gallery/181270997/Youtube-Education' target='_blank' style={{cursor: "pointer"}}>
                            <img src="https://ik.imagekit.io/hfut635vd/images/education.svg?updatedAt=1696178505774" className='work_tile_img'/>
                        </a>
                    </Hover>
                </div>
            </div>

            <div className='work_tile' style={{paddingTop: '2vmax'}}>
                <div>
                    <Hover max={15} scale={0.98} speed={500}>
                        <a href='https://www.behance.net/gallery/163758011/ParkEz' target='_blank' style={{cursor: "pointer"}}>
                            <img src="https://ik.imagekit.io/hfut635vd/images/parkez.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1676970409974" className='work_tile_img'/>
                        </a>
                    </Hover>
                </div>
                <div>
                    <Hover max={15} scale={0.98} speed={500}>
                        <a href='https://www.behance.net/gallery/151043199/Pregocare' target='_blank' style={{cursor: 'pointer'}}>
                            <img src="https://ik.imagekit.io/hfut635vd/images/pregocare.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1675833283595" className='work_tile_img'/>
                        </a>
                    </Hover>
                </div>
            </div>

            {showMore ? 
                <div className='work_tile' style={{paddingTop: '2vmax'}}>
                    <div>
                        <Hover max={15} scale={0.98} speed={500}>
                            <a href='https://drive.google.com/drive/u/0/folders/1ALsaMSbmbpJS9OHa3L_0h5hdGah3uzfw' target='_blank' style={{cursor: "pointer"}}>
                                <img src="https://ik.imagekit.io/hfut635vd/images/manipulation.svg?updatedAt=1675833285837" className='work_tile_img'/>
                            </a>
                        </Hover>
                    </div>
                    <div>
                        <Hover max={15} scale={0.98} speed={500}>
                            <a href='https://drive.google.com/drive/u/0/folders/13ZxK0ZWhxMRuFSOWQsK4Fe2HseXtxv-j' target='_blank' style={{cursor: 'pointer'}}>
                                <img src="https://ik.imagekit.io/hfut635vd/images/tshirt.svg?updatedAt=1675833283118" className='work_tile_img'/>
                            </a>
                        </Hover>
                    </div>
                </div> : <div></div>
            }

            <p className='desc_text' style={{textAlign: 'center', paddingTop: '1.5vmax', cursor: 'pointer', color: '#685648', fontWeight: 700, fontSize: '1.2vmax'}} onClick={()=>{
                if(showMore) setShowMore(false);
                else setShowMore(true);
            }}>Show {showMore==false ? "More" : "Less"}</p>

        </div>
    )
}

export default Works;