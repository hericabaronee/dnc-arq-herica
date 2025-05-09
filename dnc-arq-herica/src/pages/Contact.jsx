import { useContext } from 'react'
import Banner from "../components/Banner/Banner"
import ContactForm from "../components/ContactForm/ContactForm"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"

// CONTEXTS
import { AppContext } from '../contexts/AppContext'


function Contact () {
    const appContext = useContext(AppContext)
    return (
        <>
          <Header/>
         <Banner image="Contact.JPEG.jpg"  title={appContext.languages[appContext.language].menu.contact} /> 
        < ContactForm/>
        <Footer />
        </>
    )
}

export default Contact 