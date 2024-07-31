import React from 'react'

const Npcard = ({h4,valor}) => {
    return (
        <div className='np-card'>
            <h4>{h4}</h4>
            <span>{valor}</span>
            <div className='np-direitos'>
                <p>Personal trainer</p>
                <p>Equipamentos ilimitados</p>
                <p>Aulas de perda de peso</p>
                <p>Mês a mês</p>
                <p>Sem tempo de restrição</p>
            </div>
            <a href="">Matrícule-se agora</a>
        </div>
    )
}

export default Npcard;