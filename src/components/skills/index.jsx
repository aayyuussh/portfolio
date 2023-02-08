import './skills.css';
import illustrator from '../../assets/icons/illustrator.svg';
import photoshop from '../../assets/icons/photoshop.svg';
import figma from '../../assets/icons/figma.svg';
import blender from '../../assets/icons/blender.svg';
import adobexd from '../../assets/icons/adobexd.svg';

function Skills() {
    return (
        <div className='skills'>
            <p className='main_title'>SOFTWARE SKILLS</p>
            <div className='skills_grp'>
                <div className='skill_card'>
                    <img src={illustrator} />
                    <p>Adobe Illustrator</p>
                </div>
                <div className='skill_card'>
                    <img src={photoshop} />
                    <p>Adobe Photoshop</p>
                </div>
                <div className='skill_card'>
                    <img src={figma} />
                    <p>Figma</p>
                </div>
                <div className='skill_card'>
                    <img src={blender} />
                    <p>Blender</p>
                </div>
                <div className='skill_card'>
                    <img src={adobexd} />
                    <p>Adobe XD</p>
                </div>
            </div>
        </div>
    )
}

export default Skills;