"use client";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function AddColor() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.colorName.value);
    console.log(e.target.colorHex.value);
    console.log(e.target.order.value);
  }

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
          />
        </div>

        <div>
          <Label className="text-sm font-medium text-foreground/90">Color Picker</Label>
          <input
            type="color"
            name="colorHex"
            className="w-16 h-10 p-0 border border-input rounded-md cursor-pointer"
          />
        </div>

        <div>
          <Label className="text-sm font-medium text-foreground/90">Order</Label>
          <Input
            type="number"
            min={1}
            name="order"
            placeholder="Enter order"
          />
        </div>

        <Button type="submit" className="bg-primary hover:bg-primary/90">
          Submit
        </Button>
      </form>
    </div>
  );
};


