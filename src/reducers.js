import { combineReducers } from 'redux';
import standard from './standard/reducer';
import section from './section/reducer';
import city from './city/reducer';
import parent from './parent/reducer';
import school from './school/reducer';
import teacher from './teacher/reducer';
import student from './student/reducer';
import subject from './subject/reducer';
import usertype from './user type/reducer';
import admin from './admin/reducer';
import superadmin from './superadmin/reducer';
import users from './users/reducer';

const rootReducer = combineReducers({
    standard,
    section,
    city,
    school,
    parent,
    teacher,
    student,
    subject,
    usertype,
    admin,
    superadmin,
    users
    

});

export default rootReducer
