import {ListItem, DirectionButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {directionDetails, onChangeDirection, isActive} = props
  const {value, displayText} = directionDetails

  const onClickButton = () => {
    onChangeDirection(value)
  }

  return (
    <ListItem>
      <DirectionButton
        type="button"
        onClick={onClickButton}
        isActive={isActive}
      >
        {displayText}
      </DirectionButton>
    </ListItem>
  )
}

export default GradientDirectionItem
