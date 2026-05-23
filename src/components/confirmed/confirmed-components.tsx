// STYLES
import { ConfirmedContainer, ConfirmedTitle } from './confirmed-style'

// COMPONENTS
import ConfirmedCardsIntens from './confirmed-cards-intens'

// SCRIPT and TEXT
import { ConfirmedText } from '../../scripts/scriptsText'

const Confirmed = () => {
  return (
    <>
      <ConfirmedContainer>
        <ConfirmedTitle>
          <h2> {ConfirmedText.title} </h2>
          <h3> {ConfirmedText.subTitle} </h3>
          <p>
            {ConfirmedText.description}
            <span>{ConfirmedText.subDescription}</span>
            <span> {ConfirmedText.descriptionFooter} </span>
          </p>
        </ConfirmedTitle>
        <ConfirmedCardsIntens />
      </ConfirmedContainer>
    </>
  )
}

export default Confirmed
