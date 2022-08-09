import Card from '../components/Card'
import './main.styles.css'
import ImageProductDesktop from '../assets/images/image-product-desktop.jpg'
import ImageProductMobile from '../assets/images/image-product-mobile.jpg'
import { useScreenSizing } from '../hooks/useScreenSizing'

export default function Main () {
  const { screenWidth } = useScreenSizing()
  return (
    <main>
      <Card
        image={
          screenWidth > 998
            ? ImageProductDesktop
            : ImageProductMobile
        }
        title='Gabrielle Essence Eau De Parfum'
        description='A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL0'
        price='$149.99'
        previousPrice='$169.99'
      />
    </main>
  )
}
