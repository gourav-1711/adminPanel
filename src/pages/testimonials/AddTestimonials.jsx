import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Cloud } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";

export default function AddTestimonials() {
  const [image, setImage] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(e.target.designation.value);
    console.log(e.target.rating.value);
    console.log(e.target.order.value);
    console.log(e.target.message.value);
    console.log(e.target.image.files[0]);
    // setImage(URL.createObjectURL(e.target.image.files[0]));
  };
  return (
    <div>
      <div className="max-w-6xl mx-auto p-6 bg-background/50 min-h-screen">
        <div className="bg-card rounded-lg border border-border p-8">
          <h1 className="text-2xl font-semibold text-foreground mb-8">
            Add Testimonials
          </h1>

          <form action="" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Image Upload Section */}
              <div className="space-y-2">
                <Label className="text-sm font-medium text-foreground/90">
                  Choose Image
                </Label>
                <div className="relative border-2 border-dashed rounded-lg p-12 text-center transition-colors border-border bg-muted hover:bg-muted/80">
                  <img
                    src={image}
                    alt=""
                    className="absolute inset-0 w-full h-full"
                  />
                  <input
                    onChange={(e) =>
                      setImage(URL.createObjectURL(e.target.files[0]))
                    }
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
                    htmlFor="name"
                    className="text-sm font-medium text-foreground/90"
                  >
                    Name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Name"
                    className="w-full"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="designation"
                    className="text-sm font-medium text-foreground/90"
                  >
                    Designation
                  </Label>
                  <Input
                    id="designation"
                    type="text"
                    placeholder="Designation"
                    className="w-full"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="rating"
                    className="text-sm font-medium text-foreground/90"
                  >
                    Rating
                  </Label>
                  <Input
                    id="rating"
                    type="text"
                    placeholder="Rating"
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
                    htmlFor="message"
                    className="text-sm font-medium text-foreground/90"
                  >
                    Message 
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Message"
                    rows={6}
                    className="w-full resize-none"
                  />
                </div>
              </div>
            </div>

            {/* Add Category Button */}
            <div className="mt-8">
              <Button
                type="submit"
                className="bg-primary hover:bg-primary/90"
              >
                Add Testimonials
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
