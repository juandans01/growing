import React, { Component } from 'react'
import { Wrapper, Logo, Info } from './components/Styled'
import LogoFooter from '../../../assets/logo-dark.svg'
import Linkedin from '../../../assets/linkedin-dark.svg'
import Location from '../../../assets/location.svg'
import Email from '../../../assets/email.svg'

export default class Footer extends Component {


  render(){
    return(
      <div className='pure-g'>
        <Wrapper>
          <div className='pure-u-1-2 pure-u-md-1'>
            <Logo>
              <img
                src={LogoFooter}
                alt='logo-footer'
              />
            </Logo>
          </div>
          <div className='pure-u-1-2 pure-u-md-1'>
            <Info>
              <div className='email'>
                <img
                  src={Email}
                  alt='email'
                />
                <div>
                  contacto@growinghr.com
                </div>                
              </div>              
              <div className='link'>
                <a href='https://www.linkedin.com/company/growinghr' target='_blank' rel="noopener noreferrer">
                  <img  
                    src={Linkedin}
                    alt='linkedin'
                  />                  
                </a>
                <span>/company/growinghr</span>                  
              </div>
              <div className='address'>
                <img
                  src={Location}
                  alt='location'
                />
                <div>
                  Hit Cowork Av Luis M. Campos 877,<br/>
                  Ciudad de Buenos Aires, Argentina  
                </div>              
              </div>
            </Info>
          </div>                 
        </Wrapper>
      </div>            
    )
  }
}