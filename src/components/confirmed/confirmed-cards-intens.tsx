// COMPONENTS
import Button from '../button/button-components'
import ConfirmeCards from '../confirme-cards/confirme-cards-components'

// STYLES
import {
  ConfirmedContent,
  ConfirmedTitleFooter,
  ConfirmedButton
} from './confirmed-style'

// SCRIPTS and TEXT
import { Images } from '../../scripts/scriptsImg'
import { ConfirmedText, TextsBanner } from '../../scripts/scriptsText'

const ConfirmedCardsIntens = () => {
  return (
    <>
      <ConfirmedContent>
        <ConfirmeCards
          img={Images.DoctorOne}
          title='Dr. Fernando Silva'
          description='Biomedicina Estética'
        />
        <ConfirmeCards
          img={Images.DoctorTwo}
          title='Dra. Amanda Torres'
          description='Coaching'
        />
        <ConfirmeCards
          img={Images.DoctorThree}
          title='Dra. Regina Paula'
          description='Psicologa'
        />

        <ConfirmeCards
          img={Images.DoctorFour}
          title='Ana Maria Fernanda'
          description='Coaching'
        />
      </ConfirmedContent>

      <ConfirmedContent>
        <ConfirmeCards
          img={Images.DoctorFive}
          title='Dr. Fernando Silva'
          description='Biomedicina Estética'
        />
        <ConfirmeCards
          img={Images.DoctorSix}
          title='Dr. Paulo Andrade'
          description='Coaching'
        />
        <ConfirmeCards
          img={Images.DoctorSeven}
          title='Dra. Regina Paula'
          description='Psicologa'
        />

        <ConfirmeCards
          img={Images.DoctorEight}
          title='Ana Maria Fernanda'
          description='Coaching'
        />
      </ConfirmedContent>
      <ConfirmedTitleFooter>
        <h2>
          {ConfirmedText.text} <strong> {ConfirmedText.subText} </strong>
          <span>
            {ConfirmedText.descText}
            <strong> {ConfirmedText.subDescText} </strong>
            {ConfirmedText.descTitle}
            <strong> {ConfirmedText.subDescTitle} </strong>
          </span>
        </h2>
      </ConfirmedTitleFooter>
      <ConfirmedButton>
        <Button message={TextsBanner.button} variant='secondary' />
      </ConfirmedButton>
    </>
  )
}

export default ConfirmedCardsIntens
