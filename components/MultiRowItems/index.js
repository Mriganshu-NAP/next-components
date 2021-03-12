import React from 'react';
import styled from 'styled-components';
import Image from 'next/image'

const Container = styled.div`
  margin: 10px;
  display: flex;
  flex-wrap: wrap;
`;
const GridItems = styled.div`
  position: relative;
  margin: 10px;
  flex: 1 1 45%;
`;
const ContentContainer = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  color: #FFF;
  text-align: center;
`;

export const defaultItems = [
  {
    img: '/assets/flooring.jpg',
    caption: <>Explore our full line <br /> of premium Flooring products</>
  },
  {
    img: '/assets/flooring.jpg',
    caption: <>Explore our full line <br /> of premium Flooring products</>
  },
  {
    img: '/assets/flooring.jpg',
    caption: <>Explore our full line <br /> of premium Flooring products</>
  },
  {
    img: '/assets/flooring.jpg',
    caption: <>Explore our full line <br /> of premium Flooring products</>
  }
]

function MultiRowsItems({items}) {
  return (
    <section>
      <Container>
        {items.map((item, index) => 
        <GridItems key={index}>
          <Image src={item.img} width={1200} height={800} alt="nap" />
          {item.caption && <ContentContainer>
            <p className="nap-fontsize10 fc-white ff-psb showInDesktop">{item.caption} <span className="hover-effect">›</span></p>
          </ContentContainer>}
          {/* <Caption text={item.caption} /> */}
        </GridItems>)}
      </Container>
    </section>
  )
}
MultiRowsItems.defaultProps = {
  items: defaultItems
}

export default MultiRowsItems
