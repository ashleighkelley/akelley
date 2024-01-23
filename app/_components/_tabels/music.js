'use client'
import React from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react";
import {Accordion, AccordionItem} from "@nextui-org/react";

const MusicTable = (albums) => {
console.log(albums);
  const accordionStyling = {
    base: "py-0 w-full",
    title: "text-sm text-blue-grey opacity-50 font-semibold",
    trigger: "px-2 py-0 data-[hover=true]:bg-default-100 rounded-lgflex items-center",
    indicator: "text-orange",
    content: "text-small px-2",
  };

  const columns = [

      {
        key: "artist",
        label: "Artist",
      },
      {
        key: "title",
        label: "Title",
      },
    ];

    return(
    <>
      <Accordion 
        showDivider={false}
        isCompact="true"
        itemClasses={accordionStyling}
      >
        <AccordionItem key="1" aria-label="scrobbles" title="What's she been listening to lately?">
          <Table>
            <TableHeader columns={columns}>
              {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
            </TableHeader>

            <TableBody items={albums.data.album}>
              {(item) => (
                <TableRow key={item.mbid}>
                  
                  <TableCell>{item.artist.name}</TableCell>
                  <TableCell>{item.name}</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </AccordionItem>
      </Accordion>
    </>
    )
}

export default MusicTable;