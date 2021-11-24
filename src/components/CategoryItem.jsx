import  styled  from "styled-components"

const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;  
`
const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,128,128, 1);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Title = styled.h1`
    color: white;
    margin-bottom: 30px;
    text-transform: uppercase;
`
const Button = styled.button`
    background-color: transparent;
    border: 1px solid lightgray;
    border-radius: 0;
    padding: 10px;
    font-size: 14px;
    cursor: pointer;
    transition: 0.5s;
    color: white;
    &:hover {
        background-color: white;
        color: black;
        transition: 0.1s;
    }
`


const CategoryItem = ({item}) => {
    return (
        <Container>
            <Image src={item.img}/>
            <Info>
                <Title>
                    {item.title}
                </Title>
                <Button>ОТКРЫТЬ</Button>
            </Info>
        </Container>
    )
}

export default CategoryItem
