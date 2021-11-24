import styled  from "styled-components"

const Container = styled.div`
    height: 30px;
    background-color: teal;
    display: flex;
    color: white;
    align-items: center;
    justify-content: center;
    font-size: 14px;
`

const Announcement = () => {
    return (
        <Container>
            Новая коллекция. ЗИМА'21 - Скидки 15%
        </Container>
    )
}

export default Announcement
