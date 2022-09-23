import styled from 'styled-components'

export const GradientAppContainer = styled.div`
  background-image: linear-gradient(${props => props.gradientValue});
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60vw;
  height: 100vh;
  padding: 35px;
  justify-content: center;

  background-size: cover;
`
export const Heading = styled.h1`
  color: white;
`
export const Paragraph = styled.p`
  color: white;
`

export const UnorderList = styled.ul`
  list-style: none;
  padding: 0px;
  display: flex;
`
export const CustomInput = styled.input`
  width: 70px;
  margin: 15px;
  padding: 0px;

  border: transparent;
  outline: none;
`
export const ColorContainer = styled.div`
  display: flex;
`

export const GenarateButton = styled.button`
  color: white;
  background-color: blue;
  padding: 15px;
  margin: 15px;
  border: none;
  border-radius: 8px;
`
export const EachColorValue = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
