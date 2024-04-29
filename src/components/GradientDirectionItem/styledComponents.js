import styled from 'styled-components'

export const ListItem = styled.li`
  list-style: none;
`

export const DirectionButton = styled.button`
  color: #1e293b;
  font-size: 15px;
  font-weight: 500;
  font-family: 'Roboto';
  background-color: #ededed;
  border-radius: 7px;
  border-width: 0px;
  width: 100px;
  height: 38px;
  margin-right: 5px;
  cursor: pointer;
  opacity: ${props => (props.isActive ? '1' : '0.5')};
`
