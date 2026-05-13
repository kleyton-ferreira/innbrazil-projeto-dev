import { FunctionComponent } from 'react'

// ICONS
import { FaCalendarDays } from 'react-icons/fa6'
import { IoLocationOutline } from 'react-icons/io5'

// STYLES
import {
  BannerItensContainer,
  BannerItensButton,
  BannerItensImg,
  BannerItensText,
  BannerItensContent,
  BannerItensTitle,
  BannerItensButtonFooter
} from './banner-itens-styles'
import Button from '../button/button-components'

// SCRIPTS AND TEXT and IMAGES
import { TextsBanner } from '../../scripts/scriptsText'
import { Images } from '../../scripts/scriptsImg'
import { Link } from 'react-router-dom'

const BannerItens: FunctionComponent = () => {
  return (
    <>
      <BannerItensContainer>
        <BannerItensImg>
          <img src={Images.modelo} alt='model' />
        </BannerItensImg>
        <BannerItensContent>
          <BannerItensButton>
            <Button
              icon={<FaCalendarDays size={18} />}
              message={TextsBanner.btnData}
              variant='btnBanner'
              variantText='textxl'
            />
            <Button
              icon={<IoLocationOutline size={18} />}
              message={TextsBanner.btnLocation}
              variant='btnBanner'
              variantText='textxl'
            />
          </BannerItensButton>
          <BannerItensText>
            <h2>
              {TextsBanner.title} <span> {TextsBanner.subTitle} </span>
            </h2>
          </BannerItensText>

          <BannerItensTitle>
            <h2>
              {TextsBanner.description}
              <span> {TextsBanner.subDescription} </span>
            </h2>
          </BannerItensTitle>
          <Link to='/'>
            <BannerItensButtonFooter>
              <Button
                icon=''
                message={TextsBanner.button}
                variant='secondary'
                variantText='text2x1'
              />
            </BannerItensButtonFooter>
          </Link>
        </BannerItensContent>
      </BannerItensContainer>
    </>
  )
}

export default BannerItens
