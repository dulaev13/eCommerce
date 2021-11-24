import styled from "styled-components"
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons/'
import { sliderItems } from "../data"
import { useState } from 'react';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    // background-color: gray;
    position: relative;
    overflow: hidden;
`
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: transparent;
    // background-color: white;
    border: 1px solid lightgray;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=> props.direction === "left" && "10px"};
    right: ${props=> props.direction === "right" && "10px"};
    margin: auto;
    z-index: 2;
`

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${(props) => props.slideIndex * -100}vw);
`
const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${props => props.bg}
`
const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
    display: flex;
    justify-content: center;
`
const Image = styled.img`
    height: 80%;
`

const InfoContainer = styled.div`
    flex: 1;
    // padding: 50px;
`
const Title = styled.h1`
    font-size: 60px;
`
const Desc = styled.p`
    margin-top: 2px;
    font-size: 30px;
    font-weight: 500;
    letter-spacing: 0px;
`
const Button = styled.button`
    background-color: transparent;
    border: 1px solid lightgray;
    border-radius: 0;
    padding: 10px;
    font-size: 20px;
    cursor: pointer;
    margin-top: 50px;
    transition: 0.5s;
    &:hover {
        background-color: black;
        color: white;
        transition: 0.1s;
    }
`


const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(0); 
    const handleClick = (direction) => {
        if ( direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex -1 : 2)
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex +1 : 0)
        }
    };

    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowLeftOutlined/>
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                
                {sliderItems.map(item => 
                    <Slide bg={item.bg} key={item.id}>
                        <ImgContainer>
                            <Image src={item.img} />
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Desc>{item.desc}</Desc>
                            <Button>В МАГАЗИН</Button>
                        </InfoContainer>
                    </Slide>
                )}
  
            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick("right")}>
                <ArrowRightOutlined/>
            </Arrow>
        </Container>
    )
}

export default Slider
