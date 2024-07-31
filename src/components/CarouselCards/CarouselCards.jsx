import React from 'react'

const CarouselCards = ({ img,  nomeProfessor, funcao }) => {
    return (
        <div className='carousel-card'>
            <img src={img} alt={nomeProfessor} />
            <div className='carousel-fundo-cinza'></div>
            <div className='carousel-fundo-preto'>
                <h5>{nomeProfessor}</h5>
                <span>{funcao}</span>
            </div>
        </div>
    )
}

export default CarouselCards