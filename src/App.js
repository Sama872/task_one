
import './App.css';
import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import About from './components/About/About';
import Portfolio2 from './components/Portfolio/Portfolio2';
import Contact from './components/Contact/Contact';

function App() {
  let routers=createBrowserRouter([
    {path:'',element:<Layout/>,children:[
      {index:true,element:<Home/>},
      {path:'about',element:<About/>},
      {path:'portfolio',element:<Portfolio2/>},
      {path:'contact',element:<Contact/>}

    ]}
  ]
  )

  return (
    <div>
      <RouterProvider router={routers}></RouterProvider>
    </div>
  );
}

export default App;
