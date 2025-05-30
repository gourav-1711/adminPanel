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


export default function ViewTestimonials() {
  const [filterOpen, setFilterOpen] = useState(false);

  const filter = () => {
    setFilterOpen(!filterOpen);
  };
  return (
    <>
    <div className={`${filterOpen ? "block" : "hidden"} w-full px-2.5 py-2`}>
        <div className="flex justify-between items-center">
          <div className="">Filter</div>
          <div className="">
            <input type="text" className="border-2 border-gray-300 rounded-md p-2" placeholder="Search" />
          </div>
        </div>
      </div>
      <div className="w-full  flex justify-between items-center px-2.5">
        <div className="">View Testimonials</div>
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
            <TableHead>Name</TableHead>
            <TableHead>Image</TableHead>
            <TableHead>Designation</TableHead>
            <TableHead>Rating</TableHead>
            <TableHead>Order</TableHead>
            <TableHead>Message</TableHead>
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
            <TableCell>John Doe</TableCell>
            <TableCell> <img src="/vite.svg" alt="" /></TableCell>
            <TableCell >Software Engineer</TableCell>
            <TableCell >4.5</TableCell>
            <TableCell >1</TableCell>
            <TableCell >Lorem ipsum dolor sit </TableCell>
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
