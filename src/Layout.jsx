import React from 'react'
import { Outlet } from 'react-router-dom'
import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
export default function Layout() {
  return (
    <>
     <div className="[--header-height:calc(theme(spacing.14))]">
          <SidebarProvider className="flex flex-col">
            {/* header */}
            <SiteHeader />
            <div className="flex flex-1">
              <AppSidebar />
              {/* sidebar content */}
              <SidebarInset>
                <div className="flex flex-1 flex-col gap-4 p-2">
                  <div className="min-h-[100vh] flex-1 rounded-xl bg-card text-card-foreground shadow-sm md:min-h-min">
                    <Outlet />
                  </div>
                </div>
              </SidebarInset>
            </div>
          </SidebarProvider>
        </div>
    </>
  )
}
