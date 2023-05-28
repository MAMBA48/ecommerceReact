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
        display: flex;
        align-items: center;
        text-align: center;
        line-height: 60px;
        height: 60px;
        width: 120px;
        color: #fff;
    }
`

export const Footer = () => {

    return (
        <Container>

            <div><img src="./src/assets/v.png" alt="card flag" /></div>
            <div><img src="./src/assets/m.png" alt="card flag" /></div>
            <div><img src="./src/assets/b.png" alt="card flag" /></div>
            <div><img src="./src/assets/h.png" alt="card flag" /></div>
        </Container>
    )
}
