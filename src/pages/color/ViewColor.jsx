import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button"
import { Pencil } from "lucide-react";


export default function ViewColor() {
  const [filterOpen, setFilterOpen] = useState(false);

  const filter = () => {
    setFilterOpen(!filterOpen);
  };
  return (
    <>
    <div className={`${filterOpen ? "block" : "hidden"} w-full px-2.5 py-2 bg-background`}>
        <div className="flex justify-between items-center">
          <div className="text-foreground">Filter</div>
          <div className="">
            <input 
              type="text" 
              className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" 
              placeholder="Search" 
            />
          </div>
        </div>
      </div>
      <div className="w-full  flex justify-between items-center px-2.5">
        <div className="">View Color</div>
        <div className="flex justify-evenly gap-10">
          <Button onClick={filter} className="bg-green-500 hover:bg-green-700">
            Filter
          </Button>
          <Button className="bg-blue-500 rounded-3xl hover:bg-blue-700">
            <Pencil />
          </Button>
            </div>
          </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">
              <input
                type="checkbox"
                name="checkbox"
                className=" size-4"
                id=""
              />
            </TableHead>
            <TableHead>Color Name</TableHead>
            <TableHead>Code</TableHead>
            <TableHead>Order</TableHead>
            <TableHead>status</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">
              <input
                type="checkbox"
                name="checkbox"
                className=" size-4"
                id=""
              />
            </TableCell>
            <TableCell>Red</TableCell>
            <TableCell >#ff0000</TableCell>
            <TableCell >1</TableCell>
             <TableCell >
                <Button className="bg-green-500 hover:bg-green-700">
                    Active
                </Button>
             </TableCell>
             <TableCell >
                <Button className="bg-blue-500 rounded-3xl hover:bg-blue-700">
                    <Pencil />
                </Button>
             </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
}
