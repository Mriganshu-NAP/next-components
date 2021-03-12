import React from 'react';
import styled from 'styled-components';
import Image from 'next/image'
import { MainHeadingNap1, ItemContainer} from '../CommonComponents';

const Container = styled.section`
  margin-top: 50px;
  text-align: center;
`;
const RowItem = styled.div`
  margin: 15px;
`;
const gridItems = [{
  img: '/assets/design.jpg',
  itemHeading: "Compatible",
  itemSubHeading: "NewAge Slatwall Accessories are compatible with all NewAge Products Slatwall Systems and most standards 3 in. on-center slatwalls." 
},
{
  img: '/assets/design.jpg',
  itemHeading: "Precision-Fit",
  itemSubHeading: "All accessories easily click-in to safely support your items, allowing you to create a flexible storage area."
},
{
  img: '/assets/design.jpg',
  itemHeading: "Compatible",
  itemSubHeading: "NewAge Slatwall Accessories are compatible with all NewAge Products Slatwall Systems and most standards 3 in. on-center slatwalls." 
}];
function GridRowItems({heading, items}) {

  return (
    <Container>
        <MainHeadingNap1>{heading}</MainHeadingNap1>
        <ItemContainer>
          {items?.map((item, index) => (
            <RowItem key={index}>
              <Image src={item.img} width={500} height={500} alt="newage" />
              <p className="nap-fontsize2 design-heading napfonts mobile-fontsize2">{item.itemHeading}</p>
              <p className="nap-fontsize5 napfonts mobile-fontsize5">{item.itemSubHeading}</p>
          </RowItem>
          ))}
        </ItemContainer>
    </Container>
  )
}
GridRowItems.defaultProps = {
  items: gridItems
}
export default GridRowItems
