import styled from 'styled-components';


const MainContainer = styled.div`
    position: absolute;
    z-index: 98;
    top: 0;
    left: ${(props) => props.theme.sidebar.width};
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    background-color: ${(props) => props.theme.base.backgroundColor};
`

export default MainContainer;