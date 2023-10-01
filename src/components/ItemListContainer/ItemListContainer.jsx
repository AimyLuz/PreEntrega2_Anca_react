import { useState, useEffect } from 'react';
import { getProducts, getProductByCategory } from '../../asyncMock';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';



{/*const ItemListContainer = ({greeting}) => {
    
    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();

    useEffect(() =>{
        const asyncFunc = categoryId ? getProductByCategory : getProducts
        asyncFunc(categoryId)
                .then(response => {
                    setProducts(response)
                })
                .catch(error => {
                    console.error(error)
                })
        
    }, [categoryId])

    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    ) 
}*/}
const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]); // Inicializa products como un array vacío
    const { categoryId } = useParams();
  
    useEffect(() => {
      const asyncFunc = categoryId ? getProductByCategory : getProducts;
      asyncFunc(categoryId)
        .then(response => {
          if (Array.isArray(response)) {
            console.log('Datos de productos válidos:', response); // Agrega este log
            setProducts(response);
          } else {
            console.error('Los datos de productos no están en el formato esperado.');
          }
        })
        .catch(error => {
          console.error(error);
        });
  
    }, [categoryId]);
  
    return (
      <div>
        <h1>{greeting}</h1>
        {Array.isArray(products) && products.length > 0 && <ItemList products={products} />}
      </div>
    );
  };

export default ItemListContainer;