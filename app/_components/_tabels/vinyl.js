'use client'
import React from "react";
import {Accordion, AccordionItem} from "@nextui-org/react";

const Vinyl = (records) => {

  const accordionStyling = {
    base: "py-0 w-full",
    title: "text-blue-grey opacity-50 font-semibold",
    trigger: "px-2 py-0 data-[hover=true]:bg-default-100 rounded-lgflex",
    indicator: "text-orange",
    content: "text-sm px-2",
  };

    return(
    <>
      <Accordion 
        showDivider={false}
        isCompact="true"
        itemClasses={accordionStyling}
      >
        <AccordionItem key="1" aria-label="vinyl" title="Show me the vinyl collection!">
          <div className="tableContainer">
            <table className="text-small text-left w-3/4">
              <thead>
                <tr>
                  <th>Artist</th>
                  <th>Album</th>
                  <th>Release Year</th>
                </tr>
              </thead>

              <tbody>
                {records.data.map(({basic_information}) => {
                  return(
                    <tr key={basic_information.id}>
                      <td>
                        {basic_information.artists[0].name}
                      </td>
                      <td>
                        {basic_information.title}
                      </td>
                      <td className="text-blue-grey opacity-50">
                        {basic_information.year}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            </div>
        </AccordionItem>
      </Accordion>
    </>
    )
}

export default Vinyl;