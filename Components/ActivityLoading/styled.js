import styled, { keyframes } from 'styled-components'

const skCubeMove = keyframes`
  25% { transform: translateX(42px) rotate(-90deg) scale(0.5) }
  50% { transform: translateX(42px) translateY(42px) rotate(-180deg) }
  75% { transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5) }
  100% { transform: rotate(-360deg) }
}
`

const Spinner = styled.div`
  margin: 100px auto;
  width: 40px;
  height: 40px;
  position: relative;
`

const Cube = styled.div`
  background-color: #333;
  width: 15px;
  height: 15px;
  position: absolute;
  top: 0;
  left: 0;

  animation: ${skCubeMove} 1.8s infinite ease-in-out;
`
const CubeA = Cube
const CubeB = Cube.extend`
  -webkit-animation-delay: -0.9s;
  animation-delay: -0.9s;
`

export {
  CubeA,
  CubeB,
  Spinner,
}
