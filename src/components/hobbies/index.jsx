import './hobbies.css';

function Hobbies() {
    return (
        <div className='hobbies'>
            <p className='main_title'>HOBBIES</p>
            <div className='hobbies_grp'>
                <div className='hobby_card'>
                    <img src='https://ik.imagekit.io/hfut635vd/icons/Group_261-1.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1676971289592' />
                    <p>Watching Movies</p>
                </div>
                <div className='hobby_card'>
                    <img src='https://ik.imagekit.io/hfut635vd/icons/Group_258.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1676971382709' />
                    <p>Sketching</p>
                </div>
                <div className='hobby_card'>
                    <img src='https://ik.imagekit.io/hfut635vd/icons/Group_259.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1676971289373' />
                    <p>Designing</p>
                </div>
                <div className='hobby_card'>
                    <img src='https://ik.imagekit.io/hfut635vd/icons/Group_260.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1676971289500' />
                    <p>Playing volleyball</p>
                </div>
                <div className='hobby_card'>
                    <img src='https://ik.imagekit.io/hfut635vd/icons/Group_261.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1676971289525' />
                    <p>Watching Anime</p>
                </div>
            </div>
        </div>
    )
}

export default Hobbies;