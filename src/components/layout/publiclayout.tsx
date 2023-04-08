import { Outlet, Link } from 'react-router-dom'

const PublicLayout = () => {
  return (
    <div className="public-layout">
      <h1 style={{ margin: 0, padding: 0, height: '45px', lineHeight: '45px' }}>
        Public layout
      </h1>
      <header
        style={{ margin: 0, padding: 0, height: '85px', lineHeight: '40px' }}
      >
        Header
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
      </header>
      <Outlet />
      <footer
        style={{ margin: 0, padding: 0, height: '40px', lineHeight: '40px' }}
      >
        Footer
      </footer>
    </div>
  )
}

export default PublicLayout
