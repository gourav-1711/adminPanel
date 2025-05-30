import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Cloud } from "lucide-react";

export default function AddSubSubCategory() {
  const [image, setImage] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.subSubCategoryImage.files[0]);
    console.log(e.target.subCategoryName.value);
    console.log(e.target.categoryName.value);
    console.log(e.target.order.value);
  };
  return (
    <div className="p-8 bg-background/50 w-[90%] mx-auto">
      <Card className="mx-auto">
        <CardHeader className="pb-4">
          <CardTitle className="text-2xl font-semibold text-foreground">
            Add Sub Sub Category
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-10">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Image Upload Section */}
            <div className="space-y-2">
              <Label className="text-sm font-medium text-foreground/90">
                Choose Image
              </Label>
              <div className="relative border-2 border-dashed rounded-lg p-12 text-center transition-colors border-muted bg-muted/50 hover:bg-muted">
                <img
                  src={image}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <input
                  onChange={(e) =>
                    setImage(URL.createObjectURL(e.target.files[0]))
                  }
                  type="file"
                  name="subSubCategoryImage"
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
            <div className="space-y-2">
              <Label
                htmlFor="subCategoryName"
                className="text-sm font-medium text-foreground/90"
              >
                Sub Sub Category Name
              </Label>
              <Input
                id="subCategoryName"
                name="subCategoryName"
                placeholder="Sub Sub Category Name"
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="categoryName"
                className="text-sm font-medium text-foreground/90"
              >
                Sub Category Name
              </Label>
              <Input
                id="subCategoryName"
                name="subCategoryName"
                placeholder="Sub Category Name"
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="categoryName"
                className="text-sm font-medium text-foreground/90"
              >
                Category Name
              </Label>
              <Input
                id="categoryName"
                name="categoryName"
                placeholder="Category Name"
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="order"
                className="text-sm font-medium text-foreground/90"
              >
                Order
              </Label>
              <Input
                id="order"
                name="order"
                placeholder="Order"
                className="w-full"
              />
            </div>

            <Button type="submit" className="mt-4 bg-primary hover:bg-primary/90">
              Add Category
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
