import PartiesContainer from './components/PartiesContainer';

type Route = {
    path: string;
    component: React.ReactNode;
};

const routes = [
    {
        path: '/',
        component: PartiesContainer,
    },
];

export default routes;
