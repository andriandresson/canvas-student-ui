import Todos from './todos.mock.json';
import Colors from './customColors.mock.json';
import Courses from './courses.mock.json';


const mockMap = {
    'users/self/todo': Todos,
    'users/self/colors': Colors,
    'courses?include[]=teachers&include[]=favorites&per_page=100': Courses
}

export default mockMap;