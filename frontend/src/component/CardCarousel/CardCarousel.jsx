import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CardComp from "../CardComp/CardComp";
import { Box } from "@chakra-ui/react";

const CardCarousel = ({ data }) => {
  return (
    <Box>
      <Carousel
        autoPlaySpeed={4000}
        showDots={false}
        infinite={true}
        transitionDuration={3000}
        autoPlay={true}
        responsive={responsive}
      >
        {data?.map((item) => (
          <CardComp {...item}/>
        ))}
      </Carousel>
    </Box>
  );
};

export default CardCarousel;

export const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1024 },
    items: 3,
    slidesToSlide: 2,
  },
  desktop: {
    breakpoint: { max: 1024, min: 920 },
    items: 2,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 920, min: 464 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};
