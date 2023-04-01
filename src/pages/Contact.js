import { useNavigate } from 'react-router-dom'

const Contact = () => {
  const navi = useNavigate()
  const goToHome = () => {
      navi('/')
  }
  return (
    <>
   
    <h1>contact </h1>
    <button onClick={goToHome}>go to home page</button>
    </>
  )
}

export default Contact
