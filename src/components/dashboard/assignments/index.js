import React, {Component} from 'react';
import ContentItem from '../contentItem';
import {observer} from 'mobx-react';
import Card from './card';
import moment from 'moment';
import Label from './label';
import {withTheme} from 'styled-components';

@withTheme
@observer
class Assignments extends Component { 

    renderAssignments() {
        const {
            assignments
        } = this.props.store;
        const today = moment();
        let overdue = [],
            dueToday = [],
            dueThisweek = [];

        for (let item of assignments) {
            let itemMmomentDay = moment(item.rawDate)
            if (today.isSame(itemMmomentDay, "day")) {
                dueToday.push(this.getCardItem(item, "duetoday"))
                continue;
            }

            if (today.isAfter(itemMmomentDay)) {
                overdue.push(this.getCardItem(item, "overdue"))
                continue;
            } else {
                dueThisweek.push(this.getCardItem(item, "duethisweek"))
            }
        }
        const combined = this.combineAssignments(overdue, dueToday, dueThisweek);
        return combined;
    }


    render(){
        return (
            <ContentItem>
                {this.renderAssignments()}
            </ContentItem>
        )
    }

    combineAssignments(overdue, dueToday, dueThisweek){
        let final = [];

        if(overdue.length > 0) {
            final = [...final, <Label key={"overdue"} color={this.getThemeColor("overdue")}>Overdue</Label>, ...overdue];
        }
    
        if(dueToday.length > 0) {
            final = [...final, <Label key={"duetoday"} color={this.getThemeColor("duetoday")}>Due Today</Label>, ...dueToday];
        }
        if(dueThisweek.length > 0) {
            final = [...final, <Label key={"duethisweek"} color={this.getThemeColor("duethisweek")}>Due this week</Label>, ...dueThisweek];
        }
        return final;
    }

    getThemeColor(colorLabel){
        return this.props.theme.dashboard.assignments.label[colorLabel]
    }
    
    getCardItem(item, dueDateColor){
        return (
            <Card 
            key={item.link}
            title={item.title} 
            subtitle={item.subtitle} 
            duedate={item.duedate}
            dueDateColor={this.getThemeColor(dueDateColor)}
            link={item.link} 
            color={item.color}/>
        )
    };

}








export default Assignments;