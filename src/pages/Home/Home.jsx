import { React, useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion'
import './Home.css';

import Whychoseus from '../../components/whychoseus/whychoseus';
import Oquepodemosoferecer from '../../components/oquepodemosoferecer/oquepodemosoferecer';
import Npcard from '../../components/npcard/npcard';
import CarouselCards from '../../components/CarouselCards/CarouselCards';

import oqoImg1 from '/assets/casal-treinando.jpg';
import oqoImg2 from '/assets/spinning-img.jpg';
import oqoImg3 from '/assets/natação.webp';
import oqoImg4 from '/assets/zumba-img.jpg';
import oqoImg5 from '/assets/boxing-img.jpg';

import ciImage1 from '/assets/trainer-homem-1.jpg';
import ciImage2 from '/assets/trainer-mulher-1.jpg';
import ciImage3 from '/assets/trainer-homem-2.jpg';
import ciImage4 from '/assets/trainer-mulher-2.jpg';
import ciImage5 from '/assets/trainer-homem-3.jpg';
import ciImage6 from '/assets/trainer-mulher-3.jpg';
import ContatoCards from '../../components/ContatoCards/ContatoCards';

import loiraPrancha from '/assets/loira-prancha.jpg';
import mulherSentadaBola from '/assets/mulher-sentada-bola.jpg';
import mulherCorrendoEsteira from '/assets/mulher-correndo-esteira.jpg';
import homemSentadoRosca from '/assets/homem-sentado-rosca.jpg';
import mulherLevantamentoTerra from '/assets/mulher-levantamento-terra.jpg';
import casalDandoMaos from '/assets/casal-dando-as-maos.jpg'
const Home = () => {
  const pqNosEscolheu = [
    { icone: <i class='fa-solid fa-dumbbell'></i>, titulo: 'Variedade de Equipamentos', paragrafo: 'Oferecemos uma ampla variedade de equipamentos de alta qualidade, garantindo uma experiência completa e eficaz para nossos alunos.' },
    { icone: <i class="fa-brands fa-apple"></i>, titulo: 'Plano nutricional', paragrafo: 'Contamos com uma nutricionista dedicada a montar o planejamento nutricional personalizado para cada aluno.' },
    { icone: <i class="fa-solid fa-book"></i>, titulo: 'Ficha de treinamento personalizada', paragrafo: 'Ofereceremos um serviço de treino personalizado, adaptado às necessidades e objetivos individuais que você precisa.' }
  ]
  const oqPodemosOferecer = [
    { img: oqoImg1, title: 'Musculação' },
    { img: oqoImg2, title: 'Spinning' },
    { img: oqoImg3, title: 'Natação' },
    { img: oqoImg4, title: 'Zumba' },
    { img: oqoImg5, title: 'Boxe' },

  ]

  const contatoInfos = [
    { icon: <i class="fa-solid fa-location-dot"></i>, endereco: 'R. Juíz Moacir Marquês Morado, 106 - Centro, São João de Meriti - RJ, 25520-530', id: '1' },
    { icon: <i class="fa-solid fa-phone"></i>, endereco: '(21) 2756-2168', id: '2' },
    { icon: <i class="fa-solid fa-envelope"></i>, endereco: 'socialfitnesssaude@gmail.com', id: '3' }
  ]

  const npCard = [
    { h4: 'Mensal', valor: 'R$ 100.0' },
    { h4: 'Semestral', valor: 'R$ 90.0' },
    { h4: 'Anual', valor: 'R$ 80.0' }
  ]

  const carouselImage = [
    { img: ciImage1, funcao: 'TREINADOR', nomeProfessor: 'Professor 1' },
    { img: ciImage2, funcao: 'TREINADORA', nomeProfessor: 'Professora 1' },
    { img: ciImage3, funcao: 'TREINADOR', nomeProfessor: 'Professor 2' },
    { img: ciImage4, funcao: 'TREINADORA', nomeProfessor: 'Professora 2' },
    { img: ciImage5, funcao: 'TREINADOR', nomeProfessor: 'Prodessor 3' },
    { img: ciImage6, funcao: 'TREINADORA', nomeProfessor: 'Professora 3' }
  ]

  const carousel = useRef();
  const [width, setWidth] = useState(0);
  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
  }, [])

  const seta = useRef();
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > window.innerHeight * 0.5) {
        seta.current.classList.remove('hidden')
        seta.current.classList.remove('opacity-zero')
      } else {
        seta.current.classList.add('opacity-zero')
        seta.current.classList.add('hidden')
      }
    })
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: (i) => ({
      opacity: 1,
      transition: {
        delay: i * 0.35
      }
    }),
    exit: { opacity: 0, y: 50 }
  };

  return (
    <main>
      <section className='home-banner' id='home'>
        <button onClick={() => { window.scrollTo({ top: 0 }) }} ref={seta} className='setaBtn hidden opacity-zero'><i class="fa-solid fa-up-long"></i></button>
        <div initial={{ opacity: 0, x: "200px" }} whileInView={{ opacity: 1, x: '0' }} transition={{ duration: "1.5" }} className=' banner' >
          <motion.div initial={{ opacity: '0', y: '150px', visibility: 'hidden' }} whileInView={{ opacity: '1', y: '0', visibility: 'initial' }} viewport={{ once: true, amount: ".5" }} transition={{ duration: '5', ease: 'easeIn' }} id='homeBannerContainer' className='home-banner-container'>
            <p className='home-banner-paragrafo'>MODELE SEU CORPO</p>
            <h1 className='home-banner-titulo'>SEJA <span>FORTE</span> <br /> <span> TREINE</span> FORTE</h1>
            <a className='home-banner-link' href="#sobreNos">MAIS INFO</a>
          </motion.div>
          <div className='before'></div>
        </div>
      </section >
      <section id='sobreNos' className='pq-escolher-nos-section' >
        <div className='pen-container limita-largura'>
          <motion.div initial={{ opacity: '0', y: '-100px', visibility: 'hidden' }} whileInView={{ opacity: '1', y: "0", visibility: 'initial' }} transition={{ duration: '1', ease: 'easeIn', delay: '.5' }} viewport={{ once: true, amount: '1' }} exit={{ opacity: 0, y: 50 }} className='h2-p'>
            <h2>POR QUE NOS ESCOLHER?</h2>
            <p>AUMENTE SEUS LIMITES</p>
          </motion.div>
          <motion.div className='pen-subcontainer'>
            {pqNosEscolheu.map((e, index) => {
              return (
                <motion.div key={index}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.5 }}
                  variants={containerVariants}>
                  <Whychoseus
                    key={index}
                    icone={e.icone}
                    titulo={e.titulo}
                    paragrafo={e.paragrafo} />
                </motion.div>
              )
            })}

          </motion.div>
        </div>
      </section>
      <section id='nossaClasse' className='section-nossas-classes'>
        <div className='limita-largura'>
          <motion.div initial={{ opacity: '0', y: '-70px', visibility: 'hidden' }} whileInView={{ opacity: '1', y: "0", visibility: 'initial' }} transition={{ duration: '1', ease: 'circIn', delay: ".5" }} viewport={{ once: true, amount: 1 }} className='h2-p'>
            <h2>Nossas Classes</h2>
            <p>O que podemos oferecer</p>
          </motion.div>
          <div className='oqo-container'>
            {oqPodemosOferecer.map((e, index) => {
              return (
                <motion.div className='oqo-subcontainer' key={index}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.10 }}
                  variants={containerVariants}>
                  <Oquepodemosoferecer img={e.img} title={e.title} span={e.title} />
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
      <section className='section-home-banner-dois'>
        <motion.div viewport={{ once: true, amount: 0.5 }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: .2, ease: 'easeIn' }} className='home-banner-dois'>
          <div className='hbd-container'>
            <h2>INSCREVA-SE AGORA PARA OBTER MAIS OFERTAS</h2>
            <p>ONDE SAÚDE, BELEZA E FITNESS SE ENCONTRAM.</p>
          </div>
        </motion.div>
      </section>
      <section id='serviços' className='section-nossos-planos'>
        <div className='nossos-planos-container limita-largura'>
          <motion.div initial={{ opacity: '0', y: '-70px' }} whileInView={{ opacity: '1', y: "0" }} transition={{ duration: '1', ease: 'easeIn', delay: ".5" }} viewport={{ once: true, amount: 1 }} className='h2-p'>
            <h2>NOSSOS PLANOS</h2>
            <p>ESCOLHA SEU PLANO</p>
          </motion.div>
          <div className='np-subcontainer'>
            {npCard.map((e, index) => {
              return (
                <motion.div key={index}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.5 }}
                  variants={containerVariants}>
                  <Npcard h4={e.h4} valor={e.valor} key={index} />
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
      <section className='section-galeria'>
        <div className='galeria-container'>
          <motion.img initial='' className='cinquenta-porcento' src={loiraPrancha} alt="" />
          <motion.img className='vinte-e-cinco-porcento' src={mulherSentadaBola} alt="" />
          <motion.img className='vinte-e-cinco-porcento' src={mulherCorrendoEsteira} alt="" />
          <motion.img className='vinte-e-cinco-porcento' src={homemSentadoRosca} alt="" />
          <motion.img className='vinte-e-cinco-porcento' src={mulherLevantamentoTerra} alt="" />
          <motion.img className='cinquenta-porcento' src={casalDandoMaos} alt="" />
        </div>
      </section>
      <section id='nossoTime' className='section-nosso-time'>
        <div className='limita-largura'>
          <motion.div initial={{ opacity: '0', y: '-70px' }} whileInView={{ opacity: '1', y: "0" }} transition={{ duration: '1', ease: 'easeIn' }} viewport={{ once: true, amount: 1 }} className='h2-p'>
            <h2>NOSSO TIME</h2>
            <p>TREINE COM EXPERTS</p>
          </motion.div>
          <motion.div ref={carousel} initial={{ opacity: '0', x: '-70px' }} whileInView={{ opacity: '1', x: "0" }} transition={{ duration: '1', ease: 'linear' }} viewport={{ once: false }} whileTap={{ cursor: "grabbing" }} className='nosso-time-carousel'>
            <motion.div className='inner'
              drag="x"
              dragConstraints={{ right: 0, left: -width }}
            >
              {carouselImage.map((e) => {
                return (
                  <CarouselCards
                    key={e.nomeProfessor}
                    funcao={e.funcao}
                    img={e.img}
                    nomeProfessor={e.nomeProfessor}
                  />
                )
              })}
            </motion.div>
          </motion.div>
        </div>
      </section>
      <section id='contato' className='section-contato'>
        <div className='limita-largura'>
          <div className='contato-container'>
            {contatoInfos.map((e,index) => {
              return (
                <motion.div
                key={index}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.5 }}
                  variants={containerVariants}
                >
                  <ContatoCards
                    icon={e.icon}
                    endereco={e.endereco}
                    key={e.index}
                  />
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
      <footer className='rodape'>
        <div className='rodape-container'>
          <motion.p initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ duration: '1', ease: 'easeInOut' }}>Desenvolvido por <span> <a href="https://www.linkedin.com/in/lucas-regly-marchitto-538919274/" target='_blank'>Lucas Regly Marchitto | 2024 </a> </span> Todos os direitos reservados © </motion.p>
        </div>
      </footer>
    </main>
  )
}

export default Home;