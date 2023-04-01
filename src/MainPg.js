import Header from './component/Header'
import { Outlet } from 'react-router-dom'
const home = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    </>
  )
}

export default home
