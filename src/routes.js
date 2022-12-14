import { lazy } from 'react';
// import { USER_ROLE } from 'constants.js';
import { DEFAULT_PATHS } from 'config.js';

const appRoot = DEFAULT_PATHS.APP.endsWith('/') ? DEFAULT_PATHS.APP.slice(1, DEFAULT_PATHS.APP.length) : DEFAULT_PATHS.APP;

const dashboards = {
  elearning: lazy(() => import('views/dashboards/ElearningDashboard')),
  school: lazy(() => import('views/dashboards/SchoolDashboard')),
};

const apps = {
  index: lazy(() => import('views/apps/Apps')),
  calendar: lazy(() => import('views/apps/calendar/Calendar')),
  chat: lazy(() => import('views/apps/chat/Chat')),
  contacts: lazy(() => import('views/apps/contacts/Contacts')),
  mailbox: lazy(() => import('views/apps/mailbox/Mailbox')),
  tasks: lazy(() => import('views/apps/tasks/Tasks')),
};

const courses = {
  // explore: lazy(() => import('views/courses/CoursesExplore')),
  list: lazy(() => import('views/courses/CoursesList')),
  detail: lazy(() => import('views/courses/CoursesDetail')),
};

const paths = {
  list: lazy(() => import('views/paths/PathsList')),
  detail: lazy(() => import('views/paths/PathsDetail')),
};

const student = {
  list: lazy(() => import('views/student/StudentList')),
  detail: lazy(() => import('views/student/StudentDetail')),
};

const routesAndMenuItems = {
  mainMenuItems: [
    {
      path: DEFAULT_PATHS.APP,
      exact: true,
      redirect: true,
      to: `${appRoot}/register`,
    },
    // {
    //   path: `${appRoot}/register`,
    //   exact: true,
    //   redirect: true,
    //   to: `${appRoot}/dashboards/elearning`,
    // },
    {
      path: `${appRoot}/dashboards`,
      icon: 'home-garage',
      label: 'menu.dashboards',
      exact: true,
      redirect: true,
      to: `${appRoot}/dashboards/elearning`,
      subs: [
        { path: '/elearning', label: 'menu.elearning', component: dashboards.elearning },
        { path: '/school', label: 'menu.school', component: dashboards.school },
      ],
    },
    {
      path: `${appRoot}/apps`,
      label: 'menu.apps',
      icon: 'screen',
      component: apps.index,
      subs: [
        { path: '/calendar', label: 'menu.calendar', component: apps.calendar },
        { path: '/chat', label: 'menu.chat', component: apps.chat },
        { path: '/contacts', label: 'menu.contacts', component: apps.contacts },
        { path: '/mailbox', label: 'menu.mailbox', component: apps.mailbox },
        { path: '/tasks', label: 'menu.tasks', component: apps.tasks },
      ],
    },
    {
      path: `${appRoot}/courses`,
      label: 'menu.courses',
      icon: 'online-class',
      exact: true,
      redirect: true,
      to: `${appRoot}/courses/explore`,
      subs: [
        // { path: '/explore', label: 'menu.explore', component: courses.explore },
        { path: '/list', label: 'menu.list', component: courses.list },
        { path: '/detail', label: 'menu.detail', component: courses.detail },
      ],
    },
    {
      path: `${appRoot}/paths`,
      label: 'menu.paths',
      icon: 'destination',
      exact: true,
      redirect: true,
      to: `${appRoot}/paths/list`,
      subs: [
        { path: '/list', label: 'menu.list', component: paths.list },
        { path: '/detail', label: 'menu.detail', component: paths.detail },
      ],
    },
    {
      path: `${appRoot}/student`,
      label: 'menu.student',
      icon: 'lecture',
      exact: true,
      redirect: true,
      to: `${appRoot}/student/list`,
      subs: [
        { path: '/list', label: 'menu.list', component: student.list },
        { path: '/detail', label: 'menu.detail', component: student.detail },
      ],
    },
  ],
  sidebarItems: [],
};
export default routesAndMenuItems;
