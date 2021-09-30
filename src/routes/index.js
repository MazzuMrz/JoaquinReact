import { lazy } from "react";

const Routes = [
    {
        path: '/tasks',
        component: lazy(() => import('../components/Items'))
    },
    {
        path: '/tasks/edit/:id',
        component: lazy(() => import('../components/Edit_item'))
    },
    {
        path: '/folder',
        component: lazy(() => import('../components/Folder'))
    },
    {
        path: '/folder/view/:id',
        component: lazy(() => import('../components/Folder_work'))
    },

]

export default Routes;