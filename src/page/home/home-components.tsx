// COMPONENTS
import Header from '../../components/header/header-components'
import Banner from '../../components/banner/banner-components'
import Points from '../../components/points/points-components'
import Cards from '../../components/cards/cards-components'
import Plans from '../../components/plans/plans-components'
import Confirmed from '../../components/confirmed/confirmed-components'
import CardBox from '../../components/cards-box/cards-box-components'
import ForWhowAnd from '../../components/for-whom-and/for-whow-and-components'

const HomePage = () => {
  return (
    <>
      <Header />
      <section>
        <Banner />
      </section>
      <Points />
      <Cards />
      <Plans />
      <Confirmed />
      <CardBox />
      <ForWhowAnd />
    </>
  )
}

export default HomePage
