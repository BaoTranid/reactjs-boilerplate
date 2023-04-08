import { Outlet, Link } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <div className="auth-layout">
      <h1 style={{ margin: 0, padding: 0, marginBottom: 20 }}>Auth layout</h1>
      <ul>
        <li>
          <Link to={'/'}>Home page</Link>
        </li>
        <li>
          <Link to={'/example'}>Redux page</Link>
        </li>
        <li>
          <Link to={'/login'}>Layout v2</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  )
}

export default AuthLayout
