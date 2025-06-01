import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { Cloud } from "lucide-react";
import { cn } from "@/lib/utils";

export default function CompanyProfile() {
  const [image, setImage] = useState(null);


  // form error for company profile
  const [companyProfileFormError, setCompanyProfileFormError] = useState({
    companyLogo: "",
    name: "",
    email: "",
    mobile: "",
    address: "",
    mapUrl: "",
  });


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.companyLogo.value);
    console.log(e.target.name.value);
    console.log(e.target.email.value);
    console.log(e.target.mobile.value);
    console.log(e.target.address.value);
    console.log(e.target.mapUrl.value);

    // form error for company profile
    if (e.target.companyLogo.value === "") {
      setCompanyProfileFormError((prev) => ({
        ...prev,
        companyLogo: "Company Logo is required",
      }));
    }
    if (e.target.name.value === "") {
      setCompanyProfileFormError((prev) => ({
        ...prev,
        name: "Name is required",
      }));
    }
    if (e.target.email.value === "") {
      setCompanyProfileFormError((prev) => ({
        ...prev,
        email: "Email is required",
      }));
    }
    if (e.target.mobile.value === "") {
      setCompanyProfileFormError((prev) => ({
        ...prev,
        mobile: "Mobile Number is required",
      }));
    }
    if (e.target.address.value === "") {
      setCompanyProfileFormError((prev) => ({
        ...prev,
        address: "Address is required",
      }));
    }
    if (e.target.mapUrl.value === "") {
      setCompanyProfileFormError((prev) => ({
        ...prev,
        mapUrl: "Google Map URL is required",
      }));
    }
    if (e.target.companyLogo.value !== "" && e.target.name.value !== "" && e.target.email.value !== "" && e.target.mobile.value !== "" && e.target.address.value !== "" && e.target.mapUrl.value !== "") {
      alert("Company Profile updated successfully");
      setCompanyProfileFormError({
        companyLogo: "",
        name: "",
        email: "",
        mobile: "",
        address: "",
        mapUrl: "",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-6xl mx-auto p-6 space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Image Upload Section */}
        <div className="space-y-2">
          <Label htmlFor="companyLogo" className="text-sm font-medium">
            Company Logo
          </Label>
          <div className={cn(
            "relative border-2 border-dashed rounded-lg p-12 text-center transition-colors",
            "border-input bg-background hover:bg-accent hover:text-accent-foreground"
          )}>
            {image && (
              <img
                src={image}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
              />
            )}
            <input
              id="companyLogo"
              onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))}
              type="file"
              name="companyLogo"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              accept="image/*"
            />
            <div className="flex flex-col items-center space-y-4">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center">
                <Cloud className="w-8 h-8 text-muted-foreground" />
              </div>
              <p className="text-muted-foreground font-medium">Drag and drop</p>
            </div>
            {companyProfileFormError.companyLogo && (
              <p className="text-red-500 text-sm">{companyProfileFormError.companyLogo}</p>
            )}
          </div>
        </div>

        {/* Form Fields */}
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" placeholder="Name" onChange={(e) => setCompanyProfileFormError((prev) => ({
              ...prev,
              name: "",
            }))} />
            {companyProfileFormError.name && (
              <p className="text-red-500 text-sm">{companyProfileFormError.name}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              onChange={(e) => setCompanyProfileFormError((prev) => ({
                ...prev,
                email: "",
              }))}
            />
            {companyProfileFormError.email && (
              <p className="text-red-500 text-sm">{companyProfileFormError.email}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="mobile">Mobile Number</Label>
            <Input 
              id="mobile" 
              name="mobile" 
              placeholder="Mobile Number" 
              onChange={(e) => setCompanyProfileFormError((prev) => ({
                ...prev,
                mobile: "",
              }))}
            />
            {companyProfileFormError.mobile && (
              <p className="text-red-500 text-sm">{companyProfileFormError.mobile}</p>
            )}
          </div>
        </div>
      </div>

      {/* Address Field */}
      <div className="space-y-2">
        <Label htmlFor="address">Address</Label>
        <Textarea
          id="address"
          name="address"
          placeholder="Address"
          className="min-h-[80px] resize-none"
          onChange={(e) => setCompanyProfileFormError((prev) => ({
            ...prev,
            address: "",
          }))}
        />
        {companyProfileFormError.address && (
          <p className="text-red-500 text-sm">{companyProfileFormError.address}</p>
        )}
      </div>

      {/* Google Map URL */}
      <div className="space-y-2">
        <Label htmlFor="mapUrl">Google Map URL</Label>
        <Input 
          id="mapUrl" 
          name="mapUrl" 
          placeholder="Google Map URL" 
          onChange={(e) => setCompanyProfileFormError((prev) => ({
            ...prev,
            mapUrl: "",
          }))}
        />
        {companyProfileFormError.mapUrl && (
          <p className="text-red-500 text-sm">{companyProfileFormError.mapUrl}</p>
        )}
      </div>

      {/* Embedded Map */}
      <Card>
        <CardContent className="p-0">
          <div className="relative h-64 bg-muted">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.0123456789!2d73.0243!3d26.2389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDE0JzIwLjAiTiA3M8KwMDEnMjcuNSJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            />
           
          </div>
        </CardContent>
      </Card>

      {/* Update Button */}
      <div className="flex justify-start">
        <Button type="submit" variant="default" size="default">
          Update Company Profile
        </Button>
      </div>
    </form>
  );
}
