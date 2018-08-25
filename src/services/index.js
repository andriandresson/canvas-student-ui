import moment from 'moment';
// import mockMap from './mockData';

// const production = false;
const basePath = "https://reykjavik.instructure.com/api/v1/";

async function _fetch(path){
    // if(!production) {
    //     return mockMap[path];
    // }
    return fetch(`${basePath}${path}`)
	.then(res => res.text()) // we need to get the text format first because of bad json format
	.then(res => res.replace("while(1);", "")) // remove this text so we can parse to json
	.then(res => JSON.parse(res))
}

async function getHeader() {
    const headerItems = [
        {
            title: "Today's Schedule",
            subTitle: `${moment().format("dddd, DD. MMM")}`
        },
        {
            title: "Assignments",
            subTitle: "Upcoming assignments"
        },
        {
            title: "Courses",
            subTitle: `Currently active courses` 
        }
    ]
    return headerItems;
}

const getTodos = () => {
    const path = 'users/self/todo';
    return _fetch(path);
}

const getColors = () => {
    const path = 'users/self/colors';
    return _fetch(path);
}

const getCourses = () => {
    const path = 'courses?include[]=teachers&include[]=favorites&per_page=100';
    return _fetch(path);
}

const getAllAssignments = urls => {
    return Promise.all(urls.map(url =>_fetch(url)));
}

export {
    getHeader,
    getTodos,
    getColors,
    getCourses,
    getAllAssignments
}



