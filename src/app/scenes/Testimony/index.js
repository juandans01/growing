import React, { Component } from 'react'
import { Wrapper, Slide, Dots, SlideContent } from './components/Styled'
import Slider from 'react-slick'
import { withTheme } from 'styled-components';

import GreenUp from '../../../assets/test-green-up.svg'
import GreenLow from '../../../assets/test-green-low.svg'

import BlueUp from '../../../assets/test-blue-up.svg'
import BlueLow from '../../../assets/test-blue-low.svg'

class Testimony extends Component {

  constructor(props) {
    super(props)
    this.state = {
      active: '0',
      background: 'green'
    }
  }
  goToSlide = (index) => {
    this.setState({
      active: '' + index,
    })    
    this.slider.slickPause()
    this.slider.slickGoTo(index)
    this.slider.slickPlay()
  }

  beforeSlideChange = (oldIndex, newIndex) => {    

    this.setState({
      active: '' + newIndex,
      background: this.state.background === 'green' ? 'blue' : 'green'
    })
  }

  
  render(){
    const settings = {
      arrows: false,
      infinite: true,      
      slidesToShow:  1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 12000,
      beforeChange: this.beforeSlideChange,
    }
    return(
      <Wrapper>
        <Slider ref={slider => (this.slider = slider)} {...settings}>
          <Slide
            customBackground={this.props.theme.greenShade}
          >
            <SlideContent>                            
              <div className='content-wrapper'>
                <img
                  className='up'
                  src={GreenUp}
                  alt='green-up'
                />
                <div className="title">
                  TESTIMONIOS
                </div>
                <div className='content'>
                  Tuve la suerte de trabajar con Growing HR a través de la empresa iúnigo y la experiencia fue excelente. Tanto Mariano como Juan reflejan ser buenos profesionales con abundante conocimientos del mercado IT, siendo capaces de cumplir en tiempo y en forma con los objetivos planteados y mostrando en todo momento muy buena predisposición para trabajar en equipo.
                </div>
                <div className='author'>
                  Dolores Canónico - Talent Accquisition Specialist - Iúnigo
                </div>
                <img
                  className='low'
                  src={GreenLow}
                  alt='green-low'
                />
              </div>                        
            </SlideContent>            
          </Slide>
          <Slide
            customBackground={this.props.theme.blueShade}
          >
            <SlideContent>
              <div className='content-wrapper'>
                <img
                  className='up'
                  src={BlueUp}
                  alt='blue-up'
                />
                <div className="title">
                  TESTIMONIOS
                </div>
                <div className='content'>
                  Trabajé con Growing en el desafío de empezar a armar el equipo de iúnigo, cuando ni siquiera podíamos contar que éramos iúnigo, solamente que éramos un startup digital. En ese momento me ayudaron a reclutar perfiles tales como Developers de back y de front, tester, diseñadores.
                  Tuve una muy buena experiencia ya que tanto Mariano como Juan se involucran mucho en el cliente, entendiendo la necesidad, los perfiles, y entregando respuestas de calidad en tiempo y forma. Volvería a trabajar con ellos.
                </div>
                <div className='author'>
                  Malía Cara - People Manager - Iúnigo
                </div>
                <img
                  className='low'
                  src={BlueLow}
                  alt='blue-low'
                />
              </div>              
            </SlideContent>            
          </Slide>
          <Slide
            customBackground={this.props.theme.greenShade}
          >
            <SlideContent>
              <div className='content-wrapper'>
                <img
                  className='up'
                  src={GreenUp}
                  alt='green-up'
                />
                <div className="title">
                  TESTIMONIOS
                </div>
                <div className='content'>
                Growing realizó la gestión para que yo ingrese a mi actual trabajo. Al momento de contactarme tenian muy claras las pautas de búsqueda de la empresa y las supieron transmitir de manera cristalina, también pudieron evacuar todas mis dudas. El contacto lo hicieron muy rápido, y siempre estuvieron presentes verificando como venia el proceso. Su trabajo fue muy profesional, si alguien debe cambiar de trabajo recomiendo contactar a Growing.
                </div>
                <div className='author'>
                  Mariano Markon - Solidity Developer - Ripio
                </div>
                <img
                  className='low'
                  src={GreenLow}
                  alt='green-low'
                />
              </div>
            </SlideContent>
          </Slide>
          <Slide
            customBackground={this.props.theme.blueShade}
          >
            <SlideContent>
              <div className='content-wrapper'>
                <img
                  className='up'
                  src={BlueUp}
                  alt='blue-up'
                />
                <div className="title">
                  TESTIMONIOS
                </div>
                <div className='content'>
                Por fin una buena empresa de Recruiting ! Trabaje con Juan y Mariano para formar un equipo de desarrolladores en mi empresa y después de haber analizado mis requisitos me presentaron una terna de candidatos que aplicaban muy bien a la posición. Lo que puedo destacar fue la relación y el feedback que tuvimos durante todo el proceso. Juan y Mariano son muy profesionales y siempre atento de brindar un servicio 5 estrellas ! Recomiendo GrowingHR los ojos cerrados.
                </div>
                <div className='author'>
                  Augustin de Villaines - Founder - Gestorando
                </div>
                <img
                  className='low'
                  src={BlueLow}
                  alt='blue-low'
                />
              </div>
            </SlideContent>
          </Slide>
          <Slide
            customBackground={this.props.theme.greenShade}
          >
            <SlideContent>
              <div className='content-wrapper'>
                <img
                  className='up'
                  src={GreenUp}
                  alt='green-up'
                />
                <div className="title">
                  TESTIMONIOS
                </div>
                <div className='content'>
                Tuve la suerte de trabajar con Growing HR confiándole varias búsquedas IT para Ripio, y tanto el proceso como los resultados fueron excelentes. Agradezco a Mariano y Juan por la predisposición, el profesionalismo y el tiempo brindado en cada proyecto. Es un placer trabajar con ustedes!
                </div>
                <div className='author'>
                  Nuria Vazquez - Lead Recruiter - Ripio
                </div>
                <img
                  className='low'
                  src={GreenLow}
                  alt='green-low'
                />
              </div>
            </SlideContent>
          </Slide>
          <Slide
            customBackground={this.props.theme.blueShade}
          >
            <SlideContent>
              <div className='content-wrapper'>
                <img
                  className='up'
                  src={BlueUp}
                  alt='blue-up'
                />
                <div className="title">
                  TESTIMONIOS
                </div>
                <div className='content'>
                Agradezco la gestión de GrowingHR, la verdad que fue de mucha ayuda para avanzar con la propuesta. Solucionó todas mis inquietudes y creo un canal de comunicación muy fluido. Excelente experiencia.
                </div>
                <div className='author'>
                  Marcos Corujo - Coordinador de Soporte
                </div>
                <img
                  className='low'
                  src={BlueLow}
                  alt='blue-low'
                />
              </div>
            </SlideContent>
          </Slide>
          <Slide
            customBackground={this.props.theme.greenShade}
          >
            <SlideContent>
              <div className='content-wrapper'>
                <img
                  className='up'
                  src={GreenUp}
                  alt='green-up'
                />
                <div className="title">
                  TESTIMONIOS
                </div>
                <div className='content'>
                Tuve el agrado de realizar un proceso de cambio de trabajo con GrowingHR, el cual me asistió de manera muy atenta, siempre ofreciendo su ayuda y la verdad que da gusto haberse encontrado con una empresa de recruting la cual tenga tanto tacto humano. Sin duda me gustaría volver a pasar por otro proceso en algún futuro repitiendo su asesoramiento !!
                </div>
                <div className='author'>
                  Matias Navarro - NodeJs Developer
                </div>
                <img
                  className='low'
                  src={GreenLow}
                  alt='green-low'
                />
              </div>
            </SlideContent>
          </Slide>
        </Slider>
        <Dots
          backgroundColor={this.state.background}
        >
          <div>
            <li className={this.state.active === '0' ? 'active' : ''} onClick={() => {this.goToSlide(0)}}></li>
            <li className={this.state.active === '1' ? 'active' : ''} onClick={() => {this.goToSlide(1)}}></li>
            <li className={this.state.active === '2' ? 'active' : ''} onClick={() => {this.goToSlide(2)}}></li>
            <li className={this.state.active === '3' ? 'active' : ''} onClick={() => {this.goToSlide(3)}}></li>
            <li className={this.state.active === '4' ? 'active' : ''} onClick={() => {this.goToSlide(4)}}></li>
            <li className={this.state.active === '5' ? 'active' : ''} onClick={() => {this.goToSlide(5)}}></li>
            <li className={this.state.active === '6' ? 'active' : ''} onClick={() => {this.goToSlide(6)}}></li>
          </div>
        </Dots>
      </Wrapper>
    )
  }
}


export default withTheme(Testimony)