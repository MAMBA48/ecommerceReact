import styled from "styled-components"
import { SCREENS } from "../layout"
import { products } from "./utils/products"
import { useState } from 'react'

const Card = styled.section`
    position: relative;
    box-sizing: border-box;
    height: 260px;
    width: 200px;
    color: #000;
`
const Container = styled.main`
    display: flex;
    margin-bottom: 60px;
    position: relative;
    flex-wrap: wrap;
    gap: 50px;
    row-gap: 20px;
    box-sizing: border-box;
    padding: 30px;
    justify-content: space-around;
`
const InputChk = styled.input`
    border: 1px solid var(--bgColor);
    position: absolute;
    height: 20px;
    width: 20px;
    border-radius: 25%;
    bottom: 10px;
    left: 10px;
`
const InputArea = styled.div`
    display: flex;
    flex-direction: row;
`
const BtnAct= styled.button`
    position: absolute;
    cursor: pointer;
    right: 10px;
    bottom: -50px;
`
const SpanHeader = styled.span`
    display: flex;
    position: relative;
    justify-content: space-between;
`
const Cart = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    right: 20px;
    height: 40px;
    width: 40px;
    border-radius: 9px;
    color: #fff;
    font-size: 1.5rem;
    background: var(--bgColor);
    cursor: pointer;
`

//formName = formName.replace(/[^A-Za-z0-9]/g, '_').toLowerCase(); REGEX

const Products = ({ changeScreen }) => {
//passando com parametro da função 'chngScr' a tela atribuida no objeto no BUTTON
    const [prod, setProducts] = useState([])

    return (

    <div>
        <SpanHeader>
            <h1>Produtos</h1>
            <Cart><p>0</p></Cart>
        </SpanHeader>
        <Container>
                { 
                    products.map((collect) => {
                    //key === id único para indentificar cada componente do React
                    
                    return <Card key={collect.id}>
                                    <ul>
                                        <li style={{display:'flex', justifyContent:'center'}}><img src={collect.image}/></li>
                                        <li>{collect.title}</li>
                                        <li style={{display:'flex'}}>
                                            <InputArea>
                                                <InputChk type="checkbox" /><p>{collect.price}</p>
                                            </InputArea>
                                        </li>
                                    </ul>
                            </Card>
                    })
                }
            <BtnAct className="allStyles" onClick={() => changeScreen(SCREENS.ECOMMERCE)}>Ir para carrinho</BtnAct>
        </Container>
        
    </div>
    )
}
export default Products