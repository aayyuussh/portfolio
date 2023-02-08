import './sketching.css';

function Sketching() {
    return (
        <div className='sketching'>
            <p className='main_title'>SKETCHING</p>
            <div className='sketch_tile'>
                <div style={{paddingTop: '3vmax'}}>
                    <div className='sketch_tiles'>
                        <img src="https://ik.imagekit.io/hfut635vd/sketching/1.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1675832909864" />
                        <img src="https://ik.imagekit.io/hfut635vd/sketching/2.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1675869566315" />
                    </div>
                    <div className='sketch_tiles'>
                        <img src="https://ik.imagekit.io/hfut635vd/sketching/3.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1675869565792" />
                        <img src="https://ik.imagekit.io/hfut635vd/sketching/4.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1675869566355" />
                        <img src="https://ik.imagekit.io/hfut635vd/sketching/5.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1675869566236" />
                    </div>
                </div>
                <div style={{paddingTop: '3vmax'}} className='sketch_tile_right'>
                    <img src="https://ik.imagekit.io/hfut635vd/sketching/6.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1675869566367" />
                </div>
            </div>
        </div>
    )
}

export default Sketching;