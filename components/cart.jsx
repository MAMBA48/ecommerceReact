import { useState } from "react"
import styled from "styled-components"

const BtnArea = styled.div`
        display: flex;
        position: absolute;
        bottom: 1rem;
        height: auto;
        width: 100%;
        align-items: center;
        justify-content: space-around;
        border: 1px solid #000;
`

const Btn = styled.button`
    height: 20px;
    width: 20px;
`

const Cart = () => {
    const [acc, setAcc] = useState(0)

    const more = () => {
        setAcc(acc + 1)
    }
    const less = () => {
        setAcc(acc  - 1)
    }
    
    return(
        <BtnArea>
            <Btn onClick={more}>-</Btn>
            <p>{acc}</p>
            <Btn onClick={less}>+</Btn>
        </BtnArea>
    )
}