import React, {useState, useEffect, useRef} from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import AliceCarousel from 'react-alice-carousel';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import 'react-alice-carousel/lib/alice-carousel.css';
import BannerContent from '../BannerContent';

const Container = styled.div`
  position: relative;
`;
const ArrowRight = styled(ArrowForwardIcon)`
  position: absolute;
  top: 45%;
  right: 30px;
  cursor: pointer;
  color: ${props => props.arrow};
  &.MuiSvgIcon-root{
    font-size: 40px;
  }
`;
const ArrowLeft = styled(ArrowBackIcon)`
  position: absolute;
  top: 45%;
  left: 30px;
  cursor: pointer;
  color: ${props => props.arrow};
  &.MuiSvgIcon-root{
    font-size: 40px;
  }
`;

export const imageProps = [
  {
    img: '/assets/slider.jpg',
    heading: "Just a simple heading",
    subHeading: "Another simple sub heading",
    buttons: ["Buy Now"]
  },
  {
    img: '/assets/slider.jpg',
    heading: "Just a simple heading",
    subHeading: "Another simple sub heading",
    buttons: ["Buy Now"]
  },
  {
    img: '/assets/slider.jpg',
    heading: "Just a simple heading",
    subHeading: "Another simple sub heading",
    buttons: ["Buy Now"]
  },
  {
    img: '/assets/slider.jpg',
    heading: "Just a simple heading",
    subHeading: "Another simple sub heading",
    buttons: ["Buy Now"]
  }
]

const BannerSlider = ({dots, arrows, arrowsColor, items, activeSlide}) => {
  const [bannerItems, setBannerItems] = useState([]);
  const sliderRef = useRef(null)
 
  useEffect(() => {
    const temp = [];
    items.forEach(item => (temp.push(
      <Container>
        <Image src={item.img} width={1920} height={720} layout="responsive" alt="demo" />
        {item.heading && 
        <BannerContent
          heading={item.heading}
          subHeading={item.subHeading}
          align={item.align}
          custom={item.custom}
          buttons={item.buttons}
          contentColor={item.contentColor}
          alignContent={item.alignContent}
        />}
      </Container>)));
    setBannerItems(temp);
  }, []);

  return(
    <AliceCarousel
      activeIndex={activeSlide && activeSlide - 1}
      disableDotsControls={!dots}
      disableButtonsControls={!arrows}
      infinite={true}
      mouseTracking={true}
      touchMoveDefaultEvents={false}
      items={bannerItems}
      ref={sliderRef}
      renderPrevButton={() => <ArrowLeft arrow={arrowsColor} />}
      renderNextButton={() => <ArrowRight arrow={arrowsColor} />}
    />
  );
}

BannerSlider.defaultProps = {
  dots: false,
  arrows: false,
  arrowsColor: 'black',
  items: imageProps,
  handleSlide: null
}

export default BannerSlider;