import './styles.css'
import IconCart from '../../assets/icons/icon-cart.svg'
export default function ButtonAddCard () {
  return (
    <button className='buttonAddCard'>
      <img className='iconCart' src={IconCart} alt='Icon Cart' />
      <span className='buttonAddCardText'>Add to Cart</span>
    </button>
  )
}
