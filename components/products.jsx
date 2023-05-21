import { SCREENS } from "../layout"

const Products = ({ changeScreen }) => {
//passando com parametro da função 'chngScr' a tela atribuida no objeto no BUTTON
    return (
    <>
        <h1>Produtos</h1>
         
        <button onClick={() => changeScreen(SCREENS.ECOMMERCE)}>Ir para carrinho</button>
    </>
    )
}
export default Products