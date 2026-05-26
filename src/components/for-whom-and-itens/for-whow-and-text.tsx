// COMPOPNENTS
import Button from '../button/button-components'

// STYLES
import {
  ForWhowItensDesc,
  ForWhowItensButton
} from './for-whom-and-itens-styles'

// SCRIPTS and TEXT
import { ForWhowAndText } from '../../scripts/scriptsText'

// ICON
import { FaWhatsapp } from 'react-icons/fa'

const ForWhowText = () => {
  const handleWhatsMessage = () => {
    const phone = '5582988322654'
    const message = encodeURIComponent(
      'gostaria de imformação sobre a innBrazil'
    )
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank')
  }

  return (
    <>
      <ForWhowItensDesc>
        <p>
          {ForWhowAndText.one}

          {ForWhowAndText.OneStrong && (
            <strong> {ForWhowAndText.OneStrong} </strong>
          )}
          {ForWhowAndText.oneEnd}
        </p>

        <p>
          {ForWhowAndText.two}

          {ForWhowAndText.twoStrong && (
            <strong> {ForWhowAndText.twoStrong} </strong>
          )}
          {ForWhowAndText.twoQuite}

          {ForWhowAndText.twoQuiteStrong && (
            <strong> {ForWhowAndText.twoQuiteStrong} </strong>
          )}
          {ForWhowAndText.twoEnd}
        </p>

        <p>
          {ForWhowAndText.four}

          {ForWhowAndText.fourStrong && (
            <strong> {ForWhowAndText.fourStrong} </strong>
          )}
          {ForWhowAndText.fourEnd}
        </p>

        <p> {ForWhowAndText.five} </p>

        <p>
          {ForWhowAndText.sixStrong && (
            <strong> {ForWhowAndText.sixStrong} </strong>
          )}

          {ForWhowAndText.six}

          {ForWhowAndText.sixQuiteStrong && (
            <strong> {ForWhowAndText.sixQuiteStrong} </strong>
          )}
          {ForWhowAndText.sixFind}
          <span> {ForWhowAndText.sixEnd} </span>
        </p>
      </ForWhowItensDesc>
      <ForWhowItensButton>
        <Button onClick={handleWhatsMessage} variant='wats'>
          <h4>
            {ForWhowAndText.btnFor}{' '}
            {ForWhowAndText.btnForStrong && (
              <strong> {ForWhowAndText.btnForStrong} </strong>
            )}{' '}
            <i>{<FaWhatsapp size={26} />}</i>
          </h4>
        </Button>
      </ForWhowItensButton>
    </>
  )
}

export default ForWhowText
