// Style your elements here
import styled from 'styled-components'

export const CustomButton = styled.button`
  color: black;
  background-color: white;
  border: none;
  border-radius: 5px;
  margin: 10px;
  padding: 10px;
  width: 65px;
  font-weight: 500;
  opacity: ${props => (props.isActive ? '1' : '0.5')};
`

export const DirectionItem = styled.li`
  padding: 0px;
`
