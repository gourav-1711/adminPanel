import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";

export default function Order() {
  const [filterOpen, setFilterOpen] = useState(false);

  const filter = () => {
    setFilterOpen(!filterOpen);
  };

  const modal = () => {};
  return (
    <>
      <div className={`${filterOpen ? "block" : "hidden"} w-full px-2.5 py-2`}>
        <div className="flex justify-between items-center">
          <div className="">Filter</div>
          <div className="">
            <input
              type="text"
              className="border-2 border-gray-300 rounded-md p-2"
              placeholder="Search"
            />
          </div>
        </div>
      </div>
      <div className="w-full  flex justify-between items-center px-2.5">
        <div className="">Order List</div>
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
            <TableHead>
              <Button className="bg-red-500 hover:bg-red-700">Delete</Button>
            </TableHead>
            <TableHead>Sr No</TableHead>
            <TableHead>Order ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>View</TableHead>
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
            <TableCell>1</TableCell>
            <TableCell>Frank</TableCell>
            <TableCell>Frank ok</TableCell>
            <TableCell>100</TableCell>
            <TableCell> $1000 </TableCell>
            <TableCell>2025-01-01</TableCell>
            <TableCell>Processing...</TableCell>
            {/* modal here */}
            <TableCell>
              <Dialog>
                <DialogTrigger>
                  <Button className="bg-blue-500 rounded-3xl hover:bg-blue-700">
                    View
                  </Button>
                </DialogTrigger>

                <DialogContent className="w-auto max-h-[90vh] overflow-y-auto p-0">
                  <DialogHeader className="p-6 pb-4 border-b">
                    <div className="flex items-center justify-between">
                      <DialogTitle className="text-xl font-semibold">
                        Product Image's & Price
                      </DialogTitle>
                      <Button variant="ghost" size="icon" className="h-6 w-6">
                       
                      </Button>
                    </div>
                  </DialogHeader>

                  <div className="flex flex-col gap-6 p-6">
                    {/* Left side - Product items */}
                    <div className="flex-1 space-y-6">
                      {/* Product 1 */}
                      <div className="flex gap-4">
                        <div className=" bg-gray-100 rounded-lg  flex-shrink-0">
                          <img
                            src="/placeholder.svg?height=128&width=128"
                            alt="Navy blue t-shirt"
                            width={128}
                            height={128}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 space-y-2">
                          <h3 className="text-red-500 font-medium leading-tight">
                            Men Navy Blue & Off White Typography Printed Pure
                            Cotton T-shirt
                          </h3>
                          <div className="space-y-1 text-sm">
                            <div className="flex">
                              <span className="font-medium w-20">Price :</span>
                              <span>₹ 1500</span>
                            </div>
                            <div className="flex">
                              <span className="font-medium w-20">
                                Quantity :
                              </span>
                              <span>1</span>
                            </div>
                            <div className="flex">
                              <span className="font-medium w-20">Size :</span>
                              <span>XL</span>
                            </div>
                            <div className="flex">
                              <span className="font-medium w-20">Color :</span>
                              <span>Red</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Product 2 */}
                      <div className="flex gap-4">
                        <div className=" bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                          <img
                            src="/placeholder.svg?height=128&width=128"
                            alt="Pink t-shirt"
                            width={128}
                            height={128}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 space-y-2">
                          <h3 className="text-red-500 font-medium leading-tight">
                            Men Navy Blue & Off White Typography Printed Pure
                            Cotton T-shirt
                          </h3>
                          <div className="space-y-1 text-sm">
                            <div className="flex">
                              <span className="font-medium w-20">Price :</span>
                              <span>₹ 1500</span>
                            </div>
                            <div className="flex">
                              <span className="font-medium w-20">
                                Quantity :
                              </span>
                              <span>1</span>
                            </div>
                            <div className="flex">
                              <span className="font-medium w-20">Size :</span>
                              <span>XL</span>
                            </div>
                            <div className="flex">
                              <span className="font-medium w-20">Color :</span>
                              <span>Red</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right side - Product Details and Order Summary */}
                    <div className=" space-y-6">
                      {/* Product Details */}
                      <div>
                        <h3 className="text-lg font-semibold mb-3">
                          Product Details
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          Roshan Chaurasia, First Floor, Laxmi Tower, Bhaskar
                          Circle, Ratanada, PRAYAGRAJ, UTTAR PRADESH 211003
                          India
                        </p>
                      </div>

                      {/* Order Summary */}
                      <div>
                        <h3 className="text-lg font-semibold mb-4">
                          Order Summary
                        </h3>
                        <div className="space-y-3 text-sm">
                          <div className="flex justify-between">
                            <span className="font-medium">Item Subtotal :</span>
                            <span>₹ 3500</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-medium">
                              Cash / Pay on Delivery :
                            </span>
                            <span>₹ 0</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-medium">Shipping :</span>
                            <span>₹ 0</span>
                          </div>
                          <div className="flex justify-between pt-2 border-t font-semibold">
                            <span>Grand Total :</span>
                            <span>₹ 3500</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
}
