// import { Button, Input } from "@material-ui/core"
import { Send } from "@material-ui/icons"
import styled from "styled-components"

const Container = styled.div`
    height: 60vh;
    background-color: rgba(192,192,192, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
`
const Title = styled.h1`

`
const Description = styled.div`

`
const InputContainer = styled.div`

`
const Input = styled.input`

`
const Button = styled.button`

`
const Newsletter = () => {
    return (
        <Container>
            <Title>Быстрые оповещения</Title>
            <Description>Получай новости о поступлениях первым!</Description>
            <InputVontainer>
                <Input placeholder="Твоя почта"/>
                <Button>
                    <Send/>
                </Button>
            </InputVontainer>
        </Container>
    )
}

export default Newsletter
