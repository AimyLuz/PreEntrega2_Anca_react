import cart from './assets/cart.svg'
const CartWidget = () => {
    return (
        <div>
            <a href="#" style={{ textDecoration: 'none' }}>
            <img src={cart} alt="cart-widget" />
            <span style={{color:"#FFF6E0"}}>0</span>
            </a>
        </div>
    )
}
export default CartWidget;