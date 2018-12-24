import styled from 'styled-components'
import { bp } from '../../../../../helpers/styleHelper'

// background: linear-gradient(to right, ${props => props.theme.blueShade}, ${props => props.theme.greenShade});
export const Wrapper = styled.div`
  height: 200px;
  ${bp('md')`
    height: auto;
  `}
  width: 100%;
  background: white;
`
export const Logo = styled.div`
  height: 200px;
  margin-left: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;  
  > img {
    height: 80px;
  }
`

export const Info = styled.div`
  color: ${props => props.theme.blueShade};
  margin-left: 50px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  
  > div {
    display:flex;
    align-items: center;    
  }

  .email {
    > img {
      margin-right: 20px;
      height: 35px;
    }
    padding: 5px;
  }

  .address {
    > img {
      margin-right: 20px;
      height: 35px;
    }
    padding: 5px;
  }

  .link {    
    > a {      
      margin-right: 15px;
    }
  }
`