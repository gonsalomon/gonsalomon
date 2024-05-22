import React from 'react'
import Image from 'next/image'

function Header() {
    return (
        <header className='row'>
            <div className='col'>
                <h1>Gonzalo Salomon</h1>
                <p>Junior BI Consultant | Junior ETL Developer | Junior Web Developer</p>
                <p>Consultor BI Junior | Desarrollador ETL Junior | Desarrollador Web Junior</p>
            </div>
            <div>
                <Image
                    src="/IMG_20230204_215854.jpg"
                    width={245}
                    height={330}
                    alt='A photo of the author'
                    style={{ borderRadius: '10px', border: 'solid white' }}
                />
            </div>
        </header>
    )
}

export default Header