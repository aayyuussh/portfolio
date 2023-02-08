import './experience.css';

function Experience() {
    return (
        <div className='experience'>
            <p className='main_title'>EXPERIENCES</p>
            <div className='exp_list'>
                <p className='date'>April 2022 - July 2022</p>
                <div className='exp_details'>
                    <p className='company_name'>INDEPAY</p>
                    <p className='designation'>Product Designer</p>
                    <p className='description'>Indepay Indepay setara is indonesia fintech company which goal to make payment experience better and provide one click checkout. During this intern, Worked on the UI of tara app and learn new things about how fintech company works, also made graphics for the website and app. Did the research for making the user's experience better while using any payment app.</p>
                </div>
            </div>
            <div className='exp_list'>
                <p className='date'>Dec 2021 - Jan 2022</p>
                <div className='exp_details'>
                    <p className='company_name'>CURELINK</p>
                    <p className='designation'>Graphic Designer</p>
                    <p className='description'>Curelink help doctors to connect with their patients by providing conditionspecific advice on diet plans, exercise regimens and more detailed handling of patient queries through whatsapp. Worked as graphic design intern and designed illustrations, infographics and creatives for the app.</p>
                </div>
            </div>
        </div>
    )
}

export default Experience;