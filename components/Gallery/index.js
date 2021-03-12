import React, {useState} from 'react';
import Image from 'next/image'
import styled from 'styled-components';
import Modal from '@material-ui/core/Modal';
import BannerSlider from '../BannerSlider';

const Container = styled.div`
  width: 100%;
  display: flex;
`;
const RowItems = styled.div`
  text-align: center;
  margin: 15px;
`;
const StyledImage = styled(Image)`
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover{
    ${props => props.zoom && `transform: scale(1.1);`}
  }
`;
const ImageContainer = styled.div`
  position: relative;
  margin-top: 30px;
  height: ${props => props.height === '100%' ? `calc( ${props.height} - 10px)` : `calc( ${props.height} - 20px)`};

  overflow: hidden;
`;
const CaptionContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background: #000000c7;
`;
const Text = styled.p`
  margin: 25px 0;
  color: #fff;
`;
const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  &:focus{
    outline: none;
  }
`;

export const rows = [
  [
    {
      id: 1,
      img: '/assets/clg-1.jpg',
      title: 'Bikes and Sports Equipment',
      height: '100%'
    }
  ],
  [
    {
      id: 2,
      img: '/assets/clg-2.jpg',
      title: 'Small Tool Storage',
      height: '40%'
    },
    {
      id: 3,
      img: '/assets/clg-3.jpg',
      title: 'Golf Bags and Gear',
      height: '60%'
    }
  ],
  [
    {
      id: 4,
      img: '/assets/clg-4.jpg',
      title: 'Ladders and Bulky Items',
      height: '60%'
    },
    {
      id: 5,
      img: '/assets/clg-5.jpg',
      title: 'Small Item Storage',
      height: '40%'
    }
  ]
]

export const modalItems = [
  {
    id: 1,
    img: '/assets/collage/clg-1'
  },
  {
    id: 2,
    img: '/assets/collage/clg-2'
  },
  {
    id: 3,
    img: '/assets/collage/clg-3'
  },
  {
    id: 4,
    img: '/assets/collage/clg-4'
  },
  {
    id: 5,
    img: '/assets/collage/clg-5'
  }
];

const Caption = (text) => {
  return(
    <CaptionContainer>
      <Text>{text}</Text>
    </CaptionContainer>
  )
}

function Gallery({caption, showPopUp, zoomOnHover, items, popUpItems}) {
  const [modal, setModal] = useState(false);
  const [active, setActive] = useState(null);

  const handleClick = id => {
    setActive(id);
    setModal(true);
  }

  return (
    <Container>
      {items.map((row, index) => (
        <RowItems key={index}>
          {row.map((item) => (
            <ImageContainer key={item.id} height={item.height} onClick={() => handleClick(item.id)}>
              <Image src={item.img} width={800} height={800} />
              {caption && Caption(item.title)}
            </ImageContainer>
          ))}
        </RowItems>
      ))}
      {showPopUp && <Modal
        open={modal}
        onClose={() => setModal(false)}
        disableAutoFocus={true}
      >
        <ModalContainer>
          <BannerSlider items={popUpItems} arrows activeSlide={active}  />
        </ModalContainer>
      </Modal>}
    </Container>
  )
}

Gallery.defaultProps = {
  caption: false,
  showPopUp: false,
  zoomOnHover: false,
  items: rows,
  popUpItems: modalItems
}

export default Gallery;
