import React from 'react'
import '../../styles/Home.css'
import { useHamburguer } from '../../hooks/useHamburguer'
import ProfileImg from '../../assets/Images/Jared/profile.jpeg'
import GithubIconDark from '../../assets/Icons/Logos/GitHub_dark.svg?react'
import GithubIconLight from '../../assets/Icons/Logos/GitHub_light.svg?react'
import WhassappIcon from '../../assets/Icons/Logos/icons8-whatsapp.svg?react'
import LinkedinIcon from '../../assets/Icons/Logos/linkedin.svg?react'
import DownloadCV from '../../assets/Icons/Other/CV.svg?react'
import DownloadCvWhite from '../../assets/Icons/Other/CV-white.svg?react'
import MailWhite from '../../assets/Icons/Other/mail-white.svg?react'
import Mail from '../../assets/Icons/Other/mail.svg?react'
import LinkedinSmallWhite from '../../assets/Icons/Other/linkedin-white.svg?react'
import LinkedinSmall from '../../assets/Icons/Other/linkedin.svg?react'
import GithubSmallWhite from '../../assets/Icons/Other/github-white.svg?react'
import GithubSmall from '../../assets/Icons/Other/github.svg?react'

const Home = ({ isDark }) => {
  const { isSmallMobile } = useHamburguer()

  return (
    <div className="home-cont">
      <div className="profile">
        <img src={ProfileImg} className="profile-img" alt="profile-img" />
      </div>
      <div className="sumary">
        <div className="text">
          <h3 className="iam"> Hola, soy</h3>
          <h1 className="name">Jared Vazquez</h1>
          <h2 className="developer">Desarrollador web</h2>
        </div>
        {!isSmallMobile ? (
          <>
            <div className="btns">
              <button
                className="cv" onClick={() =>
                  window.open('/Documents/CV_AngelJaredVazquezRoman.pdf')}>
                Descargar CV
              </button>
              <button
                className={`contact ${isDark ? 'dark-btn' : 'ligth-btn'}`}
                onClick={() =>
                  document
                    .getElementById('contact')
                    .scrollIntoView({ behavior: 'smooth' })
                }
              >
                Contáctame
              </button>
            </div>
            <div className="rrss">
              <button
                aria-label='open linkedin'
                className="rrss-btn"
                onClick={() =>
                  window.open(
                    'https://www.linkedin.com/in/albert-castro-albacete-38204615a/'
                  )
                }
              >
                <LinkedinIcon className="rrss-icon" />
              </button>
              <button aria-label='open whatsapp' className='rrss-btn' onClick={() => {
                window.open('https://api.whatsapp.com/send?phone=5217443762483&text=Hola%20Jared,%20me%20gustaría%20contactarte%20para%20hablar%20sobre%20tus%20servicios%20de%20desarrollador.'); 
                }}>
                <WhassappIcon className="rrss-icon"/>
              </button>
              <button
                aria-label='open BeruzDev github'
                className="rrss-btn"
                onClick={() => window.open('https://github.com/Jaredsillo')}>
                {isDark ? (
                  <GithubIconDark className="rrss-icon" />
                ) : (
                  <GithubIconLight className="rrss-icon" />
                )}
              </button>
            </div>
          </>
        ) : (
          <div className="small-btns">
            <button
              className="rrss-small-btn"
              onClick={() =>
                window.open('/Documents/CV_AngelJaredVazquezRoman.pdf')
              }
            >
              {isDark ? (
                <DownloadCvWhite className="rrss-icon" />
              ) : (
                <DownloadCV className="rrss-icon" />
              )}
            </button>
            <button
              className="rrss-small-btn"
              onClick={() =>
                document
                  .getElementById('contact')
                  .scrollIntoView({ behavior: 'smooth' })
              }
            >
              {isDark ? (
                <MailWhite className="rrss-icon" />
              ) : (
                <Mail className="rrss-icon" />
              )}
            </button>
            <button
              className="rrss-small-btn"
              onClick={() =>
                window.open(
                  'https://www.linkedin.com/in/albert-castro-albacete-38204615a/'
                )
              }
            >
              {isDark ? (
                <LinkedinSmallWhite className="rrss-icon" />
              ) : (
                <LinkedinSmall className="rrss-icon" />
              )}
            </button>
            <button
              className="rrss-small-btn"
              onClick={() => window.open('https://github.com/Jaredsillo') }
            >
              {isDark ? (
                <GithubSmallWhite className="rrss-icon" />
              ) : (
                <GithubSmall className="rrss-icon" />
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Home
