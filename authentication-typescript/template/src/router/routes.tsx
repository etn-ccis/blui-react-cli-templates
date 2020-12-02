import { HomePage, PageOne, PageTwo } from '../pages';
import Home from '@material-ui/icons/Home';
import LooksOne from '@material-ui/icons/LooksOne';
import LooksTwo from '@material-ui/icons/LooksTwo';

export const PAGES = [
    {
        title: 'Home Page',
        route: '/',
        component: HomePage,
        icon: Home,
    },
    {
        title: 'Page One',
        route: '/page-one',
        component: PageOne,
        icon: LooksOne,
    },
    {
        title: 'Page Two',
        route: '/page-two',
        component: PageTwo,
        icon: LooksTwo,
    },
];
