import styled from 'styled-components'

export const MainContainer = styled.div`
  background-image: linear-gradient(${props => props.direction});
  height: auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Heading = styled.h1`
  color: #ffffff;
  font-size: 25px;
  font-weight: 500;
  font-family: 'Roboto';
  margin-bottom: 0px;
`

export const ParaText = styled.p`
  color: #ededed;
  font-size: 18px;
  font-weight: 500;
  font-family: 'Roboto';
  margin-top: 50px;
`

export const DirectionContainer = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
`

export const ColorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 25px;
  margin-right: 25px;
`

export const ColorHex = styled.p`
  color: #ededed;
  font-size: 12px;
  font-weight: 500;
  font-family: 'Roboto';
`

export const ColorPicker = styled.input`
  border: none;
  background-color: transparent;
  width: 100px;
  height: 50px;
  cursor: pointer;
`

export const Button = styled.button`
  color: #1e293b;
  font-size: 15px;
  font-weight: 500;
  font-family: 'Roboto';
  background-color: #00c9b7;
  border-radius: 5px;
  border-width: 0px;
  width: 90px;
  height: 35px;
  cursor: pointer;
`
