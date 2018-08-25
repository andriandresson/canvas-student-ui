import React, {Component} from 'react';
import Header from './header';
import Assignments from './assignments';
import Courses from './courses';
import Schedule from './schedule';
import Main from './mainContainer';
import ContentWraper from './contentWrapper';

class Dashboard extends Component {

    componentDidMount = () => {
        const {
            fetchToDosAndAssignments,
            fetchHeaderItems,
            fetchCustomColors,
            fetchCourses,
            fetchCoursesAndAssignments
        } = this.props.store;
        fetchHeaderItems();
        fetchCustomColors();
        fetchCoursesAndAssignments();
        // fetchCourses();
    }
    
    render(){
        return (
            <Main>
                <Header {...this.props}/>
                <ContentWraper>
                    <Schedule {...this.props}/>
                    <Assignments {...this.props} />
                    <Courses {...this.props} />
                </ContentWraper>
            </Main>
        )
    }
}

export default Dashboard;