import logo from './logo.svg';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route, createRoutesFromElements,
} from "react-router-dom";
import Navbar from './components/Navbar';
import RoootLayout from './components/RoootLayout';
import Home from './components/Home';
import About,{users} from './components/About';
import Contact from './components/Contact';

const router=createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<RoootLayout />}>
     <Route index element={<Home/>} />
     <Route path="/about" element={<About/>} loader={users}/>
     <Route path="/contact" element={<Contact/>} />
  </Route>
))

function App() {
  return <RouterProvider router={router} />
}

export default App;
