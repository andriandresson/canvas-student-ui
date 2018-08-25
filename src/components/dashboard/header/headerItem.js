import React from 'react';
import styled from 'styled-components';


const Title = styled.h1 `
    font-size: 1rem;
    margin: 0;
    padding: 0;
    color: ${(props) => props.theme.dashboard.header.fontColorPrimary}
    `
const SubTitle = styled.h1 `
    font-size: 0.8rem;
    margin: 0;
    padding: 0;
    color: ${(props) => props.theme.dashboard.header.fontColorSecondary}
`;

const FlexWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 30%;
    padding: 0 1em;
`

const HeaderItem = props => {
    return (
        <FlexWrapper>
            <Title>{props.title}</Title>
            <SubTitle>{props.subTitle}</SubTitle>
        </FlexWrapper>
    )
}


export default HeaderItem;