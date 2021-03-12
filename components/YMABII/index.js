import React from 'react';
import styled from 'styled-components';
import Image from 'next/image'
import {MainHeadingNap1, ItemContainer} from '../CommonComponents'

const Container = styled.div`
  text-align: center;
`;
const Item = styled.div`
  padding: 0 15px;
`;

const defaultItem = [{
  src: '/assets/kitchen-ymai.jpg',
  link: '',
  title: 'Kitchen'
},
{
  src: '/assets/kitchen-ymai.jpg',
  link: '',
  title: 'Kitchen'
},
{
  src: '/assets/kitchen-ymai.jpg',
  link: '',
  title: 'Kitchen'
},
{
  src: '/assets/kitchen-ymai.jpg',
  link: '',
  title: 'Kitchen'
}]

function YMABII({items}) {
  return (
    <Container>
      <MainHeadingNap1>You may also be interested in</MainHeadingNap1>
      <ItemContainer>
        {items.map((item, index) => (
          <Item key={index}>
          <Image src={item.src} width={600} height={700} alt="demo" />
          <div className="cta-container">
            <div className="cta-wrapper">
              <a href={item.link} className="ctagap">
                <button className="napBtn napBtn-light-blue napfonts nap-fontsize7  ff-psb  mobile-fontsize5 center-align subtitle-margin-top">
                  {item.title}
                </button>
              </a>
            </div>
          </div>
        </Item>
        ))}
      </ItemContainer>
    </Container>
  )
}

YMABII.defaultProps = {
  items: defaultItem
}

export default YMABII
