'use client'
import React from "react";
import Carousel from 'react-multi-carousel';
import {Accordion, AccordionItem} from "@nextui-org/react";
import Link from 'next/link'
import Image from 'next/image';

const Scrobbles = (albums) => {
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
      <AccordionItem key="1" aria-label="scrobbles" title="What's she been listening to lately?">
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
              items: 6
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
          slidesToSlide={1}
          swipeable
        >
          {albums.data.album.map(({mbid, artist, url, name, image}) => {
            return(
              <Link href={url} key={mbid}>
                <Image 
                  src={image[2]['#text']}
                  width={200}
                  height={200}
                  alt={name}
                />
              </Link>                
            )
          })}
        </Carousel>
      </AccordionItem>
    </Accordion>
  );
};

export default Scrobbles;