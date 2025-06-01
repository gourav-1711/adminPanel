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
import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";
import { Link } from "react-router-dom";
export default function ViewFaq() {
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
        <div className="">View Faq</div>
        <div className="flex justify-evenly gap-10">
          <Button onClick={filter} className="bg-green-500 hover:bg-green-700">
            Filter
          </Button>
          <Button className="bg-blue-500 rounded-3xl hover:bg-blue-700">
            <Pencil />
          </Button>
        </div>
      </div>
      <Table className="w-full ">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] border-2 border-gray-300">
              <input
                type="checkbox"
                name="checkbox"
                className=" size-4"
                id=""
              />
            </TableHead>
            <TableHead className=" border-2 border-gray-300">Question</TableHead>
            <TableHead className=" border-2 border-gray-300">Answer</TableHead>
            <TableHead className=" border-2 border-gray-300">Order</TableHead>
            <TableHead className=" border-2 border-gray-300">status</TableHead>
            <TableHead className=" border-2 border-gray-300">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium border-2 border-gray-300">
              <input
                type="checkbox"
                name="checkbox"
                className=" size-4"
                id=""
              />
            </TableCell>
            <TableCell className=" border-2 border-gray-300">What is Lorem Ipsum?</TableCell>
            <TableCell className=" border-2 border-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</TableCell>
            <TableCell className=" border-2 border-gray-300">1</TableCell>
            <TableCell className=" border-2 border-gray-300">
              <Button className="bg-green-500 hover:bg-green-700">
                Active
              </Button>
            </TableCell>
            <TableCell className=" border-2 border-gray-300">
              <Link to={`/faqs/update/${11}`} className="bg-blue-500 rounded-3xl hover:bg-blue-700">
                <Pencil />
              </Link>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
}
