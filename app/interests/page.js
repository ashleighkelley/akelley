'use client'
import Navigation from "./../_components/_navigation/navbar"
import Dogs from "./../_components/_carousels/dogs"
import Head from 'next/head'
import {Accordion, AccordionItem} from "@nextui-org/react";

export default function Interests() {
  const accordionStyling = {
    base: "py-0 w-full",
    title: "text-sm text-blue-grey opacity-50 font-semibold",
    trigger: "px-2 py-0 data-[hover=true]:bg-default-100 rounded-lgflex items-center",
    indicator: "text-orange",
    content: "text-small px-2",
  };

  const defaultContent =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return(
    <>
      <Navigation/>
      <div className="text-blue-grey mx-10 my-5 items-center">
        <Head>
          <title>Interests</title>
        </Head>

        <div className="">
          <p>Ashleigh has a profound passion for music, encompassing a diverse range of interests within the realm. Since her teenage years she has dabbled in electric and acoustic guitar, appreciating even the technical aspects of pickup installation and hand-wiring of custom guitar pedals. Additionally, she enjoys attending live shows and collecting memorabilia such as tour posters and vinyl records. During her college years, Ashleigh further immersed herself in the musical world by taking on the role of DJ and music director of the student-run radio station, sharing her eclectic taste and fostering a sense of community through the airwaves.</p>
        </div>

        <div>
          <Accordion 
            showDivider={false}
            isCompact="true"
            itemClasses={accordionStyling}
          >
            <AccordionItem key="1" aria-label="scrobbles" title="What's she been listening to lately?">
              {defaultContent}
            </AccordionItem>
            <AccordionItem key="2" aria-label="vinyl" title="Show me the vinyl collection!">
              {defaultContent}
            </AccordionItem>
          </Accordion>
        </div>

        <div className="pt-5">
          <p>Ashleigh has two rescue dogs - Cooper (adopted 2014) and Luna (adopted 2022) and loves taking them on walks, hikes, and trips to the beach.</p>
        </div>
        <div>
          <Accordion 
              showDivider={false}
              itemClasses={accordionStyling}
            >
              <AccordionItem key="1" aria-label="dogs" title="Release the hounds!">
                <Dogs/>
              </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  );
  }
  