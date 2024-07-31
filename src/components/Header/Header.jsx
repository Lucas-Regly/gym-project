import React, { useState, useRef, useEffect } from 'react'
import './Header.css'
import fotoLogo from '/assets/social-logo.jpg';
import { motion } from 'framer-motion'

const Header = () => {
  const [handleMenuMobile, setHandleMenuMobile] = useState(true)

  const handleScroll = (e, targetId, targetHandle) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offSet = targetHandle;
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offSet;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      })
    }
    setHandleMenuMobile(true);

  }

  document.addEventListener('scroll', () => {
    let homeId = document.getElementById('home-id');
    let sobreNosId = document.getElementById('sobreNos-id');
    let nossaClasseId = document.getElementById('nossaClasse-id');
    let serviçosId = document.getElementById('serviços-id');
    let nossoTimeId = document.getElementById('nossoTime-id');
    let contatoId = document.getElementById('contato-id');

    homeId.classList.remove('marcado');
    sobreNosId.classList.remove('marcado');
    nossaClasseId.classList.remove('marcado');
    serviçosId.classList.remove('marcado');
    nossoTimeId.classList.remove('marcado');
    contatoId.classList.remove('marcado');

    if (window.pageYOffset >= 0 && window.pageYOffset <= 700) {
      homeId.classList.add('marcado')
    }
    else if (window.pageYOffset > 700 && window.pageYOffset < 1500) {
      sobreNosId.classList.add('marcado')
    }
    else if (window.pageYOffset > 1500 && window.pageYOffset < 3000) {
      nossaClasseId.classList.add('marcado')
    }
    else if (window.pageYOffset > 3100 && window.pageYOffset < 5000) {
      serviçosId.classList.add('marcado')
    }
    else if (window.pageYOffset > 5000 && window.pageYOffset < 5200) {
      nossoTimeId.classList.add('marcado')
    }
    else if (window.pageYOffset > 5200) {
      contatoId.classList.add('marcado')
    }
  })
  return (
    <>
      <header className='header flex'>
        <motion.div initial={{ opacity: '0', x: '-200px' }} whileInView={{ opacity: '1', x: '0' }} transition={{ duration: '.8', ease: 'easeIn' }} className='logo flex'>
          <img className='logo-img' src={fotoLogo} alt="Social Logo ©" />

          <div className='logo-frase flex'>
            <p>Social</p>
            <span>Fitness</span>
          </div>
        </motion.div>
        <motion.nav initial={{ opacity: '0', x: '200px' }} whileInView={{ opacity: '1', x: '0' }} transition={{ duration: '.8', ease: 'easeIn' }} className='header-main-nav flex'>
          <a href="#home" className="marcado" id='home-id' >Home</a>
          <a href="#sobreNos" id='sobreNos-id' onClick={(e) => handleScroll(e, 'sobreNos', 100, sobreNos)}>Sobre Nós</a>
          <a href='#nossaClasse' id='nossaClasse-id' onClick={(e) => handleScroll(e, 'nossaClasse', 100)} >Serviços</a>
          <a href="#serviços" id='serviços-id' onClick={(e) => handleScroll(e, 'serviços', 130)}>Planos</a>
          <a href="#nossoTime" id='nossoTime-id' onClick={(e) => handleScroll(e, 'nossoTime', 160)}>Nosso Time</a>
          <a href="#contato" id='contato-id' onClick={(e) => handleScroll(e, 'contato', 0)}>Contato</a>
        </motion.nav>
      </header>
      <header className='mobile-header flex'>
        <div className='mobile-header-container flex'>
          <motion.div initial={{ opacity: '0', x: '-200px' }} whileInView={{ opacity: '1', x: '0' }} transition={{ duration: '.8', ease: 'easeIn' }} className='logo flex'>
            <img className='logo-img' src={fotoLogo} alt="Social Logo ©" />

            <div className='logo-frase flex'>
              <p>Social</p>
              <span>Fitness</span>
            </div>
          </motion.div>
          <motion.button initial={{ opacity: '0', x: '50px' }} whileInView={{ opacity: '1', x: '0px' }} transition={{ duration: '.8', ease: 'easeIn' }} onClick={() => { setHandleMenuMobile(!handleMenuMobile) }} className='logo-mobile'> <i class="fa-solid fa-bars"></i></motion.button>
        </div>
      </header>
      <div className={!handleMenuMobile ? 'menu-mobile-open open' : 'menu-mobile-open '}>
        <div className='menu-mobile-container'>
          <button className={!handleMenuMobile ? 'flex' : 'none'} onClick={() => { setHandleMenuMobile(!handleMenuMobile) }}><i class="fa-solid fa-xmark"></i></button>

          <nav className={handleMenuMobile ? 'none nav-menu-mobile' : 'flex nav-menu-mobile'} >
            <a href="#home" onClick={(e) => handleScroll(e, 'home', 0)} >Home</a>
            <a href="#sobreNos" onClick={(e) => handleScroll(e, 'sobreNos', 100)}>Sobre Nós</a>
            <a href='#nossaClasse' onClick={(e) => handleScroll(e, 'nossaClasse', 100)} >Serviços</a>
            <a href="#serviços" onClick={(e) => handleScroll(e, 'serviços', 130)}>Planos</a>
            <a href="#nossoTime" onClick={(e) => handleScroll(e, 'nossoTime', 160)}>Nosso Time</a>
            <a href="#contato" onClick={(e) => handleScroll(e, 'contato', 0)}>Contato</a>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Header