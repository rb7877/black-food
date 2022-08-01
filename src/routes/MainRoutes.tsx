import { lazy } from 'react'
import Layout from 'layouts'
import Loadable from 'components/Loadable'

const Landing = Loadable(lazy(() => import('pages/customer/Landing')))
const Register = Loadable(lazy(() => import('pages/owner/Register')))
const SignUp = Loadable(lazy(() => import('pages/owner/SignUp')))
const SignIn = Loadable(lazy(() => import('pages/owner/SignIn')))
const Verify = Loadable(lazy(() => import('pages/owner/Verify')))

const MainRoutes =
{
  path: '/',
  element: <Layout />,
  children: [
    {
      path: '/',
      element: <Landing />
    },
    {
      path: 'restaurant/register',
      element: <Register />
    },
    {
      path: '/restaurant/signup',
      element: <SignUp />
    },
    {
      path: '/restaurant/signin',
      element: <SignIn />
    },
    {
      path: '/restaurant/verify',
      element: <Verify />
    }

  ]
};

export default MainRoutes;