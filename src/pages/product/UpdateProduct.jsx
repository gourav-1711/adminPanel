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
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Cloud } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bold, Italic, Underline, Plus } from "lucide-react";

export default function UpdateProduct() {
  const { id } = useParams();

  console.log(id);

  // product form error
  const [productFormError, setProductFormError] = useState({
    productName: "",
    parentCategory: "",
    subCategory: "",
    subSubCategory: "",
    material: "",
    color: "",
    productType: "",
    productDescription: "",
    productImage: "",
    backImage: "",
    galleryImage: "",
    actualPrice: "",
    salePrice: "",
    isBestSelling: "",
    isTopRated: "",
  });

  // product image
  const [ProductImage, setProductImage] = useState(null);
  const [BackImage, setBackImage] = useState(null);
  const [GalleryImage, setGalleryImage] = useState(null);

  // product description
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [fontSize, setFontSize] = useState(16);

  // product description formatting
  const toggleBold = () => setIsBold(!isBold);
  const toggleItalic = () => setIsItalic(!isItalic);
  const toggleUnderline = () => setIsUnderline(!isUnderline);
  const increaseFontSize = () => setFontSize(fontSize + 2);
  const resetFormatting = () => {
    setIsBold(false);
    setIsItalic(false);
    setIsUnderline(false);
    setFontSize(16);
  };

  // product description formatting
  const getTextStyle = () => ({
    fontWeight: isBold ? "bold" : "normal",
    fontStyle: isItalic ? "italic" : "normal",
    textDecoration: isUnderline ? "underline" : "none",
    fontSize: `${fontSize}px`,
  });

  // handle submit
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

    // form error for add product
    if (e.target.productImage.value === "") {
      setProductFormError((prev) => ({
        ...prev,
        productImage: "Product Image is required",
      }));
    }
    if (e.target.backImage.value === "") {
      setProductFormError((prev) => ({
        ...prev,
        backImage: "Back Image is required",
      }));
    }
    if (e.target.galleryImage.value === "") {
      setProductFormError((prev) => ({
        ...prev,
        galleryImage: "Gallery Image is required",
      }));
    }
    if (e.target.productName.value === "") {
      setProductFormError((prev) => ({
        ...prev,
        productName: "Product Name is required",
      }));
    }
    if (e.target.parentCategory.value === "") {
      setProductFormError((prev) => ({
        ...prev,
        parentCategory: "Parent Category is required",
      }));
    }
    if (e.target.color.value === "") {
      setProductFormError((prev) => ({
        ...prev,
        color: "Color is required",
      }));
    }
    if (e.target.productType.value === "") {
      setProductFormError((prev) => ({
        ...prev,
        productType: "Product Type is required",
      }));
    }
    if (e.target.isBestSelling.value === "") {
      setProductFormError((prev) => ({
        ...prev,
        isBestSelling: "Is Best Selling is required",
      }));
    }
    if (e.target.isTopRated.value === "") {
      setProductFormError((prev) => ({
        ...prev,
        isTopRated: "Is Top Rated is required",
      }));
    }
    if (e.target.isUpsell.value === "") {
      setProductFormError((prev) => ({
        ...prev,
        isUpsell: "Is Upsell is required",
      }));
    }
    if (e.target.actualPrice.value === "") {
      setProductFormError((prev) => ({
        ...prev,
        actualPrice: "Actual Price is required",
      }));
    }
    if (e.target.salePrice.value === "") {
      setProductFormError((prev) => ({
        ...prev,
        salePrice: "Sale Price is required",
      }));
    }
    if (e.target.subCategory.value === "") {
      setProductFormError((prev) => ({
        ...prev,
        subCategory: "Sub Category is required",
      }));
    }

    if (e.target.subSubCategory.value === "") {
      setProductFormError((prev) => ({
        ...prev,
        subSubCategory: "Sub Sub Category is required",
      }));
    }
    if (e.target.material.value === "") {
      setProductFormError((prev) => ({
        ...prev,
        material: "Material is required",
      }));
    }
    if (e.target.productDescription.value === "") {
      setProductFormError((prev) => ({
        ...prev,
        productDescription: "Product Description is required",
      }));

      console.log(productFormError.productDescription);
    }
    if (
      e.target.productName.value !== "" &&
      e.target.parentCategory.value !== "" &&
      e.target.subCategory.value !== "" &&
      e.target.subSubCategory.value !== "" &&
      e.target.material.value !== "" &&
      e.target.productDescription.value !== ""
    ) {
      alert("Product added successfully");
      setProductFormError({
        productName: "",
        parentCategory: "",
        subCategory: "",
        subSubCategory: "",
        material: "",
        productDescription: "",
        productImage: "",
        backImage: "",
        galleryImage: "",
        actualPrice: "",
        salePrice: "",
        isBestSelling: "",
        isTopRated: "",
        isUpsell: "",
      });
    }
  };
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold py-2 mb-4">Update Product</h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-[40%_auto] gap-8">
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
                  name="productImage"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  accept="image/*"
                />
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center">
                    <Cloud className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <p className="text-muted-foreground font-medium">
                    Drag and drop
                  </p>
                  {productFormError.productImage && (
                    <p className="text-red-500 text-sm">
                      {productFormError.productImage}
                    </p>
                  )}
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
                  name="backImage"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  accept="image/*"
                />
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center">
                    <Cloud className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <p className="text-muted-foreground font-medium">
                    Drag and drop
                  </p>
                  {productFormError.backImage && (
                    <p className="text-red-500 text-sm">
                      {productFormError.backImage}
                    </p>
                  )}
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
                  name="galleryImage"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  accept="image/*"
                />
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center">
                    <Cloud className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <p className="text-muted-foreground font-medium">
                    Drag and drop
                  </p>
                  {productFormError.galleryImage && (
                    <p className="text-red-500 text-sm">
                      {productFormError.galleryImage}
                    </p>
                  )}
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
                  onChange={(e) =>
                    setProductFormError((prev) => ({
                      ...prev,
                      productName: "",
                    }))
                  }
                />
                {productFormError.productName && (
                  <p className="text-red-500 text-sm">
                    {productFormError.productName}
                  </p>
                )}
              </div>
              <div>
                <Label className="text-base font-medium mb-2 block text-foreground">
                  Select Parent Category
                </Label>
                <Select
                  name="parentCategory"
                  onValueChange={(e) =>
                    setProductFormError((prev) => ({
                      ...prev,
                      parentCategory: "",
                    }))
                  }
                >
                  <SelectTrigger className="h-11">
                    <SelectValue placeholder="Nothing Selected" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="category1">Category 1</SelectItem>
                    <SelectItem value="category2">Category 2</SelectItem>
                  </SelectContent>
                </Select>
                {productFormError.parentCategory && (
                  <p className="text-red-500 text-sm">
                    {productFormError.parentCategory}
                  </p>
                )}
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label className="text-base font-medium mb-2 block text-foreground">
                  Select Sub Category
                </Label>
                <Select
                  name="subCategory"
                  onValueChange={(e) =>
                    setProductFormError((prev) => ({
                      ...prev,
                      subCategory: "",
                    }))
                  }
                >
                  <SelectTrigger className="h-11">
                    <SelectValue placeholder="Select Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sub1">Sub Category 1</SelectItem>
                    <SelectItem value="sub2">Sub Category 2</SelectItem>
                  </SelectContent>
                </Select>
                {productFormError.subCategory && (
                  <p className="text-red-500 text-sm">
                    {productFormError.subCategory}
                  </p>
                )}
              </div>
              <div>
                <Label className="text-base font-medium mb-2 block text-foreground">
                  Select Sub Sub Category
                </Label>
                <Select
                  name="subSubCategory"
                  onValueChange={(e) =>
                    setProductFormError((prev) => ({
                      ...prev,
                      subSubCategory: "",
                    }))
                  }
                >
                  <SelectTrigger className="h-11">
                    <SelectValue placeholder="Nothing Selected" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="subsub1">Sub Sub Category 1</SelectItem>
                    <SelectItem value="subsub2">Sub Sub Category 2</SelectItem>
                  </SelectContent>
                </Select>
                {productFormError.subSubCategory && (
                  <p className="text-red-500 text-sm">
                    {productFormError.subSubCategory}
                  </p>
                )}
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label className="text-base font-medium mb-2 block text-foreground">
                  Select Material
                </Label>
                <Select
                  name="material"
                  onValueChange={(e) =>
                    setProductFormError((prev) => ({
                      ...prev,
                      material: "",
                    }))
                  }
                >
                  <SelectTrigger className="h-11">
                    <SelectValue placeholder="Nothing Selected" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cotton">Cotton</SelectItem>
                    <SelectItem value="polyester">Polyester</SelectItem>
                    <SelectItem value="wool">Wool</SelectItem>
                  </SelectContent>
                </Select>
                {productFormError.material && (
                  <p className="text-red-500 text-sm">
                    {productFormError.material}
                  </p>
                )}
              </div>
              <div>
                <Label className="text-base font-medium mb-2 block text-foreground">
                  Select Color
                </Label>
                <Select
                  name="color"
                  onValueChange={(e) =>
                    setProductFormError((prev) => ({
                      ...prev,
                      color: "",
                    }))
                  }
                >
                  <SelectTrigger className="h-11">
                    <SelectValue placeholder="Nothing Selected" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="red">Red</SelectItem>
                    <SelectItem value="blue">Blue</SelectItem>
                    <SelectItem value="green">Green</SelectItem>
                  </SelectContent>
                </Select>
                {productFormError.color && (
                  <p className="text-red-500 text-sm">
                    {productFormError.color}
                  </p>
                )}
              </div>
            </div>

            {/* Row 4 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label className="text-base font-medium mb-2 block text-foreground">
                  Select Product Type
                </Label>
                <Select
                  name="productType"
                  onValueChange={(e) =>
                    setProductFormError((prev) => ({
                      ...prev,
                      productType: "",
                    }))
                  }
                >
                  <SelectTrigger className="h-11">
                    <SelectValue placeholder="Nothing Selected" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="physical">Physical</SelectItem>
                    <SelectItem value="digital">Digital</SelectItem>
                  </SelectContent>
                </Select>
                {productFormError.productType && (
                  <p className="text-red-500 text-sm">
                    {productFormError.productType}
                  </p>
                )}
              </div>
              <div>
                <Label className="text-base font-medium mb-2 block text-foreground">
                  Is Best Selling
                </Label>
                <Select
                  name="isBestSelling"
                  onValueChange={(e) =>
                    setProductFormError((prev) => ({
                      ...prev,
                      isBestSelling: "",
                    }))
                  }
                >
                  <SelectTrigger className="h-11">
                    <SelectValue placeholder="Nothing Selected" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">Yes</SelectItem>
                    <SelectItem value="no">No</SelectItem>
                  </SelectContent>
                </Select>
                {productFormError.isBestSelling && (
                  <p className="text-red-500 text-sm">
                    {productFormError.isBestSelling}
                  </p>
                )}
              </div>
            </div>

            {/* Row 5 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label className="text-base font-medium mb-2 block text-foreground">
                  Is Top Rated
                </Label>
                <Select
                  name="isTopRated"
                  onValueChange={(e) =>
                    setProductFormError((prev) => ({
                      ...prev,
                      isTopRated: "",
                    }))
                  }
                >
                  <SelectTrigger className="h-11">
                    <SelectValue placeholder="Nothing Selected" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">Yes</SelectItem>
                    <SelectItem value="no">No</SelectItem>
                  </SelectContent>
                </Select>
                {productFormError.isTopRated && (
                  <p className="text-red-500 text-sm">
                    {productFormError.isTopRated}
                  </p>
                )}
              </div>
              <div>
                <Label className="text-base font-medium mb-2 block text-foreground">
                  Is Upsell
                </Label>
                <Select
                  name="isUpsell"
                  onValueChange={(e) =>
                    setProductFormError((prev) => ({
                      ...prev,
                      isUpsell: "",
                    }))
                  }
                >
                  <SelectTrigger className="h-11">
                    <SelectValue placeholder="Nothing Selected" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">Yes</SelectItem>
                    <SelectItem value="no">No</SelectItem>
                  </SelectContent>
                </Select>
                {productFormError.isUpsell && (
                  <p className="text-red-500 text-sm">
                    {productFormError.isUpsell}
                  </p>
                )}
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
                  onChange={(e) =>
                    setProductFormError((prev) => ({
                      ...prev,
                      actualPrice: "",
                    }))
                  }
                />
                {productFormError.actualPrice && (
                  <p className="text-red-500 text-sm">
                    {productFormError.actualPrice}
                  </p>
                )}
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
                  onChange={(e) =>
                    setProductFormError((prev) => ({
                      ...prev,
                      salePrice: "",
                    }))
                  }
                />
                {productFormError.salePrice && (
                  <p className="text-red-500 text-sm">
                    {productFormError.salePrice}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Product Description */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Add Product Description</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Toggle Buttons */}
            <div className="flex flex-wrap gap-2">
              <Button
                variant={isBold ? "default" : "outline"}
                size="sm"
                onClick={toggleBold}
                className="flex items-center gap-2"
              >
                <Bold className="h-4 w-4" />
                Bold
              </Button>

              <Button
                variant={isItalic ? "default" : "outline"}
                size="sm"
                onClick={toggleItalic}
                className="flex items-center gap-2"
              >
                <Italic className="h-4 w-4" />
                Italic
              </Button>

              <Button
                variant={isUnderline ? "default" : "outline"}
                size="sm"
                onClick={toggleUnderline}
                className="flex items-center gap-2"
              >
                <Underline className="h-4 w-4" />
                Underline
              </Button>

              <Button
                variant="outline"
                size="sm"
                onClick={increaseFontSize}
                className="flex items-center gap-2"
                disabled={fontSize >= 32}
              >
                <Plus className="h-4 w-4" />
                Font Size ({fontSize}px)
              </Button>

              <Button variant="secondary" size="sm" onClick={resetFormatting}>
                Reset
              </Button>
            </div>

            {/* Preview Text */}
            {/* <div className="border rounded-lg p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Preview:</p>
              <p style={getTextStyle()} className="transition-all duration-200">
                This is your formatted text. Use the buttons above to change the
                formatting!
              </p>
            </div> */}

            {/* Editable Text Area */}
            <div className="space-y-2">
              <textarea
                className="w-full min-h-[120px] p-3 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-ring"
                style={getTextStyle()}
                name="productDescription"
                placeholder="Enter Your Product Description Here"
                onChange={(e) =>
                  setProductFormError((prev) => ({
                    ...prev,
                    productDescription: "",
                  }))
                }
              />
              <p className="text-red-500 text-sm">
                {productFormError.productDescription}
              </p>
            </div>

            {/* Active Formatting Display */}
            <div className="text-sm text-muted-foreground">
              <p className="font-medium mb-1">Active formatting:</p>
              <div className="flex flex-wrap gap-2">
                {isBold && (
                  <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">
                    Bold
                  </span>
                )}
                {isItalic && (
                  <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">
                    Italic
                  </span>
                )}
                {isUnderline && (
                  <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">
                    Underline
                  </span>
                )}
                {fontSize > 16 && (
                  <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">
                    Font Size: {fontSize}px
                  </span>
                )}
                {!isBold && !isItalic && !isUnderline && fontSize === 16 && (
                  <span className="px-2 py-1 bg-muted rounded text-xs">
                    No formatting applied
                  </span>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-center py-4">
          <Button type="submit">Update Product</Button>
        </div>
      </form>
    </div>
  );
}
