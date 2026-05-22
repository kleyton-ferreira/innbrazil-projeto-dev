import { TextPlans } from '../../scripts/scriptsText'

import PlansCard from '../plans-card/plans-card-components'

import PlansCardText from '../../scripts/plans-card'

// ICONS
import { FaRegCheckCircle } from 'react-icons/fa'

// STYLED
import {
  PlansContainer,
  PlansContent,
  PlansText,
  PlansBorder
} from './plans-styles'

const Plans = () => {
  return (
    <>
      <PlansContainer>
        <PlansContent>
          <PlansText>
            <h2>
              {TextPlans.title}
              <span>
                {TextPlans.subTitle} <strong> {TextPlans.subText} </strong>
              </span>
            </h2>
            <PlansBorder />
            <p>
              {TextPlans.description}
              <span> {TextPlans.subDescription} </span>
            </p>
          </PlansText>

          <PlansCard>
            {PlansCardText.plans.map((text) => (
              <p key={text.id}>
                <span> {<FaRegCheckCircle />} </span> {text.name}
              </p>
            ))}
          </PlansCard>
        </PlansContent>
      </PlansContainer>
    </>
  )
}

export default Plans
