'use client'
import Carousel from 'react-multi-carousel';
import {Accordion, AccordionItem} from "@nextui-org/react";
import Image from 'next/image';

const Dogs = () => {
  const accordionStyling = {
    base: "py-0 w-full",
    title: "text-blue-grey opacity-50 font-semibold",
    trigger: "px-2 py-0 data-[hover=true]:bg-default-100 rounded-lgflex",
    indicator: "text-orange",
    content: "text-sm px-2",
  };

  return (
    <Accordion 
      showDivider={false}
      itemClasses={accordionStyling}
    >
      <AccordionItem key="1" aria-label="dogs" title="Release the hounds!">
        <Carousel
          arrows
          centerMode={false}
          className=""
          containerClass="container-with-dots"
          minimumTouchDrag={80}
          renderArrowsWhenDisabled={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3500,
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
          <Image 
            src={`${process.env.NEXT_PUBLIC_BASE_URL}images/IMG_1085.JPEG`}
            width={350}
            height={350}
            alt="Coop at the beach"
          />
          <Image 
            src={`${process.env.NEXT_PUBLIC_BASE_URL}images/IMG_1033.JPEG`}
            width={350}
            height={350}
            alt="Luna at the park"
          />
          <Image 
            src={`${process.env.NEXT_PUBLIC_BASE_URL}images/IMG_2435.JPG`}
            width={350}
            height={350}
            alt="Coop on a hike"
          />
          <Image 
            src={`${process.env.NEXT_PUBLIC_BASE_URL}images/IMG_0845.JPEG`}
            width={350}
            height={350}
            alt="Luna at the beach"
          />
          <Image 
            src={`${process.env.NEXT_PUBLIC_BASE_URL}images/IMG_1116.JPEG`}
            width={350}
            height={350}
            alt="Coop swimming"
          />
          <Image 
            src={`${process.env.NEXT_PUBLIC_BASE_URL}images/IMG_0247.JPEG`}
            width={350}
            height={350}
            alt="Luna on a walk"
          />
          <Image 
            src={`${process.env.NEXT_PUBLIC_BASE_URL}images/IMG_1798.JPG`}
            width={350}
            height={350}
            alt="Baby Coop"
          />
        </Carousel>
      </AccordionItem>
    </Accordion>
  );
};

export default Dogs;