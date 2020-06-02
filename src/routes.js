import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import Login from './login/';
import Home from './home/';

import StandardsList from './standard/list';
import addStandards from './standard/add';
import StandardView from './standard/view';
import StandardEdit from './standard/edit';

import SectionsList from './section/list';
import addSections from './section/add';
import SectionView from './section/view';
import SectionEdit from './section/edit';

import CityList from './city/list';
import addCity from './city/add';
import CityView from './city/view';
import CityEdit from './city/edit';

import SchoolList from './school/list';
import addSchool from './school/add';
import SchoolView from './school/view';
import SchoolEdit from './school/edit';

import TeacherList from './teacher/list';
import addTeacher from './teacher/add';
import TeacherView from './teacher/view';
import TeacherEdit from './teacher/edit';

import StudentList from './student/list';
import addStudent from './student/add';
import StudentView from './student/view';
import StudentEdit from './student/edit';

import SubjectsList from './subject/list';
import addSubjects from './subject/add';
import SubjectsView from './subject/view';
import SubjectsEdit from './subject/edit';

import ParentList from './parent/list';
import addParent from './parent/add';
import ParentView from './parent/view';
import ParentEdit from './parent/edit';

import UsertypeList from './user type/list';
import addUsertype from './user type/add';
import UsertypeView from './user type/view';
import UsertypeEdit from './user type/edit';

import AdminList from './admin/list';
import addAdmin from './admin/add';
import AdminView from './admin/view';
import AdminEdit from './admin/edit';

import SuperAdminList from './superadmin/list';
import addSuperAdmin from './superadmin/add';
import SuperAdminView from './superadmin/view';
import SuperAdminEdit from './superadmin/edit';

import UsersList from './users/list';
import addUsers from './users/add';
import UsersView from './users/view';
import UsersEdit from './users/edit';

// import Registration from './registration/index';
class Routes extends Component {
  render() {
    return (
      <Switch>

        <Route exact path="/" component={Login} />
        <Home>
          <Route
            component={({ match }) => {
              return (
                <div>
                  {/* <Route path="/registration" component={Registration} />   */}
                  <Route path="/standard-list" component={StandardsList} />
                  <Route path="/add-standard" component={addStandards} />
                  <Route path="/standard-view/:id" component={StandardView} />
                  <Route path="/standard-edit/:id" component={StandardEdit} />

                  <Route path="/sections-view/:id" component={SectionView} />
                  <Route path="/sections-edit/:id" component={SectionEdit} />
                  <Route path="/sections-list" component={SectionsList} />
                  <Route path="/add-sections" component={addSections} />

                  <Route path="/city-list" component={CityList} />
                  <Route path="/add-city" component={addCity} />
                  <Route path="/city-view/:id" component={CityView} />
                  <Route path="/city-edit/:id" component={CityEdit} />
                  
                  <Route path="/school-list" component={SchoolList} />
                  <Route path="/add-school" component={addSchool} />
                  <Route path="/school-view/:id" component={SchoolView} />
                  <Route path="/school-edit/:id" component={SchoolEdit} />
                  
                  <Route path="/teacher-list" component={TeacherList} />
                  <Route path="/add-teacher" component={addTeacher} />
                  <Route path="/teacher-view/:id" component={TeacherView} />
                  <Route path="/teacher-edit/:id" component={TeacherEdit} />

                  <Route path="/student-list" component={StudentList} />
                  <Route path="/add-student" component={addStudent} />
                  <Route path="/student-view/:id" component={StudentView} />
                  <Route path="/student-edit/:id" component={StudentEdit} />

                  <Route path="/subjects-list" component={SubjectsList} />
                  <Route path="/add-subjects" component={addSubjects} />
                  <Route path="/subjects-view/:id" component={SubjectsView} />
                  <Route path="/subjects-edit/:id" component={SubjectsEdit} />
                  
                  <Route path="/parent-list" component={ParentList} />
                  <Route path="/add-parent" component={addParent} />
                  <Route path="/parent-view/:id" component={ParentView} />
                  <Route path="/parent-edit/:id" component={ParentEdit} />
                  
                  <Route path="/usertype-list" component={UsertypeList} />
                  <Route path="/add-usertype" component={addUsertype} />
                  <Route path="/usertype-view/:id" component={UsertypeView} />
                  <Route path="/usertype-edit/:id" component={UsertypeEdit} />
                  
                  <Route path="/admin-list" component={AdminList} />
                  <Route path="/add-admin" component={addAdmin} />
                  <Route path="/admin-view/:id" component={AdminView} />
                  <Route path="/admin-edit/:id" component={AdminEdit} />
                  
                  <Route path="/superadmin-list" component={SuperAdminList} />
                  <Route path="/add-superadmin" component={addSuperAdmin} />
                  <Route path="/superadmin-view/:id" component={SuperAdminView} />
                  <Route path="/superadmin-edit/:id" component={SuperAdminEdit} />

                  <Route path="/users-list" component={UsersList} />
                  <Route path="/add-users" component={addUsers} />
                  <Route path="/users-view/:id" component={UsersView} />
                  <Route path="/users-edit/:id" component={UsersEdit} />
                
                </div>
              )
            }}
          />
        </Home>
      </Switch>
    )
  }
}

export default Routes;
