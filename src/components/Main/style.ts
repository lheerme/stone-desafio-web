import { styled } from 'styled-components'
import backgroundImg from '../../assets/Mask.png'

export const Container = styled.main`
  width: 100%;
  min-height: 100vh;
  background-image: url(${backgroundImg});
  background-size: cover;
  background-position: right center;
  background-repeat: no-repeat;
`