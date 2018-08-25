import React from 'react';
import styled from 'styled-components';

const CourseCard = styled.a`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: 1rem;
    box-shadow: 0 1px 3px rgba(0,0,0,.12), 0 1px 2px rgb(169, 165, 165, 0.1);
    margin-bottom: 1em;
    text-decoration: none;
    background-color: #FFFFFF;
    border-top: 5px solid;
    border-color: ${(props) => props.color}
    `;
const Group = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${(props) => props.color? props.color : 'transparent'};
    justify-content: space-between;
    height: ${(props)=> props.height};
`

const Row = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 0.1em;
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
    


const Card = props => {
    const {title, subtitle, link, color, teachers} = props;
    return (
        <CourseCard href={link} color={color}>
            <Group>
            <Title>{title}</Title>
                <Row>
                <Subtitle>{subtitle}</Subtitle>
                <Subtitle>{teachers}</Subtitle>
                </Row>
            </Group>
        </CourseCard>
    )
}

export default Card;