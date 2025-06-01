import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Cloud } from "lucide-react";
import { useParams } from "react-router-dom";

export default function UpdateCategory() {
  const { id } = useParams();


  const [formError, setFormError] = useState({
    categoryName: "",
    order: "",
    categoryImage: "",
  });
  const [image, setImage] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.categoryName.value);
    console.log(e.target.order.value);
    console.log(e.target.categoryImage.files[0]);

    if(e.target.categoryName.value === ""){
      setFormError((prev) => ({
        ...prev,
        categoryName: "Category Name is required",
      }));
    }   
    if(e.target.order.value === ""){    
      setFormError((prev) => ({
        ...prev,
        order: "Order is required",
      }));
    }   
    if(e.target.categoryImage.value === ""){
      setFormError((prev) => ({
        ...prev,
        categoryImage: "Category Image is required",
      }));
    }
    if(e.target.categoryName.value !== "" && e.target.order.value !== "" && e.target.categoryImage.value !== ""){
      alert("Category updated successfully");
      setFormError({
        categoryName: "",
        order: "",
        categoryImage: "",
      });
    }
  };
  return (
    <div className="p-8 bg-background/50 w-[90%] mx-auto">
      <Card className="mx-auto">
        <CardHeader className="pb-4">
          <CardTitle className="text-2xl font-semibold text-foreground">
            Update Category
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 ">
          <form onSubmit={handleSubmit} className="space-y-6 grid grid-cols-1 md:grid-cols-2 gap-6 ">
            {/* Image Upload Section */}
            <div className="space-y-2">
              <Label className="text-sm font-medium text-foreground/90">
                Choose Image
              </Label>
              <div className="relative border-2 border-dashed rounded-lg p-12 text-center transition-colors border-border bg-muted hover:bg-muted/80">
                <img
                  src={image}
                  alt=""
                  className="absolute inset-0 w-full h-full "
                />
                <input
                  onChange={(e) =>
                    setImage(URL.createObjectURL(e.target.files[0]))
                  }
                  type="file"
                  name="categoryImage"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  accept="image/*"
                />
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-16 h-16 bg-muted/70 rounded-full flex items-center justify-center">
                    <Cloud className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <p className="text-muted-foreground font-medium">
                    Drag and drop
                  </p>
                  {formError.categoryImage && (
                    <p className="text-red-500 text-sm">{formError.categoryImage}</p>
                  )}
                </div>
              </div>
            </div>

            <div className="space-y-2">
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
                  onChange={(e) => setFormError((prev) => ({
                    ...prev,
                    categoryName: "",
                  }))}
                />
                {formError.categoryName && (
                  <p className="text-red-500 text-sm">{formError.categoryName}</p>
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
                  onChange={(e) => setFormError((prev) => ({
                    ...prev,
                    order: "",
                  }))}
                />
                {formError.order && (
                  <p className="text-red-500 text-sm">{formError.order}</p>
                )}
              </div>
            </div>

            <Button
              type="submit"
              className="bg-primary hover:bg-primary/90 mt-2"
            >
              Update Category
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
