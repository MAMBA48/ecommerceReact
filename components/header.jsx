import styled from 'styled-components'

//Container é a estilização pai desse JSX
const Container = styled.header`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 20px;
    height: 80px;
    background: var(--bgColor);
    color: #fff;
    `
const Logo = styled.div`

`

export const Header = () => {

    return (
        <Container>
                <div>
                    <Logo>Arnia</Logo>
                    <small>Loja virtual</small>
                </div>
                <div>
                    <h2>Loja Virtual</h2>
                </div>
        </Container>
    )
}
