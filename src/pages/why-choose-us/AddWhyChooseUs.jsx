import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Cloud } from "lucide-react";

export default function AddWhyChooseUs() {
  const [image, setImage] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.title.value);
    console.log(e.target.order.value);
    console.log(e.target.description.value);
    console.log(e.target.image.files[0]);

    // setImage(URL.createObjectURL(e.target.image.files[0]));
  };
  return (
    <div>
      <div className="max-w-6xl mx-auto p-6 bg-background/50 min-h-screen">
        <div className="bg-card rounded-lg border border-border p-8">
          <h1 className="text-2xl font-semibold text-foreground mb-8">
            Add Why Choose Us
          </h1>

          <form action="" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Image Upload Section */}
              <div className="space-y-2">
                <Label className="text-sm font-medium text-foreground/90">
                  Choose Image
                </Label>
                <div className="relative border-2 border-dashed rounded-lg p-12 text-center transition-colors border-border bg-muted hover:bg-muted/80">
                    <img src={image} alt="" className="absolute inset-0 w-full h-full object-cover" />
                  <input
                    onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))}
                    type="file"
                    name="image"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    accept="image/*"
                  />
                  <div className="flex flex-col items-center space-y-4">
                    <div className="w-16 h-16 bg-muted/70 rounded-full flex items-center justify-center">
                      <Cloud className="w-8 h-8 text-muted-foreground" />
                    </div>
                    <p className="text-muted-foreground font-medium">Drag and drop</p>
                  </div>
                </div>
              </div>

              {/* Form Fields Section */}
              <div className="space-y-6">
                {/* Title Field */}
                <div className="space-y-2">
                  <Label
                    htmlFor="title"
                    className="text-sm font-medium text-foreground/90"
                  >
                    Title
                  </Label>
                  <Input
                    id="title"
                    type="text"
                    placeholder="Title"
                    className="w-full"
                  />
                </div>

                {/* Order Field */}
                <div className="space-y-2">
                  <Label
                    htmlFor="order"
                    className="text-sm font-medium text-foreground/90"
                  >
                    Order
                  </Label>
                  <Input
                    id="order"
                    type="text"
                    placeholder="Order"
                    className="w-full"
                  />
                </div>

                {/* Description Field */}
                <div className="space-y-2">
                  <Label
                    htmlFor="description"
                    className="text-sm font-medium text-foreground/90"
                  >
                    Description
                  </Label>
                  <Textarea
                    id="description"
                    placeholder="Description"
                    rows={6}
                    className="w-full resize-none"
                  />
                </div>
              </div>
            </div>

            {/* Add Category Button */}
            <div className="mt-8">
              <Button type="submit" className="bg-primary hover:bg-primary/90">
                Add Why Choose Us
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
