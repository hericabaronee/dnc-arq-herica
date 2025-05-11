import { useContext } from 'react'
import {Link } from 'react-router-dom'

//ASSETS

import './Footer.css'
import BrazilIcon from '../../assets/brazil-icon.svg.svg'
import Logo from '../../assets/dnc-logo.svg'
import UsaIcon from '../../assets/usa-icon.svg.svg'
import FacebookIcon from '../../assets/facebook-icon.svg.svg'
import LinkedinIcon from '../../assets/linkedin-icon.svg.svg'
import InstagramIcon from '../../assets/instagram-icon.svg.svg'
import TwitterIcon from '../../assets/twitter-icon.svg.svg'


//COMPONENT 
import Button from '../Button/Button'

//CONTEXT
import { AppContext } from '../../contexts/AppContext'


function Footer (){
    const appContext = useContext(AppContext)
    const changeLanguage = (country) => {
        appContext.setLanguage(country)
    }

    return (
        <footer className="al-center d-flex">
            <div className="container">
                <div className="d-flex jc-space-between mobile-fd-column">
                    <div className="footer-logo-col">
                        <img src={Logo} alt="img" className="footer-logo" />
                        <p className="grey-1-color">{appContext.languages[appContext.language].general.footerLogoText}</p>
                        <div className="d-flex social-links">
                            <a href="https://www.google.com" target="_blank"><img src={FacebookIcon} alt="img" /></a>
                            <a href="https://www.google.com"  target="_blank"><img src={InstagramIcon} alt="img" /></a>
                            <a href="https://www.google.com"  target="_blank"><img src={ LinkedinIcon } alt="img" /></a>
                            <a href="https://www.google.com" target="_blank"><img src={TwitterIcon} alt="img" /></a>
                        </div>
                    </div>
                    <div className="d-flex mobile-fd-column">
                        <div className="footer-col">
                            <h3>{appContext.languages[appContext.language].general.pages}</h3>
                            <ul>
                                <li><Link to="/">{appContext.languages[appContext.language].menu.home}</Link></li>
                                <li><Link  to="/about">{appContext.languages[appContext.language].menu.about}</Link></li>
                                <li><Link to="/projects">{appContext.languages[appContext.language].menu.projects}</Link></li>
                                <li><Link to="/contact">{appContext.languages[appContext.language].menu.contact}</Link></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h3>{appContext.languages[appContext.language].general.contact}</h3>
                            <p> "R. Justino Cobra, 61 – Vila Ema | São José dos Campos – SP | CEP 12243-030</p>
                            <p>suporte@escoladnc.com.br</p>
                            <p>(19) 99187-4342</p>
                        </div>
                    </div>
                </div>
                <div className="d-flex jc-space-between footer-copy">
                    <p >Copyright © DNC - 2024</p>
                    <div className="langs-area d-flex">
                        <Button buttonStyle="unstyled" className="unstyled-button" onClick={() => changeLanguage('br')}>
                            <img src={BrazilIcon} alt="star" height="29px" />
                        </Button> 
                        <Button buttonStyle="unstyled" className="unstyled-button" onClick={() => changeLanguage('en')}>
                            <img src={UsaIcon} alt="star" height="29px" />
                        </Button> 
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer