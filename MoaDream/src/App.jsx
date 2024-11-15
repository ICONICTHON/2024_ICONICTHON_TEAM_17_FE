import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import RootLayout from "./layout/root-layout.jsx";
import Main from './pages/main.jsx';
import Login from './pages/Login';
import Curriculum from './pages/Curriculum.jsx';
import English from './pages/English.jsx';
import Score from './pages/Score.jsx';
import Timetable from './pages/Timetable.jsx';
import Msc from './pages/Msc.jsx';
import Major from './pages/Major.jsx';
import CommonLiberal from './pages/CommonLiberal.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Login/>
    },
    {
      path:'/main',
      element: <RootLayout/>,
      children: [
        {
          index: true,
          element: <Main/>
        },
        {
          path: 'curriculum',
          element: <Curriculum/>
        },
        {
          path: 'english',
          element: <English/>
        },
        {
          path: 'score',
          element: <Score/>,
        },
        {
          path: 'score/msc',
          element: <Msc/>,
        },
        {
          path: 'score/major',
          element: <Major/>,
        },
        {
          path: 'score/commonliberal',
          element: <CommonLiberal/>
        },
        {
          path: 'timetable',
          element: <Timetable/>
        }
      ]
    }
])

function App() {
    return <RouterProvider router={router}/>
}

export default App
