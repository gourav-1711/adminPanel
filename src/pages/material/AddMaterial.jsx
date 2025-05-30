import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function AddMaterial() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.materialName.value);
    console.log(e.target.order.value);
  };
  return (
    <div className="p-8 bg-background/50 w-[90%] mx-auto">
      <Card className="mx-auto">
        <CardHeader className="pb-4">
          <CardTitle className="text-2xl font-semibold text-foreground">
            Add Material
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <form onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Label
                htmlFor="materialName"
                className="text-sm font-medium text-foreground/90"
              >
                Material Name
              </Label>
              <Input
                id="materialName"
                name="materialName"
                placeholder="Material Name"
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
            <Button type="submit" className="bg-primary hover:bg-primary/90 mt-2">
              Add Material
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
