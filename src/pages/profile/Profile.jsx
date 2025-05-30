"use client";

import { useState } from "react";
import { Upload, Phone, Mail, KeyRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Cloud } from "lucide-react";

export default function Profile() {
  const [activeTab, setActiveTab] = useState("edit-profile");
  const [image, setImage] = useState(null);

  // handle submit for edit profile
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.profileImage.value);
    console.log(e.target.name.value);
    console.log(e.target.email.value);
    console.log(e.target.mobile.value);
  };

  // handle submit for change password
  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.currentPassword.value);
    console.log(e.target.newPassword.value);
    console.log(e.target.confirmPassword.value);
  };

  return (
    <div className="min-h-screen bg-background/50 p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="relative">
                  <img
                    src="/vite.svg"
                    alt="Profile"
                    width={120}
                    height={120}
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Admin</h3>
              </div>

              <div className="mt-8">
                <h4 className="text-sm font-medium text-foreground mb-4">
                  Contact Information
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                    <Phone className="w-4 h-4" />
                    <span>1234567890</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                    <Mail className="w-4 h-4" />
                    <span>xyz@gmail.com</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          <Card>
            <CardContent className="p-6">
              <Tabs
                value={activeTab}
                onValueChange={setActiveTab}
                className="w-full"
              >
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger
                    value="edit-profile"
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    Edit Profile
                  </TabsTrigger>
                  <TabsTrigger
                    value="change-password"
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    Change Password
                  </TabsTrigger>
                </TabsList>

                {/* form for edit profile */}
                <TabsContent value="edit-profile" className="space-y-6">
                  <form
                    onSubmit={handleSubmit}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-6"
                  >
                    {/* Choose Image */}
                    <div className="space-y-2">
                      <Label
                        htmlFor="profileImage"
                        className="text-sm font-medium text-foreground/90"
                      >
                        Profile Image
                      </Label>
                      <div className="relative border-2 border-dashed rounded-lg p-12 text-center transition-colors border-muted bg-muted/50 hover:bg-muted">
                        <img
                          src={image}
                          alt=""
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        <input
                          onChange={(e) =>
                            setImage(URL.createObjectURL(e.target.files[0]))
                          }
                          type="file"
                          name="profileImage"
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                          accept="image/*"
                        />
                        <div className="flex flex-col items-center space-y-4">
                          <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center">
                            <Cloud className="w-8 h-8 text-muted-foreground" />
                          </div>
                          <p className="text-muted-foreground font-medium">
                            Drag and drop
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* form for edit profile */}
                    <div className="">
                      {/* Name */}
                      <div className="space-y-2">
                        <Label
                          htmlFor="name"
                          className="text-sm font-medium text-foreground/90"
                        >
                          Name
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Name"
                          className="w-full"
                        />
                      </div>
                      {/* Email */}
                      <div className="space-y-2">
                        <Label
                          htmlFor="email"
                          className="text-sm font-medium text-foreground/90"
                        >
                          Email
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Email"
                          className="w-full"
                        />
                      </div>

                      {/* Mobile Number */}
                      <div className="space-y-2">
                        <Label
                          htmlFor="mobile"
                          className="text-sm font-medium text-foreground/90"
                        >
                          Mobile Number
                        </Label>
                        <Input
                          id="mobile"
                          name="mobile"
                          type="tel"
                          placeholder="Number"
                          className="w-full"
                        />
                      </div>

                      {/* Update Button */}
                      <div className="pt-4">
                        <Button
                          type="submit"
                          className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-2"
                        >
                          Update Profile
                        </Button>
                      </div>
                    </div>
                  </form>
                </TabsContent>

                {/* form for change password */}
                <TabsContent value="change-password" className="space-y-6">
                  <form onSubmit={handlePasswordSubmit} className="space-y-6">
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="currentPassword" className="text-sm font-medium text-foreground/90">
                          Current Password
                        </Label>
                        <Input
                          id="currentPassword"
                          name="currentPassword"
                          type="password"
                        />
                      </div>
                      <div>
                        <Label htmlFor="newPassword" className="text-sm font-medium text-foreground/90">
                          New Password
                        </Label>
                        <Input
                          id="newPassword"
                          name="newPassword"
                          type="password"
                        />
                      </div>
                      <div>
                        <Label htmlFor="confirmPassword" className="text-sm font-medium text-foreground/90">
                          Confirm New Password
                        </Label>
                        <Input
                          id="confirmPassword"
                          name="confirmPassword"
                          type="password"
                        />
                      </div>
                    </div>
                    <Button type="submit" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-2 w-full">
                      <KeyRound className="mr-2 h-4 w-4" />
                      Update Password
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
