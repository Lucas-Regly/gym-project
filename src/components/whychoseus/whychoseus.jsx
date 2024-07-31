import React from 'react'

const Whychoseus = ({ icone, titulo, paragrafo }) => {
    return (
        <div className='why-chose-us-card'>
            <div className='icone-laranja'>
                <p>{icone}</p>
            </div>
            <h3>{titulo}</h3>
            <p className='p-dois'>{paragrafo}</p>
        </div>
    )
}

export default Whychoseus;