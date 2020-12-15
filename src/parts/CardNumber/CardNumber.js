import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
    h3.number {
        color: var(--main-brown-color);
        text-shadow: 5px 5px 10px var(--main-shadow-color);
        font-size: 50px;
    }
    p.title, h3.number {
        font-family: Poppins Bold
    }
`;

const CardNumber = ({number, title, subtitle}) => {
    return (
        <Card className="ml-2">
            <h3 className="number">{number}</h3>
            <p className="title">{title}</p>
            <p className="subtile">{subtitle}</p>
        </Card>
    )
}

export default CardNumber
