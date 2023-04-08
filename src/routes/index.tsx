import PublicLayout from 'components/layout/publiclayout'
import AuthLayout from 'components/layout/authlayout'
import App from 'pages/App'
import Example from 'pages/example/index'
import Login from 'pages/login'

const Index = [
  {
    path: '/',
    element: <PublicLayout />,
    children: [
      {
        path: '/',
        element: <App />,
      },
      {
        path: 'example',
        element: <Example />,
      },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: 'login',
        element: <Login />,
      },
    ],
  },
]

export default Index
