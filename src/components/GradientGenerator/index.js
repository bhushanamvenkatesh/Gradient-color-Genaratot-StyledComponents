import {Component} from 'react'
import {
  GradientAppContainer,
  Heading,
  Paragraph,
  UnorderList,
  CustomInput,
  ColorContainer,
  GenarateButton,
  EachColorValue,
} from './styledComponents'
import GradientDictionaryItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    firstColor: '#8ae323',
    secondColor: '#014f7b',
    GradientDirection: gradientDirectionsList[0].value,
    gradientValue: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
  }

  onClickGenarateButton = event => {
    const {
      firstColor,
      secondColor,
      GradientDirection,
      gradientValue,
    } = this.state
    event.preventDefault()
    this.setState({
      gradientValue: `to ${GradientDirection}, ${firstColor}, ${secondColor}`,
    })
    console.log(gradientValue)
  }

  changeDirection = direction => {
    console.log(direction)
    this.setState({GradientDirection: direction})
  }

  changeFirstColor = event => this.setState({firstColor: event.target.value})

  changeSecondColor = event => this.setState({secondColor: event.target.value})

  render() {
    const {
      gradientValue,
      GradientDirection,
      firstColor,
      secondColor,
    } = this.state

    return (
      <GradientAppContainer
        gradientValue={gradientValue}
        data-testid="gradientGenerator"
      >
        <Heading>Generate a CSS Color Gradient</Heading>
        <Paragraph>Choose Direction</Paragraph>
        <UnorderList>
          {gradientDirectionsList.map(each => (
            <GradientDictionaryItem
              as="button"
              each={each}
              key={each.directionId}
              changeDirection={this.changeDirection}
              isActive={GradientDirection === each.value}
            />
          ))}
        </UnorderList>
        <Paragraph>Pick the Colors</Paragraph>
        <ColorContainer>
          <EachColorValue>
            <Paragraph>{firstColor}</Paragraph>
            <CustomInput type="color" onChange={this.changeFirstColor} />
          </EachColorValue>
          <EachColorValue>
            <Paragraph>{secondColor}</Paragraph>
            <CustomInput type="color" onChange={this.changeSecondColor} />
          </EachColorValue>
        </ColorContainer>
        <GenarateButton type="button" onClick={this.onClickGenarateButton}>
          Generate
        </GenarateButton>
      </GradientAppContainer>
    )
  }
}

export default GradientGenerator
