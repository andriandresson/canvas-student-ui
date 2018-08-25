import styled from 'styled-components';


const DashboardHeader = styled.div`
    display: flex;
    padding: 1em 0;
    justify-content: space-between;
    background-color: ${(props)=> props.theme.dashboard.header.backgroundColor};
    box-shadow: rgb(169, 165, 165) 10px -6px 20px 0px;
`

export default DashboardHeader;

