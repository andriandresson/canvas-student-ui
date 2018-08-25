import React, {Component} from 'react';
import ContentItem from '../contentItem';
import {observer} from 'mobx-react';
import Card from './card';

@observer
class Courses extends Component {

    renderCourses() {
        const {courses}  = this.props.store;
        return courses.map(item => {
           return <Card 
           key={item.id}
           title={item.title} 
           subtitle={item.subtitle} 
           teachers={item.teachers} 
           link={item.link} 
           color={item.color}/>
        })
    }
    render(){
        return (
            <ContentItem>
            {this.renderCourses()}
            </ContentItem>
        )
    }
}

export default Courses;