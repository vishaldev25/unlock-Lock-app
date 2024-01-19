import {useState} from 'react'

import {App, Button, Para, Image} from './styledComponents'

const Unlock = () => {
  const [isLocked, setLocked] = useState(true)

  const buttonClicked = () => {
    setLocked(prev => !prev)
  }

  const para = isLocked ? 'Locked' : 'Unlocked'
  const buttonValue = isLocked ? 'Unlock' : 'Lock'
  const imageValue = isLocked
    ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
  const altValue = isLocked ? 'lock' : 'unlock'

  return (
    <App>
      <Image src={imageValue} alt={altValue} />
      <Para>Your Device is {para}</Para>
      <Button type="button" onClick={buttonClicked}>
        {buttonValue}
      </Button>
    </App>
  )
}

export default Unlock
