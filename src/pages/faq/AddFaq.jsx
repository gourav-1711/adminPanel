import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
export default function AddFaq() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.question.value);
    console.log(e.target.answer.value);
    console.log(e.target.order.value);
  };
  return (
    <div className="p-8 bg-background/50 w-[90%] mx-auto">
      <Card className=" mx-auto">
        <CardHeader className="pb-4">
          <CardTitle className="text-2xl font-semibold text-foreground">
            Add Faq
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <form onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Label
                htmlFor="question"
                className="text-sm font-medium text-foreground/90"
              >
                Question
              </Label>
              <Input
                id="question"
                name="question"
                placeholder="Question"
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="answer"
                className="text-sm font-medium text-foreground/90"
              >
                Answer
              </Label>
              <Textarea
                id="answer"
                name="answer"
                placeholder="Answer"
                rows={6}
                className="max-w-[100%] overflow-hidden w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
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
              Add Faq
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
