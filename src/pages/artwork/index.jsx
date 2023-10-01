import Digital from '../../components/digital';
import Illustrations from '../../components/illustrations';
import LogoD from '../../components/logoD';
import Sketching from '../../components/sketching';
import './artwork.css'

function Artwork(){
    return (
        <div>
            <div className='artwork_hero'>
                <div className='artwork_hero_tile'>
                    <div className='artwork_hero_left'>
                        <p>In addition to my design work, I also explore <span style={{fontSize: '2vmax', fontWeight: '600'}}>illustrations, sketching</span> and <span style={{fontSize: '2vmax', fontWeight: '600'}}>digital painting</span> as creative pursuits.</p>
                    </div>
                    <div className='artwork_hero_right'>
                        <img src="https://ik.imagekit.io/hfut635vd/images/artworkHero.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1675872765826" />
                    </div>
                </div>
                <div className='scroll_section'>
                    <span>Scroll to see my <span style={{fontSize: '1vmax', color: '#F0B18E', fontWeight: '500'}}>ARTWORKS</span></span>
                    <a href='#artwork'><div className='scrollanimation'></div></a>
                </div>
            </div>
            <div id="artwork">
                <Illustrations />
                <LogoD />
                <Digital />
                <Sketching />
            </div>
        </div>
    )
}

export default Artwork;