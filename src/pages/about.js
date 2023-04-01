import { useNavigate } from "react-router-dom"


const About = () => {

  const navigate = useNavigate()

  const goToContact = () =>{
    navigate("/contact")
  }
  
  return (
    <>
    <h1>about </h1>
    <button onClick={() => goToContact()}>go to contact page</button>
    </>
  )
}

export default About

