import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// auth
import { AuthGuard } from 'src/auth/guard';
// layouts
import DashboardLayout from 'src/layouts/dashboard';
// components
import { LoadingScreen } from 'src/components/loading-screen';
import { ProblemSetDetail } from 'src/pages/problem/problemSetDetail';

// ----------------------------------------------------------------------

const IndexPage = lazy(() => import('src/pages/dashboard/home'));
const ProblemSetPage = lazy(() => import('src/pages/dashboard/problemSet'));
// const SearchPage = lazy(() => import('src/pages/dashboard/search'));
// const MyListPage = lazy(() => import('src/pages/dashboard/myList'));
// const ProblemAdd = lazy(() => import('src/pages/dashboard/addProblem'));
// const PageFour = lazy(() => import('src/pages/dashboard/four'));
// const PageFive = lazy(() => import('src/pages/dashboard/five'));
// const PageSix = lazy(() => import('src/pages/dashboard/six'));
// const AboutSet = lazy(() => import('src/pages/dashboard/aboutSet'));

// ----------------------------------------------------------------------

export const dashboardRoutes = [
  {
    path: 'dashboard',
    element: (
      <AuthGuard>
        <DashboardLayout>
          <Suspense fallback={<LoadingScreen />}>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      </AuthGuard>
    ),
    children: [
      { element: <IndexPage />, index: true },
      { path: 'problem-sets', element: <ProblemSetPage /> },
      { path: 'problem-set/:id', element: <ProblemSetDetail /> },
      // { path: 'myList', element: <MyListPage /> },
      // { path: 'addProblem', element: <ProblemAdd /> },
      // { path: 'aboutSet', element: <AboutSet /> },
      // {
      //   path: 'group',
      //   children: [
      //     { element: <PageFour />, index: true },
      //     { path: 'five', element: <PageFive /> },
      //     { path: 'six', element: <PageSix /> },
      //   ],
      // },
    ],
  },
];
