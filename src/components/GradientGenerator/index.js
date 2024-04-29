import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'
import {
  MainContainer,
  Heading,
  ParaText,
  ColorHex,
  Button,
  FlexContainer,
  ColorPicker,
  ColorContainer,
  DirectionContainer,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    color1: '#8ae323',
    color2: '#014f7b',
    activeDirection: gradientDirectionsList[0].value,
    direction: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
  }

  onChangeColor1 = event => {
    this.setState({color1: event.target.value})
  }

  onChangeColor2 = event => {
    this.setState({color2: event.target.value})
  }

  onChangeDirection = directionValue => {
    this.setState({activeDirection: directionValue})
  }

  onClickGenerate = () => {
    const {activeDirection, color1, color2} = this.state
    this.setState({direction: `to ${activeDirection}, ${color1}, ${color2}`})
  }

  render() {
    const {color1, color2, activeDirection, direction} = this.state

    return (
      <MainContainer direction={direction} data-testid="gradientGenerator">
        <Heading>Generate a CSS Color Gradient</Heading>
        <ParaText>Choose Direction</ParaText>
        <DirectionContainer>
          {gradientDirectionsList.map(eachDirection => (
            <GradientDirectionItem
              key={eachDirection.directionId}
              directionDetails={eachDirection}
              onChangeDirection={this.onChangeDirection}
              isActive={activeDirection === eachDirection.value}
            />
          ))}
        </DirectionContainer>
        <ParaText>Pick the Colors</ParaText>
        <FlexContainer>
          <ColorContainer>
            <ColorHex>{color1}</ColorHex>
            <ColorPicker
              type="color"
              onChange={this.onChangeColor1}
              value={color1}
            />
          </ColorContainer>
          <ColorContainer>
            <ColorHex>{color2}</ColorHex>
            <ColorPicker
              type="color"
              onChange={this.onChangeColor2}
              value={color2}
            />
          </ColorContainer>
        </FlexContainer>
        <Button type="button" onClick={this.onClickGenerate}>
          Generate
        </Button>
      </MainContainer>
    )
  }
}

export default GradientGenerator
