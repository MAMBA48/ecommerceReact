import styled from 'styled-components'

const Container = styled.footer`
    box-sizing: border-box;
    display: flex;
    margin-top: 1rem;
    align-items: center;
    justify-content: space-around;
    padding: 1rem;
    border-top: 4px solid #5950A1;
    height: 80px;
    width: 100%;

 //função para as outras divs restantes atribuir estilização   
    >div {
        text-align: center;
        line-height: 60px;
        height: 60px;
        width: 120px;
        background: #5950A1;
        color: #fff;
    }
`

export const Footer = () => {

    return (
        <Container>
            <div>VISA</div>
            <div>MASTER</div>
            <div>BOLETO</div>
            <div>HIPERCARD</div>
        </Container>
    )
}
