import Carousel from 'react-multi-carousel';

const Dogs = () => {
    return (
        <Carousel
          arrows
          centerMode={false}
          className=""
          containerClass="container"
          draggable
          keyBoardControl
          minimumTouchDrag={80}
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024
              },
              items: 3
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0
              },
              items: 1
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464
              },
              items: 1
            }
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          showDots
          slidesToSlide={1}
          swipeable
        >
          <img
            src={`${process.env.NEXT_PUBLIC_BASE_URL}images/IMG_1085.JPEG`}
            style={{
              display: 'block',
              height: '100%',
              margin: 'auto',
              width: '100%'
            }}
          />
          <img
            src={`${process.env.NEXT_PUBLIC_BASE_URL}images/IMG_1033.JPEG`}
            style={{
              display: 'block',
              height: '100%',
              margin: 'auto',
              width: '100%'
            }}
          />
          <img
            src={`${process.env.NEXT_PUBLIC_BASE_URL}images/IMG_2435.JPG`}
            style={{
              display: 'block',
              height: '100%',
              margin: 'auto',
              width: '100%'
            }}
          />
          <img
            src={`${process.env.NEXT_PUBLIC_BASE_URL}images/IMG_0845.JPEG`}
            style={{
              display: 'block',
              height: '100%',
              margin: 'auto',
              width: '100%'
            }}
          />
          <img
            src={`${process.env.NEXT_PUBLIC_BASE_URL}images/IMG_1116.JPEG`}
            style={{
              display: 'block',
              height: '100%',
              margin: 'auto',
              width: '100%'
            }}
          />
          <img
            src={`${process.env.NEXT_PUBLIC_BASE_URL}images/IMG_0247.JPEG`}
            style={{
              display: 'block',
              height: '100%',
              margin: 'auto',
              width: '100%'
            }}
          />
          <img
            src={`${process.env.NEXT_PUBLIC_BASE_URL}images/IMG_1798.JPG`}
            style={{
              display: 'block',
              height: '100%',
              margin: 'auto',
              width: '100%'
            }}
          />
        </Carousel>
    );
};

export default Dogs;