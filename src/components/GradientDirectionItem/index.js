// Write your code here
import {CustomButton, DirectionItem} from './styledComponents'

const GradientDictionaryItem = props => {
  const {each, changeDirection, isActive} = props
  const {value, displayText} = each

  const onClickDirectionItem = () => {
    changeDirection(value)
  }

  return (
    <DirectionItem>
      <CustomButton
        type="button"
        onClick={onClickDirectionItem}
        isActive={isActive}
      >
        {displayText}
      </CustomButton>
    </DirectionItem>
  )
}

export default GradientDictionaryItem
