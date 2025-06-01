import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useParams } from "react-router-dom";
export default function UpdateFaq() {

    const {id} = useParams();
    console.log(id);

  const [formError, setFormError] = useState({
    question: "",
    answer: "",
    order: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.question.value);
    console.log(e.target.answer.value);
    console.log(e.target.order.value);

    if(e.target.question.value === ""){
      setFormError(prev => ({...prev, question: "Question is required"}));
    }
    if(e.target.answer.value === ""){
      setFormError(prev => ({...prev, answer: "Answer is required"}));
    }
    if(e.target.order.value === ""){
      setFormError(prev => ({...prev, order: "Order is required"}));
    }

    if(e.target.question.value !== "" && e.target.answer.value !== "" && e.target.order.value !== ""){
      setFormError(prev => ({...prev, question: "", answer: "", order: ""}));
    }

    if(e.target.question.value !== "" && e.target.answer.value !== "" && e.target.order.value !== ""){
      setFormError(prev => ({...prev, question: "", answer: "", order: ""}));
      alert("Faq updated successfully");
    }

  };
  return (
    <div className="p-8 bg-background/50 w-[90%] mx-auto">
      <Card className=" mx-auto">
        <CardHeader className="pb-4">
          <CardTitle className="text-2xl font-semibold text-foreground">
            Update Faq
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
                onChange={(e) => setFormError({...formError, question: ""})}
              />
              {formError.question && <p className="text-red-500">{formError.question}</p>}
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
                onChange={(e) => setFormError({...formError, answer: ""})}
              />
              {formError.answer && <p className="text-red-500">{formError.answer}</p>}
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
                onChange={(e) => setFormError({...formError, order: ""})}
              />
              {formError.order && <p className="text-red-500">{formError.order}</p>}
            </div>
            <Button type="submit" className="bg-primary hover:bg-primary/90 mt-2">
              Update Faq
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
