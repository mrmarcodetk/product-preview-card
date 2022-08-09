import './styles.css'
import ButtonAddCard from '../ButtonAddCard'

export default function Card ({ ...props }) {
  const { image, title, description, price, previousPrice } = props
  return (
    <div className='container' {...props}>
      <section className='leftWrapper'>
        <article>
          <figure>
            <img className='seeImageProductDesktop' src={image} alt='Image Product Desktop' />
          </figure>
        </article>
      </section>
      <section className='rightWrapper'>
        <article className='contentCenter'>
          <span className='nameCard'>PERFUME</span>
          <h1 className='title'>{title}</h1>
          <p className='description'>{description}</p>
          <div className='pricesWrapper'>
            <span className='price'>{price}</span>
            <span className='previousPrice'>{previousPrice}</span>
          </div>
          <ButtonAddCard />
        </article>
      </section>
    </div>
  )
}
