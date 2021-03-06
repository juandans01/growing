import styled from 'styled-components'
import Logo from '../../../../../assets/logo.svg'
import { bp } from '../../../../../helpers/styleHelper'

export const Wrapper = styled.div``

export const BoxWrapper = styled.div`
  margin: 10px 50px;  
  display: flex;
  justify-content: flex-end;
  ${bp('md')`
    margin: 10px 0;
    justify-content: flex-start;
  `}
`

export const Items = styled.div`
  background: url(${Logo}) no-repeat 50% 50% / auto;
  display: flex;
  flex-direction: column;
  justify-content: center;

  > div {
    display: flex;
    justify-content: center;
  }

  .second {
    width: 300px;
  }

  .third {
    width: 100px;
  }

  ${bp('md')`
    background: none;

    > div {
      flex-direction: column;
      align-items: center;
    }  
  `}
`

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 200px;

  .image-wrapper {
    position: relative;
    > img { 
      position: relative;
      z-index: 2;
    }   
  }

  .circles-1 {
    z-index: 1;
    .big-circle {
      position: absolute;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background: ${props => props.theme.greenShade};
      top: 50px;
      left: 30px;
    }    

    .small-circle {
      position: absolute;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: ${props => props.theme.greenShade};
      top: 70px;
      right: 25px;
    }
  }

  .circles-2 {
    z-index: 1;
    .big-circle {
      position: absolute;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background: ${props => props.theme.greenShade};
      top: 30px;
      right: 40px;
    }

    .small-circle {
      position: absolute;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: ${props => props.theme.greenShade};
      top: 70px;
      left: 30px;
    }
  }

  .circles-3 {
    z-index: 1;
    .big-circle {
      position: absolute;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: ${props => props.theme.greenShade};
      top: 35px;
      right: 35px;
    }

    .small-circle {
      position: absolute;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background: ${props => props.theme.greenShade};
      top: 80px;
      left: 20px;
    }
  }



  > div {
    font-family: 'Montserrat';
    font-weight: 900;
    font-size: 14px;    

  }

  > p {
    text-align: center;
    font-size: 14px;
    line-height: 1.4;
  }  
`