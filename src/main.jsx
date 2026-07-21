import {  StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from'./App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomeContent from './components/Home/Home-content.jsx'
import AllProjects from './components/Projects/AllProjects.jsx'
import AllSkills from './components/skills/AllSkills.jsx';
import AboutAllContent from './components/About/AboutAllContent.jsx';


const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,

    children:[
        {
        index: true,
        element: <HomeContent />,
      },
      {
         path:"AllProjects", element:<AllProjects/>,
        
      },
      {
        path:"AllSkills", element:<AllSkills/>,
      },
      {
        path:"About", element:<AboutAllContent/>,
      },
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
