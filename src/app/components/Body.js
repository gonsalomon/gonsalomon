import React from 'react'
import Section from './Section'

function Body() {
    return (
        <div>
            <Section colr={'red'} title={'About me | Sobre mí'} />
            <Section colr={'blue'} title={'My work | Mi trabajo'} />
            <Section colr={'green'} title={'Contact me! | Contactame!'} />
        </div>
    )
}

export default Body