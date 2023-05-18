import styled from "styled-components"
import { Header } from "./header"

//estilizando a tag main
const Container = styled.main`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    min-height: 400px;
    height: auto;
    background: #fff;
`
//estilizando a tag div
const Div = styled.div`
    display: flex;
    padding: 20px;
    align-items: center;
    height: auto;
    width: 100%;
    border: 1px solid red;
`

export const Layout = () => {
    
    return (
    <Container>
        <Header/>
        <Div>
            <p>ICE</p>
        </Div>
        
    </Container>
    )
}