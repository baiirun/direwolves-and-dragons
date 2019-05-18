import PartiesContainer from './components/PartiesContainer';
import PartyOverview from './components/PartyOverview';

// We could use the built-in react-router types
// but we don't need a lot of the properties
type Route = {
    path: string;
    component: React.FC;
    exact?: boolean;
};

const routes: Route[] = [
    {
        path: '/',
        component: PartiesContainer,
        exact: true,
    },
    {
        path: '/party/:id',
        component: PartyOverview,
        exact: true,
    },
];

export default routes;
