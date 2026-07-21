
import './App.css'
import NavigationBar from './components/navigation bar/Nevar-Content'
import Logo from './assets/Logo.png'
import DataListProviter from './storeAPI/ContextApi'
import { Outlet } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Contect from './components/About/contect'



function App() {
 

  return (
    <DataListProviter>
    <NavigationBar logo ={Logo}></NavigationBar>
    <Outlet></Outlet>
    <Contect></Contect>
    <Footer></Footer>
    </DataListProviter>
   
  )
}

export default App
