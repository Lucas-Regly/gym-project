import React from 'react'

const ContatoCards = ({ icon, endereco }) => {
    return (
        <div className='contato-card'>
            <p>{icon}</p>
            <p>{endereco}</p>
        </div>
    )
}

export default ContatoCards