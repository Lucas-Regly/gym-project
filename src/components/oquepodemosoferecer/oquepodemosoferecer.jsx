import React from 'react'

const Oquepodemosoferecer = ({img,title, span}) => {
    return (
        <div className='oqo-card'>
            <img className='oqo-img' src={img} alt={title} title={title} />
            <span>{span}</span>
        </div>
    )
}

export default Oquepodemosoferecer;