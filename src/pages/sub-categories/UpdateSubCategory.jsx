import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Cloud } from "lucide-react";
import { useState } from "react";

export default function UpdateSubCategory() {
  const [formError, setFormError] = useState({
    subCategoryImage: "",
    subCategoryName: "",
    categoryName: "",
    order: "",
  });

  const [image, setImage] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.subCategoryImage.files[0]);
    console.log(e.target.subCategoryName.value);
    console.log(e.target.categoryName.value);
    console.log(e.target.order.value);

    if (e.target.subCategoryImage.value === "") {
      setFormError((prev) => ({
        ...prev,
        subCategoryImage: "Sub Category Image is required",
      }));
    }
    if (e.target.subCategoryName.value === "") {
      setFormError((prev) => ({
        ...prev,
        subCategoryName: "Sub Category Name is required",
      }));
    }
    if (e.target.categoryName.value === "") {
      setFormError((prev) => ({
        ...prev,
        categoryName: "Category Name is required",
      }));
    }
    if (e.target.order.value === "") {
      setFormError((prev) => ({
        ...prev,
        order: "Order is required",
      }));
    }
    if (
      e.target.subCategoryImage.value !== "" &&
      e.target.subCategoryName.value !== "" &&
      e.target.categoryName.value !== "" &&
      e.target.order.value !== ""
    ) {
      alert("Sub Category added successfully");
      setFormError({
        subCategoryImage: "",
        subCategoryName: "",
        categoryName: "",
        order: "",
      });
    }
  };
  return (
    <div className="p-8 bg-background/50 w-[90%] mx-auto">
      <Card className="mx-auto">
        <CardHeader className="pb-4">
          <CardTitle className="text-2xl font-semibold text-foreground">
            Update Sub Category
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <form onSubmit={handleSubmit} className="space-y-6 w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4">
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
                  name="subCategoryImage"
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
                  {formError.subCategoryImage && (
                    <p className="text-red-500 text-sm">
                      {formError.subCategoryImage}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="space-y-2">
                <Label
                  htmlFor="subCategoryName"
                  className="text-sm font-medium text-foreground/90"
                >
                  Sub Category Name
                </Label>
                <Input
                  id="subCategoryName"
                  name="subCategoryName"
                  placeholder="Sub Category Name"
                  className="w-full"
                  onChange={(e) =>
                    setFormError((prev) => ({
                      ...prev,
                      subCategoryName:
                        "",
                    }))
                  }
                />
                {formError.subCategoryName && (
                  <p className="text-red-500 text-sm">
                    {formError.subCategoryName}
                  </p>
                )}
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
                  onChange={(e) =>
                    setFormError((prev) => ({
                      ...prev,
                      categoryName:
                        "",
                    }))
                  }
                />
                {formError.categoryName && (
                  <p className="text-red-500 text-sm">
                    {formError.categoryName}
                  </p>
                )}
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
                  onChange={(e) =>
                    setFormError((prev) => ({
                      ...prev,
                      order: "",
                    }))
                  }
                />
                {formError.order && (
                  <p className="text-red-500 text-sm">{formError.order}</p>
                )}
              </div>
            </div>

            <Button type="submit" className="bg-primary hover:bg-primary/90">
              Update Sub Category
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
