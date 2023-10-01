import './experience.css';

function Experience() {
    return (
        <div className='experience'>
            <p className='main_title'>EXPERIENCES</p>
            <div className='exp_list'>
                <p className='date'>May 2023 - Aug 2023</p>
                <div className='exp_details'>
                    <p className='company_name'>SUMMER OF BITCOIN</p>
                    <p className='designation'>UX Designer</p>
                    <ul style={{fontSize: '1.4vmax'}} className='description'>
                        <li>Conducted in-depth user interviews with 20+ Alby users , gathering insights to shape product direction</li>
                        <li>Categorized pain points, and prioritized 'jobs to be done' to drive a 25% increase in user satisfaction</li>
                        <li>Enhanced visual consistency by designing 50+ blog post images and implementing efficient templates</li>
                        <li>Led accessibility testing for Alby extension, recommending improvements and redesigning UI for better usability</li>
                    </ul>
                </div>
            </div>
            <div className='exp_list'>
                <p className='date'>April 2022 - July 2022</p>
                <div className='exp_details'>
                    <p className='company_name'>INDEPAY</p>
                    <p className='designation'>Product Designer</p>
                    <ul style={{fontSize: '1.4vmax'}} className='description'>
                        <li>Spearheaded UI enhancements for Tara app, elevating user engagement by 15% and streamlining payments </li>
                        <li>Cultivated profound fintech insights in internship, mastering payment optimization strategies </li>
                        <li>Designed captivating graphics for web and app interfaces, ensuring seamless brand consistency </li>
                        <li>Conducted user-focused research, implementing data-driven strategies to enhance payment app user experiences</li>
                    </ul>
                </div>
            </div>
            <div className='exp_list'>
                <p className='date'>Dec 2021 - Jan 2022</p>
                <div className='exp_details'>
                    <p className='company_name'>CURELINK</p>
                    <p className='designation'>Graphic Designer</p>
                    <ul style={{fontSize: '1.4vmax'}} className='description'>
                        <li>Spearheaded innovative graphic design projects, producing 20+ illustrations and 15+ infographics for Curelink's patient engagement app </li>
                        <li>Enhanced doctor-patient communication, create WhatsApp-compatible creatives, boosting user engagement </li>
                        <li>Leveraged artistic skills to visualize health information, aiding in the development of 10+ condition-specific diet plans </li>
                        <li>Supported team collaboration, delivering timely design assets, contributing to a 20% reduction in project timelines</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Experience;