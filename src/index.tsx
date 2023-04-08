import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import reportWebVitals from './reportWebVitals'
import RenderRoutes from 'routes/index'
import initStore from 'core/store'
import 'assets/styles/index.scss'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
const store = initStore()
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={createBrowserRouter(RenderRoutes)} />
    </Provider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
