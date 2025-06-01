"use client";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

export default function UpdateColor() {

  const { id } = useParams();

  console.log(id);

  // form error for add color
  const [colorFormError, setColorFormError] = useState({
    colorName: "",
    colorHex: "",
    order: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.colorName.value);
    console.log(e.target.colorHex.value);
    console.log(e.target.order.value);

    // form error for add color
    if (e.target.colorName.value === "") {
      setColorFormError((prev) => ({
        ...prev,
        colorName: "Color Name is required",
      }));
    }
    else{
      setColorFormError((prev) => ({
        ...prev,
        colorName: "",
      }));
    }
    if (e.target.colorHex.value === "") {
      setColorFormError((prev) => ({
        ...prev,
        colorHex: "Color Hex is required",
      }));
    }
    else{
      setColorFormError((prev) => ({
        ...prev,
        colorHex: "",
      }));
    }
    if (e.target.order.value === "") {
      setColorFormError((prev) => ({
        ...prev,
        order: "Order is required",
      }));
    }
    else{
      setColorFormError((prev) => ({
        ...prev,
        order: "",
      }));
    }
    if (e.target.colorName.value !== "" && e.target.colorHex.value !== "" && e.target.order.value !== "") {
      alert("Color added successfully");
      setColorFormError({
        colorName: "",
        colorHex: "",
        order: "",
      });
    }
  };

  return (
    <div className="w-[90%] mx-auto mt-10 p-6 bg-card rounded-xl shadow-sm border border-border space-y-6">
      <h2 className="text-xl font-semibold text-foreground">Add Colors</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label className="text-sm font-medium text-foreground/90">Color Name</Label>
          <Input
            type="text"
            name="colorName"
            placeholder="Enter color name"
            onChange={(e)=> setColorFormError((prev) => ({
              ...prev,
              colorName: "",
            }))}
          />
          {colorFormError.colorName && (
            <p className="text-red-500 text-sm">{colorFormError.colorName}</p>
          )}
        </div>

        <div>
          <Label className="text-sm font-medium text-foreground/90">Color Picker</Label>
          <input
            type="color"
            name="colorHex"
            className="w-16 h-10 p-0 border border-input rounded-md cursor-pointer"
            onChange={(e)=> setColorFormError((prev) => ({
              ...prev,
              colorHex: "",
            }))}
          />
          {colorFormError.colorHex && (
            <p className="text-red-500 text-sm">{colorFormError.colorHex}</p>
          )}
        </div>

        <div>
          <Label className="text-sm font-medium text-foreground/90">Order</Label>
          <Input
            type="number"
            min={1}
            name="order"
            placeholder="Enter order"
            onChange={(e)=> setColorFormError((prev) => ({
              ...prev,
              order: "",
            }))}
          />
          {colorFormError.order && (
            <p className="text-red-500 text-sm">{colorFormError.order}</p>
          )}
        </div>

        <Button type="submit" className="bg-primary hover:bg-primary/90">
          Update
        </Button>
      </form>
    </div>
  );
};


