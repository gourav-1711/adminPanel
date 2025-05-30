import * as React from "react";
import {
  BookOpen,
  Bot,
  Command,
  Frame,
  LifeBuoy,
  Map,
  PieChart,
  Send,
  Settings2,
  SquareTerminal,
  User,
  PaintBucket,
  Anvil,
  TableProperties,
  Logs,
  ShieldQuestion,
  SlidersHorizontal,
  Globe,
  Star,  
  RectangleEllipsis, 
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  
} from "@/components/ui/sidebar";


const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: Frame,
    },
    {
      title: "User",
      url: "/User",
      icon: User,

      items: [
        {
          title: "View User",
          url: "/user",
        },

      ]
    },
    {
      title: "Enquiry",
      url: "",
      icon: SquareTerminal,
     
      items: [
        {
          title: "Contact Enquiries",
          url: "/enquiry",
        },
        {
          title: "Newsletters",
          url: "/newsletter",
        },
      ],
    },
    {
      title: "Colors",
       isActive: true,
      url: "",
      icon: PaintBucket,
      items: [
        {
          title: "Add Colors",
          url: "/color/add",
        },
        {
          title: "View Colors",
          url: "color/view",
        },
      ],
    },
    {
      title: "Materials",
      url: "",
      icon: Anvil,
      items: [
        {
          title: "Add Materials",
          url: "material/add",
        },
        {
          title: "View Materials",
          url: "material/view",
        },
      ],
    },
    {
      title: "Parent Categories",
      url: "",
      icon: Settings2,
      items: [
        {
          title: "Add Parent Category",
          url: "/category/add",
        },
        {
          title: "View Parent Categories",
          url: "/category/view",
        },
      ],
    },
    {
      title: "Sub Categories",
      url: "",
      icon: Settings2,
      items: [
        {
          title: "add Sub Category",
          url: "/category/sub-category/add",
        },
        {
          title: "View Sub Categories",
          url: "/category/sub-category/view",
        },
      ],
    },
    {
      title: "Sub Sub Categories",
      url: "",
      icon: Settings2,
      items: [
        {
          title: "Add Sub Sub Category",
          url: "/category/sub-sub-category/add",
        },
        {
          title: "View Sub Sub Categories",
          url: "/category/sub-sub-category/view",
        },
      ],
    },
    {
      title: "Products",
      url: "",
      icon: TableProperties,
      items: [
        {
          title: "Add Products",
          url: "/products/add",
        },
        {
          title: "View Products",
          url: "/products/view",
        },
      ],
    },
    {
      title: "Why Choose Us",
      url: "",
      icon: ShieldQuestion,
      items: [
        {
          title: "Add Why Choose Us",
          url: "/why-choose-us/add",
        },
        {
          title: "View Why Choose Us",
          url: "/why-choose-us/view",
        },
      ],
    },
    {
      title: "Order",
      url: "",
      icon: Logs,
      items: [
        {
          title: "Orders",
          url: "/order",
        },
        
      ],
    },
    {
      title: "Slider",
      url: "",
      icon: SlidersHorizontal,
      items: [
        {
          title: "Add Slider",
          url: "/slider/add",
        },
        {
          title: "View Slider",
          url: "/slider/view",
        },
      ],
    },
    {
      title: "Country",
      url: "",
      icon: Globe,
      items: [
        {
          title: "Add Country",
          url: "/country/add",
        },
        {
          title: "View Country",
          url: "/country/view",
        },
      ],
    },
    {
      title: "Testimonials",
      url: "",
      icon: Star,
      items: [
        {
          title: "Add Testimonial",
          url: "/testimonials/add",
        },
        {
          title: "View Testimonials",
          url: "/testimonials/view",
        },
      ],
    },
    {
      title: "Faqs",
      url: "",
      icon: RectangleEllipsis,
      items: [
        {
          title: "Add Faq",
          url: "/faqs/add",
        },
        {
          title: "View Faqs",
          url: "/faqs/view",
        },
      ],
    },
    {
      title: "Terms & Conditions",
      url: "",
      icon: Settings2,
      items: [
        
      ],
    },
  ],
  // navSecondary: [
  //   {
  //     title: "Support",
  //     url: "",
  //     icon: LifeBuoy,
  //   },
  //   {
  //     title: "Feedback",
  //     url: "",
  //     icon: Send,
  //   },
  // ],
  // projects: [
  //   {
  //     name: "Design Engineering",
  //     url: "",
  //     icon: Frame,
  //   },
  //   {
  //     name: "Sales & Marketing",
  //     url: "",
  //     icon: PieChart,
  //   },
  //   {
  //     name: "Travel",
  //     url: "",
  //     icon: Map,
  //   },
  // ],
};

export function AppSidebar({
  ...props
}) {
  return (
    <Sidebar
      className="top-(--header-height) h-[calc(100svh-var(--header-height))]!"
      {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="">
                <div
                  className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">WS Cube</span>
                  <span className="truncate text-xs">Enterprise</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="scroll-bar-hide">
        <NavMain items={data.navMain} />
        {/* <NavProjects projects={data.projects} />
        <NavSecondary items={data.navSecondary} className="mt-auto" /> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
