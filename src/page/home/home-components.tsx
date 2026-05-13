// COMPONENTS
import Header from '../../components/header/header-components'
import Banner from '../../components/banner/banner-components'
import Points from '../../components/points/points-components'
import Cards from '../../components/cards/cards-components'

const HomePage = () => {
  return (
    <>
      <Header />
      <section>
        <Banner />
      </section>
      <Points />
      <Cards />
    </>
  )
}

export default HomePage
