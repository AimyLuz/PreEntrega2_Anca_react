import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import Carousel from 'react-bootstrap/Carousel';

const ItemDetail = ({id, name, img, carruselDos, carruselTres, price, stock, description}) =>{
    
    return (
        <article className='CardItemDetail'>
            <header className='HeaderDetail'>
                <h2 className='ItemHeaderDetail'>
                    {name}
                </h2>
            </header>
            <picture>
            <Carousel>
      <Carousel.Item interval={1000}>
      <img src={img} alt={name} className='ItemImgDetail'/>
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <img src={carruselDos} alt={name} className='ItemImgDetail'/>
      </Carousel.Item>
      <Carousel.Item>
      <img src={carruselTres} alt={name} className='ItemImgDetail'/>
      </Carousel.Item>
    </Carousel>
            </picture>
            <section>
                <p className='InfoDetail'>
                    Precio: ${price}
                </p>
                <p className='InfoDetail'>
                    Stock disponible: {stock}
                </p>
                <p className='InfoDetail'>
                    {description}
                </p>
            </section>
            <footer className='ItemFooterDetail'>
            <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada', quantity)}/>
            </footer>
        </article>
    )
};

export default ItemDetail;