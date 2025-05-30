"use client";

import { Upload } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Cloud } from "lucide-react";

export default function AddProduct() {

  const [ProductImage,setProductImage] = useState(null)
  const [BackImage,setBackImage] = useState(null)
  const [GalleryImage,setGalleryImage] = useState(null)


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.productImage.value);
    console.log(e.target.productName.value);
    console.log(e.target.parentCategory.value);
    console.log(e.target.subCategory.value);
    console.log(e.target.subSubCategory.value);
    console.log(e.target.material.value);
    console.log(e.target.color.value);
    console.log(e.target.productType.value);
    console.log(e.target.isBestSelling.value);
    console.log(e.target.isTopRated.value);
    console.log(e.target.isUpsell.value);
    console.log(e.target.actualPrice.value);
    console.log(e.target.salePrice.value);
    console.log(e.target.productDescription.value);
  };
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Image Uploads */}
          <div className="space-y-6">
            {/* Product Image */}
            <div className="space-y-2">
              <Label className="text-sm font-medium text-foreground">
                Choose Product Image
              </Label>
              <div className="relative border-2 border-dashed rounded-lg p-12 text-center transition-colors border-gray-300 hover:bg-accent bg-accent/10">
                <img
                  src={ProductImage}
                  alt=""
                  className="absolute inset-0 w-full h-full"
                />
                <input
                  onChange={(e) =>
                    setProductImage(URL.createObjectURL(e.target.files[0]))
                  }
                  type="file"
                  name="image"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  accept="image/*"
                />
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center">
                    <Cloud className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <p className="text-muted-foreground font-medium">Drag and drop</p>
                </div>
              </div>
            </div>

            {/* Back Image */}
            <div className="space-y-2">
              <Label className="text-sm font-medium text-foreground">
                Choose Back Image
              </Label>
              <div className="relative border-2 border-dashed rounded-lg p-12 text-center transition-colors border-gray-300 hover:bg-accent bg-accent/10">
                <img
                  src={BackImage}
                  alt=""
                  className="absolute inset-0 w-full h-full"
                />
                <input
                  onChange={(e) =>
                    setBackImage(URL.createObjectURL(e.target.files[0]))
                  }
                  type="file"
                  name="image"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  accept="image/*"
                />
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center">
                    <Cloud className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <p className="text-muted-foreground font-medium">Drag and drop</p>
                </div>
              </div>
            </div>

            {/* Gallery Image */}
            <div className="space-y-2">
              <Label className="text-sm font-medium text-foreground">
                Choose Gallary Image
              </Label>
              <div className="relative border-2 border-dashed rounded-lg p-12 text-center transition-colors border-gray-300 hover:bg-accent bg-accent/10">
                <img
                  src={GalleryImage}
                  alt=""
                  className="absolute inset-0 w-full h-full"
                />
                <input
                  onChange={(e) =>
                    setGalleryImage(URL.createObjectURL(e.target.files[0]))
                  }
                  type="file"
                  name="image"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  accept="image/*"
                />
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center">
                    <Cloud className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <p className="text-muted-foreground font-medium">Drag and drop</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form Fields */}
          <div className="space-y-6">
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label
                  htmlFor="product-name"
                  className="text-base font-medium mb-2 block text-foreground"
                >
                  Product Name
                </Label>
                <Input
                  id="product-name"
                  name="productName"
                  placeholder="Product Name"
                  className="h-11"
                />
              </div>
              <div>
                <Label className="text-base font-medium mb-2 block text-foreground">
                  Select Parent Category
                </Label>
                <Select name="parentCategory">
                  <SelectTrigger className="h-11">
                    <SelectValue placeholder="Nothing Selected" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="category1">Category 1</SelectItem>
                    <SelectItem value="category2">Category 2</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label className="text-base font-medium mb-2 block text-foreground">
                  Select Sub Category
                </Label>
                <Select name="subCategory">
                  <SelectTrigger className="h-11">
                    <SelectValue placeholder="Select Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sub1">Sub Category 1</SelectItem>
                    <SelectItem value="sub2">Sub Category 2</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label className="text-base font-medium mb-2 block text-foreground">
                  Select Sub Sub Category
                </Label>
                <Select name="subSubCategory">
                  <SelectTrigger className="h-11">
                    <SelectValue placeholder="Nothing Selected" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="subsub1">Sub Sub Category 1</SelectItem>
                    <SelectItem value="subsub2">Sub Sub Category 2</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label className="text-base font-medium mb-2 block text-foreground">
                  Select Material
                </Label>
                <Select name="material">
                  <SelectTrigger className="h-11">
                    <SelectValue placeholder="Nothing Selected" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cotton">Cotton</SelectItem>
                    <SelectItem value="polyester">Polyester</SelectItem>
                    <SelectItem value="wool">Wool</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label className="text-base font-medium mb-2 block text-foreground">
                  Select Color
                </Label>
                <Select name="color">
                  <SelectTrigger className="h-11">
                    <SelectValue placeholder="Nothing Selected" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="red">Red</SelectItem>
                    <SelectItem value="blue">Blue</SelectItem>
                    <SelectItem value="green">Green</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Row 4 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label className="text-base font-medium mb-2 block text-foreground">
                  Select Product Type
                </Label>
                <Select name="productType">
                  <SelectTrigger className="h-11">
                    <SelectValue placeholder="Nothing Selected" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="physical">Physical</SelectItem>
                    <SelectItem value="digital">Digital</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label className="text-base font-medium mb-2 block text-foreground">
                  Is Best Selling
                </Label>
                <Select name="isBestSelling">
                  <SelectTrigger className="h-11">
                    <SelectValue placeholder="Nothing Selected" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">Yes</SelectItem>
                    <SelectItem value="no">No</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Row 5 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label className="text-base font-medium mb-2 block text-foreground">
                  Is Top Rated
                </Label>
                <Select name="isTopRated">
                  <SelectTrigger className="h-11">
                    <SelectValue placeholder="Nothing Selected" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">Yes</SelectItem>
                    <SelectItem value="no">No</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label className="text-base font-medium mb-2 block text-foreground">
                  Is Upsell
                </Label>
                <Select name="isUpsell">
                  <SelectTrigger className="h-11">
                    <SelectValue placeholder="Nothing Selected" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">Yes</SelectItem>
                    <SelectItem value="no">No</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Row 6 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label
                  htmlFor="actual-price"
                  className="text-base font-medium mb-2 block text-foreground"
                >
                  Actual Price
                </Label>
                <Input
                  id="actual-price"
                  name="actualPrice"
                  placeholder="Actual Price"
                  className="h-11"
                />
              </div>
              <div>
                <Label
                  htmlFor="sale-price"
                  className="text-base font-medium mb-2 block text-foreground"
                >
                  Sale Price
                </Label>
                <Input
                  id="sale-price"
                  name="salePrice"
                  placeholder="Sale Price"
                  className="h-11"
                />
              </div>
            </div>
          </div>
        </div>
          
          {/* Product Description */}
        <div className="">
          <Label className="text-base font-medium mb-2 block text-foreground">
            Product Description
          </Label>
          <input
            type="text"
            name="productDescription"
            placeholder="Product Description"
            className="w-full h-[100px] rounded-md p-2 bg-background border border-input hover:border-accent focus:border-ring ring-offset-background transition-colors"
          />
        </div>

        <div className="flex justify-center py-4">
          <Button type="submit">Add Product</Button>
        </div>
      </form>
    </div>
  );
}
