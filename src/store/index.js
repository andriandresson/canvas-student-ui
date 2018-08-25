import {
    observable,
    action,
    computed
} from 'mobx'
import {
    getHeader,
    getTodos,
    getColors,
    getCourses,
    getAllAssignments
} from '../services';
import moment from 'moment';

class CanvasStore {
    @observable headerItems = [];
    @observable _assignments = [];
    @observable _todos = [];
    @observable _colors = {};
    @observable _courses = [];

    @computed get assignments() {
        return this._assignments.filter(item => !item.has_submitted_submissions).map((item) => {
            return {
                title: item.name,
                subtitle: this._assignmentSubtitle(item),
                duedate: `${moment(item.due_at).format("DD. MMM")}`,
                rawDate: item.due_at,
                link: item.html_url,
                id: item.id,
                submitted: item.has_submitted_submissions,
                color: this._colors[`course_${item.course_id}`]
            }
        }).sort((a, b) => moment.utc(a.rawDate).diff(moment.utc(b.rawDate)))
    }

    @observable _assignmentSubtitle(assignment) {
        for(let course of this._courses) {
            if(course.id === assignment.course_id) {
                return `${course.name.split('/')[0]} - Assignment`;
            }
        }
        return '';
    }

    @computed get courses(){
        return this._courses.map((item) => {       
                return {
                    title:item.name,
                    subtitle:item.course_code,
                    color:this._colors[`course_${item.id}`],
                    teachers: item.teachers.map(item => item.display_name).reduce((prev, cur) => `${prev} & ${cur}`),
                    link:`/courses/${item.id}`,
                    id: item.id
                };
        });
    }



    @action.bound
    fetchToDosAndAssignments() {
        getTodos().then(
            // inline created action
            action("fetchSuccess", todos => {
                const toDoList = todos.filter(item => item.type !== "submitting");
                const assignmentsList = todos.filter(item => item.type === "submitting");
                this._assignments = assignmentsList;
                this._todos = toDoList;
            }),
            action("fetchError", error => {
                // Maybe we can display data from the localStorage as a backup.
            })
        )
    }

    @action.bound
    fetchHeaderItems() {
        getHeader().then(
            action("fetchSuccess", items => {
                this.headerItems = items;
            }),
            action("fetchError", error => {
                // doStuff
            })
        )
    }

    @action.bound
    fetchCustomColors() {

        getColors().then(
            action("fetchSuccess", items => {
                this._colors = items.custom_colors;
            }),
            action("fetchError", error => {
                // doStuff
            })
        )
    }

    @action.bound
    fetchCoursesAndAssignments() {
        getCourses().then(
            action("fetchSuccess", items => {
                this._courses = items.filter(item => {
                    return moment().isSameOrBefore(item.end_at);
                });
                return this._courses.filter(course => course.enrollments[0].type === 'student').map(course => `courses/${course.id}/assignments?include[]=submissions`);
            }))
            .then(courseURL => getAllAssignments(courseURL))
            .then(allAssignemts => {
                this._assignments = allAssignemts.reduce((prev, curr) => [...prev, ...curr])
            })
    }


}

const store = new CanvasStore();

export default store;