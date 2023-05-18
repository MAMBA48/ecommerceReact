import styled from 'styled-components'

//Container é a estilização pai desse JSX
const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 20px;
    height: 80px;
    width: 100vw;
    max-width: 1024px;
    background: var(--bgColor);
    color: #fff;
    `
export const Header = () => {

    return (
        <Container>
                <div>
                    <h2>E-Commerce</h2>
                    <small>Loja virtual</small>
                </div>
                <div>
                    <p>cart</p>
                </div>
        </Container>
    )
}
