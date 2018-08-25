import React from 'react';
import styled from 'styled-components';

const AssignmentCard = styled.a`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: 1rem;
    border-left: 5px solid;
    border-color: ${(props) => {return props.color}};
    box-shadow: 0 1px 3px rgba(0,0,0,.12), 0 1px 2px rgb(169, 165, 165, 0.1);
    margin-bottom: 1em;
    text-decoration: none;
    background-color: #FFFFFF;
`;
const Row = styled.div`
    display: flex;
    justify-content: space-between;
`

const Title = styled.div`
    font-size: 1em;
    font-weight: 500;
    color: rgba(0,0,0, 0.68);
    padding-bottom: .2em;
    `;
    
const Subtitle = styled.div`
    font-size: .8em;
    color: rgba(0,0,0, 0.48)
    `
    
const DueDate = styled.div`
    font-weight: 500;
    font-size: .8rem;
    color: ${(props) => props.color};
`


const Card = props => {
    const {title, duedate, subtitle, link, color, dueDateColor} = props;
    return (
        <AssignmentCard href={link} color={color}>
            <Row>
                <Title>{title}</Title>
                <DueDate color={dueDateColor}>{duedate}</DueDate>
            </Row>
            <Row>
            <Subtitle>{subtitle}</Subtitle>
            </Row>
        </AssignmentCard>
    )
}

export default Card;