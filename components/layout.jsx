import styled from 'styled-components'
import { Header } from "./header"
import { Footer } from './footer'
import Products from './pages/productsPage'
import Ecommerce from './pages/ecommerce'
import Checkout from './pages/checkout'
import { useState } from 'react'
import { products as p} from './pages/utils/products'

//estilizando a tag main
const Container = styled.main`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    height: auto;
    width: 100vw;
    max-width: 800px;
    background: #fff;
    //overflow-y: scroll;
`
export const SCREENS = {
    PRODUCTS: 0,
    ECOMMERCE: 1,
    CHECKOUT: 2
}
export const Layout = ({ children }) => {
//estado inicial seleciona o estado da tela de produtos 
    const [screen, setScreen] = useState(SCREENS.PRODUCTS)
    const [products] = useState(p) 

    return (
    <Container>
        <Header />
        { children }
            {/*<pre>{JSON.stringify(products, null, 2)}</pre>*/}
            {screen === SCREENS.PRODUCTS && <Products changeScreen={setScreen} />}
            {screen === SCREENS.ECOMMERCE && <Ecommerce changeScreen={setScreen} />}
            {screen === SCREENS.CHECKOUT && <Checkout changeScreen={setScreen} />}
        <Footer />
    </Container>
    )
}