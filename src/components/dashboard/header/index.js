import React, {Component} from 'react';
import HeaderContainer from './headerContainer';
import HeaderItem from './headerItem';
import {observer} from 'mobx-react';

@observer
class DashboardHeader extends Component {

    renderHeaderItems(headerItems) {
        return headerItems.map(item => <HeaderItem title={item.title} subTitle={item.subTitle} key={item.title}></HeaderItem>)
    }
    render(){
        const {headerItems} = this.props.store;
        return (
            <HeaderContainer>
                {this.renderHeaderItems(headerItems)}
            </HeaderContainer>
    )
    }
}

export default DashboardHeader;