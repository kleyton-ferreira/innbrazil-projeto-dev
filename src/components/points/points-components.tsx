// SCRIPT and TEXT
import { TextPoints } from '../../scripts/scriptsText'

import { PointsContainer, PointsItens } from './points-style'

// ICONS
import { FaCircleCheck } from 'react-icons/fa6'

const Points = () => {
  return (
    <>
      <PointsContainer>
        <PointsItens>
          <p>
            {<FaCircleCheck size={20} />}
            <span> {TextPoints.title} </span>
          </p>
        </PointsItens>
        <PointsItens>
          <p>
            {<FaCircleCheck size={20} />}
            <span> {TextPoints.subTitle} </span>
          </p>
        </PointsItens>
        <PointsItens>
          <p>
            {<FaCircleCheck size={20} />}
            <span> {TextPoints.text} </span>
          </p>
        </PointsItens>
        <PointsItens>
          <p>
            {<FaCircleCheck size={20} />}
            <span> {TextPoints.subText} </span>
          </p>
        </PointsItens>
      </PointsContainer>
    </>
  )
}

export default Points
