import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import styled from 'styled-components'

const StyledPricingCards = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`

const StyledPricingCardContainer = styled.div`
  width: 320px;
  margin: 48px 48px 0 0;
  background-color: white;
  border-radius: 10px;
  :hover {
    box-shadow: 0 0px 10px 2px #2499f9;
  }
  overflow: hidden;
  @media (max-width: 480px) {
    margin: 48px 0px 0 0;
  }
`

const StyledHeaderContainer = styled.div`
  background-color: ${({ type }) => type === 'essentials' ? '#D0EBFF' : (type === 'growth'?'#98DAD9':"#FF8B8B")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  color: #343A40;
`

const StyledHeaderIcon = styled(FontAwesomeIcon)`
  font-size: 55px;
  margin-bottom: 10px;
`

const StyledHeaderText = styled.div`
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 10px;
`

const StyledHeaderPrice = styled.div`
  font-weight: 600;
  font-size: 50px;
`

const StyledHeaderUnit = styled.div`
  font-size: 20px;
`

const StyledSpecialInfoContainer = styled.div`
  width: 100%;
  background-color: ${({ type }) => type === 'essentials' ? '#E7F5FF' : '#183153'};
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 25px;
  box-sizing: border-box;
  color: ${({ type }) => type === 'essentials' ? '#ADB5BD' : 'white'};
`

const StyledSpecialInfoIcon = styled(FontAwesomeIcon)`
  padding-right: 10px;
  font-size: 20px;
  width: 20px !important;
  ${({ type }) => type !== 'essentials' && `
    color: #2499f9;
  `};
  ${({ $isClickable }) => $isClickable && `
    :hover {
      cursor: pointer;
    }
  `}
  ${({ $comingSoon }) => $comingSoon && `
    color: #ADB5BD;
  `};
`

const StyledSpeicalInfoText = styled.a`
  padding: 0 10px;
  color: white;
  flex-grow: 2;
  white-space: nowrap;
  font-size: 14px;
  ${({ $isExcluded }) => $isExcluded === true && `
    text-decoration: line-through;
    color: #ADB5BD;
  `};
  ${({ href }) => href && `
    text-decoration: none;
  `};
  ${({ $comingSoon }) => $comingSoon && `
    color: #ADB5BD;
  `};
`

const StyledSpecialInfoList = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  min-width: 200px;
  max-width: 200px;
`

const StyledSpecialInfoListItem = styled.li`
  display: flex;
  align-items: center;
  padding-top: 15px;
  :first-child {
    padding: 0;
  }
`

const StyledBetaPill = styled.div`
  color: #183153;
  padding: 5px 10px;
  border-radius: 8px;
  background-color: #FFD43B;
  font-size: 12px;
  font-weight: bold;
  margin-right: 10px;
`

const StyledFeaturesContainer = styled.div`
  padding: 30px 25px;
`

const StyledFeaturesList = styled.ul`
  margin: 0;
  list-style-type: none;
  padding: 0;
`

const StyledFeaturesListItem = styled.li`
  padding-bottom: 15px;
  :last-child {
    padding: 0;
  }
`

const StyledFeaturesListItemIcon = styled(FontAwesomeIcon)`
  padding-right: 20px;
  font-size: 18px;
  width: 20px !important;
  color: ${({ type, $isExcluded }) => $isExcluded ? '#ADB5BD' : (type === 'essentials' ? '#3E9AE9' : '#3E9AE9')};
`

const StyledFeaturesListItemText = styled.a`
  font-size: 15px;
  color: ${({ $isExcluded }) => $isExcluded ? '#ADB5BD' : '#495057'};
  text-decoration-color: rgba(0,0,0,0.25);
  :hover {
    color: ${({ type }) => type === 'essentials' ? '#228BE6' : (type === 'growth' ? '#12b886' : '#F65248')};
    text-decoration-color: ${({ type }) => type === 'essentials' ? '#228BE6' : '#12b886'};
  }
`

const StyledFooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 10px;
  border-top: 2px solid #D0EBFF;
  ${({ type }) => type === 'essentials' && `
    background-color: white;
    border-top-color: #D0EBFF;
  `}
  ${({ type }) => type === ('growth') && `
  background-color: white;
  border-top-color: #98DAD9;
  `}
  ${({ type }) => type === ('business') && `
  background-color: white;
  border-top-color: #FF8B8B;
  `}
`

const StyledFooterButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ type }) => type !== 'essentials' && 'white'};
  text-align: center;
  padding: 13px 35px;
  border-radius: 8px;
  border: 1px solid ${({ type }) => type === 'essentials' ? '#CDCDCD' : '#CDCDCD'};
  // Border Color Here --->
  border-bottom: 4px solid ${({ type }) => type === 'essentials' ? '#CDCDCD' : '#CDCDCD'};
  width: 65%;
  font-size: 14px;
  font-weight: bold;
  color: ${({ type }) => type === 'essentials' ? '#228BE6' : '#228BE6'};
  text-decoration: none;
  :hover {
    color: ${({ type }) => type === 'essentials' && 'white'};
    color: ${({ type }) => type === 'growth' && 'white'};
    color: ${({ type }) => type === 'business' && 'white'};
    background-color: ${({ type }) => type === 'essentials' ? '#CAE8FF' : ((type === 'growth'?'#98DAD9':"#FF8B8B"))};
    border-color: ${({ type }) => type === 'essentials' ? '#AFCADF' : ((type === 'growth'?'#83AFAF':"#B05E59"))};
    cursor: pointer;
  }
`

const StyledFooterIcon = styled(FontAwesomeIcon)`
  font-size: 25px;
  padding-right: 10px;
`

const planToHeaderText = (plan) => {
  const lower = plan.toLowerCase()

  return `${lower.slice(0, 1).toUpperCase()}${lower.slice(1)}`
}

const planToIcon = {
  essentials: 'running',
  standard: 'car-side',
  essentials:''
}

const BetaPill = () => {
  return (
    <StyledBetaPill>
      BETA
    </StyledBetaPill>
  )
}

const Header = (props) => {
  const {
    type,
    icon,
    text,
    amount,
    units
  } = props

  return (
    <StyledHeaderContainer type={type}>
      {/* <StyledHeaderIcon icon={icon} /> */}
      <StyledHeaderText>{text}</StyledHeaderText>
      <StyledHeaderPrice>${amount}</StyledHeaderPrice>
      <StyledHeaderUnit>{units}</StyledHeaderUnit>
    </StyledHeaderContainer>
  )

}

const SpecialInfo = (props) => {
  const {
    type,
    text,
    isExcluded,
    url,
    additionalFeatures
  } = props

  const [expanded, setExpanded] = useState(false)

  const hasAdditionalFeatures = additionalFeatures !== null

  const handleExpand = () => {
    if (hasAdditionalFeatures) {
      setExpanded((prev) => !prev)
    }
  }

  return (
    <StyledSpecialInfoContainer type={type}>
      <StyledSpecialInfoList>
        <StyledSpecialInfoListItem>
          <StyledSpecialInfoIcon type={type} icon={type === 'essentials' ? 'times' : (expanded ? 'caret-down' : 'caret-right')} $isClickable={hasAdditionalFeatures} onClick={handleExpand} />
          <StyledSpeicalInfoText type={type} $isExcluded={isExcluded}>
            {text}
          </StyledSpeicalInfoText>
        </StyledSpecialInfoListItem>
        {expanded && additionalFeatures.map(({ text, comingSoon = false }, idx) => {
          return (
            <StyledSpecialInfoListItem key={idx}>
              <StyledSpecialInfoIcon type={type} icon={comingSoon ? ['far', 'clock'] : 'check'} $comingSoon={comingSoon} />
              <StyledSpeicalInfoText type={type} $isExcluded={isExcluded} $comingSoon={comingSoon}>
                {text}
              </StyledSpeicalInfoText>
            </StyledSpecialInfoListItem>
          )
        })}
      </StyledSpecialInfoList>
      {/* {type !== 'essentials' && <BetaPill />} */}
      {type !== 'essentials'}
    </StyledSpecialInfoContainer>
  )
}

const Features = (props) => {
  const {
    type,
    includes,
    excludes
  } = props

  return (
    <StyledFeaturesContainer>
      <StyledFeaturesList>
        {includes.map(({ text, url }, idx) => {
          return (
            <StyledFeaturesListItem key={`includes-${idx}`}>
              <StyledFeaturesListItemIcon type={type} icon='check' />
              <StyledFeaturesListItemText type={type} >
                {text}
              </StyledFeaturesListItemText>
            </StyledFeaturesListItem>
          )
        })}
        {excludes.map(({ text, url }, idx) => {
          return (
            <StyledFeaturesListItem key={`excludes-${idx}`}>
              <StyledFeaturesListItemIcon type={type} icon='times' $isExcluded />
              <StyledFeaturesListItemText type={type}  $isExcluded>
                {text}
              </StyledFeaturesListItemText>
            </StyledFeaturesListItem>
          )
        })}
      </StyledFeaturesList>
    </StyledFeaturesContainer>
  )
}

const Footer = (props) => {
  const {
    type,
    text,
    url
  } = props

  return (
    <StyledFooterContainer type={type}>
      <StyledFooterButton type={type} href={url}>
        {/* <StyledFooterIcon icon={type === 'essentials' ? 'rocket' : 'gamepad'} /> */}
        {text}
      </StyledFooterButton>
    </StyledFooterContainer>
  )
}

const PricingCard = (props) => {
  const {
    plan,
    price,
    unit,
    special: {
      text: specialText,
      excluded: excludeSpecial,
      url: specialUrl = null,
      additionalFeatures: additionalSpecialFeatures = null
    },
    includes,
    excludes,
    callToAction: {
      text: callToActionText,
      url: callToActionUrl
    }
  } = props

  return (
    <StyledPricingCardContainer>
      <Header type={plan} icon={planToIcon[plan]} text={planToHeaderText(plan)} amount={price} units={unit} />
      <SpecialInfo type={plan} text={specialText} isExcluded={excludeSpecial} url={specialUrl} additionalFeatures={additionalSpecialFeatures} />
      <Features type={plan} includes={includes} excludes={excludes} />
      <Footer type={plan} text={callToActionText} url={callToActionUrl} />
    </StyledPricingCardContainer>
  )
}

const PricingComponent = ({ data }) => {
  return (
    <StyledPricingCards>
      {data.map((d, idx) => <PricingCard key={idx} {...d} />)}
    </StyledPricingCards>
  )
}

export {
  PricingComponent
}