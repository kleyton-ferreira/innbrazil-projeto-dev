import { Images } from '../../scripts/scriptsImg'
import ConfirmeCards from '../confirme-cards/confirme-cards-components'
import { ConfirmedContent } from './confirmed-style'

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
    </>
  )
}

export default ConfirmedCardsIntens
