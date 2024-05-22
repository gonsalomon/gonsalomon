import React from 'react'
import Image from 'next/image'

const renderSwitch = (p) => {
    switch (p) {
        case 'About me | Sobre mí':
            return (<div>
                <p>EN Hello! I'm Gonzalo, 26 years old.</p>
                <p> I've enrolled in two IT college careers, Ingeniería de Sistemas (dropped due to COVID making it hard without having presential classes) and Tecnicatura Universitaria en Desarrollo de Aplicaciones Informáticas (ongoing).</p>
                <p> My vocation has always been programming, clearly! And after finishing my first year on the second career, I got a job as a Trainee BI Consultant, in We Plan.</p>
                <p> There, I got to learn the basics on Business Intelligence and Data Warehousing, along with plenty of tools used within the BI world.</p>
                <p> We later started specializing into several branches; and while some went into data viz, some into MicroStrategy, I went into data engineering- SSIS, ETL development with Visual Studio along with SSAS, MDM cubes made in Visual Studio as well.</p>
                <p> Later, our training stage was completed, getting into projects as they came into the company. And I got to work as a junior in ETL development as consultant for the CABA government, using plentiful amounts of SQL all around; while continuing to grow in my data warehouse building abilities.</p>
                <p> We also got to train in knowledge on several promptly used tools in the industry, such as Alation (for data catalogs/governance), Soda (for data quality); and in the huge variety of tools there are, specializing in PowerBI -without ignoring the existence of Looker or Tableau.</p>
            </div>)
        case 'Contact me! | Contactame!':
            return (
                <ul className='row'>
                    <li>
                        <Image
                            src={'/gh-logo.jpg'}
                            width={90}
                            height={52}
                            alt='GitHub logo'
                        />
                        <a href='github.com/gonsalomon'>My GitHub | Mi GitHub</a>
                    </li>
                    <li>
                        <Image
                            src={'/linkedin-logo.png'}
                            width={56}
                            height={56}
                            alt='LinkedIn logo'
                        />
                        <a href='linkedin.com/in/gonsalomon'>My Linkedin | Mi LinkedIn</a>
                    </li>
                    <li>
                        <Image
                            src={'/gmail-logo.png'}
                            width={56}
                            height={56}
                            alt='Gmail logo'
                        />
                        <a href='mailto:salomongonzalo8@gmail.com'>Mail me | Mandame un mail</a>
                    </li>
                </ul>
            )
        case 'My work | Mi trabajo':
            return "Work in progress! | Mis obras en JSX (en progreso)"
        default:
            return null
    }
}

function Section({ colr, title }) {
    return (
        <section className='col'>
            <div className={colr}><h2 className='title'>{title}</h2></div>
            {renderSwitch(title)}
        </section>
    )
}

export default Section