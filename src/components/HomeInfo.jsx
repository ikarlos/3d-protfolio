import React from 'react'
import { Link } from 'react-router-dom'
import { arrow } from "../assets/icons"

const InfoBox = ({ text, link, btnText }) => (
    <div className='info-box'>
        <p className=' font-medium md:text-xl text-center'>
            {text}
        </p>
        <Link className='neo-brutalism-white neo-btn' to={link} >
            {btnText}
            <img src={arrow} alt="" className=' w-4 h-4 object-contain' />
        </Link>
    </div>


)
const renderContent = {
    1: (
        <h1 className=' sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
            Hi I'am <span className=' font-semibold'>Fahad</span> 👋
            <br />
            A Computer science Engineer fro kashmir

        </h1>
    ),
    2: (
        <InfoBox link="/about"
            text={' worked with many companies and picked up many skill along the way'}
            btnText={'Learn more '}
        />

    ),
    3: (
        <InfoBox link="/projects"
            text={'led multiple project to success over years .Curios about impact'}
            btnText={'Visit my portfolio '}
        />
    ),
    4: (
        <InfoBox link="/about"
            text={"looking for dev ? I'am just a few key stroks away"}
            btnText={'Lets talk '}
        />
    )
}

const HomeInfo = ({ currentStage }) => {
    return renderContent[currentStage] || null
}

export default HomeInfo