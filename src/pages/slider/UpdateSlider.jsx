import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Cloud } from "lucide-react";
import { cn } from "@/lib/utils";
import { useParams } from "react-router-dom";

export default function UpdateSlider() {

    const {id} = useParams();
    console.log(id);


  
  const [image, setImage] = useState(null);
  
  const [formError, setFormError] = useState({
    title: "",
    order: "",
    image: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.title.value);
    console.log(e.target.order.value);
    console.log(e.target.image.files[0]);

    if(e.target.title.value === ""){
      setFormError(prev => ({...prev, title: "Title is required"}));
    }
    if(e.target.order.value === ""){
      setFormError(prev => ({...prev, order: "Order is required"}));
    }
    if(e.target.image.files[0] === ""){
      setFormError(prev => ({...prev, image: "Image is required"}));
    }

    if(e.target.title.value !== "" && e.target.order.value !== "" && e.target.image.files[0] !== ""){
      setFormError(prev => ({...prev, title: "", order: "", image: ""}));
      alert("Slider added successfully");
    }

    // setImage(URL.createObjectURL(e.target.image.files[0]));
  };
  return (
    <div>
      <div className="max-w-6xl mx-auto p-6 bg-background min-h-screen">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-8">
          <h1 className="text-2xl font-semibold mb-8">
            Update Slider
          </h1>

          <form action="" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Image Upload Section */}
              <div className="space-y-2">
                <Label className="text-sm font-medium">
                  Choose Image
                </Label>
                <div className={cn(
                  "relative border-2 border-dashed rounded-lg p-12 text-center",
                  "border-muted-foreground/25 bg-muted hover:bg-muted/80",
                  "transition-colors"
                )}>
                    <img src={image} alt="" className="absolute inset-0 w-full h-full" />
                  <input
                    onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))}
                    type="file"
                    name="image"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    accept="image/*"
                  />
                  <div className="flex flex-col items-center space-y-4">
                    <div className="w-16 h-16 bg-muted-foreground/10 rounded-full flex items-center justify-center">
                      <Cloud className="w-8 h-8 text-muted-foreground" />
                    </div>
                    <p className="text-muted-foreground font-medium">Drag and drop</p>
                  </div>
                  {formError.image && <p className="text-red-500">{formError.image}</p>}
                </div>
              </div>

              {/* Form Fields Section */}
              <div className="space-y-6">
                {/* Title Field */}
                <div className="space-y-2">
                  <Label
                    htmlFor="title"
                    className="text-sm font-medium"
                  >
                    Title
                  </Label>
                  <Input
                    id="title"
                    type="text"
                    placeholder="Title"
                    className="w-full"
                    name="title"
                    onChange={(e) => setFormError({...formError, title: ""})}
                  />
                  {formError.title && <p className="text-red-500">{formError.title}</p>}
                </div>

                {/* Order Field */}
                <div className="space-y-2">
                  <Label
                    htmlFor="order"
                    className="text-sm font-medium"
                  >
                    Order
                  </Label>
                  <Input
                    id="order"
                    type="text"
                    placeholder="Order"
                    className="w-full"
                    name="order"
                    onChange={(e) => setFormError({...formError, order: ""})}
                  />
                  {formError.order && <p className="text-red-500">{formError.order}</p>}
                </div>

               
              </div>
            </div>

            {/* Add Category Button */}
            <div className="mt-8">
              <Button type="submit" className="bg-primary hover:bg-primary/90">
                Update Slider
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
