import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout.jsx";
import Dashbard from "./Dashbard.jsx";
import AddColor from "./pages/color/AddColor.jsx";
import AddMaterial from "./pages/material/AddMaterial.jsx";
import ViewColor from "./pages/color/ViewColor.jsx";
import ViewMaterial from "./pages/material/ViewMaterial.jsx";
import ViewCategory from "./pages/categories/ViewCategory.jsx";
import AddCategory from "./pages/categories/AddCategory.jsx";
import AddSubCategory from "./pages/sub-categories/AddSubCategory.jsx";
import ViewSubCategory from "./pages/sub-categories/ViewSubCategory.jsx";
import Users from "./pages/user/Users.jsx";
import Enquiry from "./pages/enquiry/Enquiry.jsx";
import Newsletters from "./pages/enquiry/Newsletters.jsx";
import Order from "./pages/orders/Order.jsx";
import AddProduct from "./pages/product/AddProduct.jsx";
import ViewProduct from "./pages/product/ViewProduct.jsx";
import AddSubSubCategory from "./pages/sub-sub-categories/AddSubSubCategory.jsx";
import ViewSubSubCategory from "./pages/sub-sub-categories/ViewSubSubCategory.jsx";
import AddWhyChooseUs from "./pages/why-choose-us/AddWhyChooseUs.jsx";
import ViewWhyChooseUs from "./pages/why-choose-us/ViewWhyChooseUs.jsx";
import AddSlider from "./pages/slider/AddSlider.jsx";
import ViewSlider from "./pages/slider/ViewSlider.jsx";
import AddCountry from "./pages/country/AddCountry.jsx";
import ViewCountry from "./pages/country/ViewCountry.jsx";
import AddTestimonials from "./pages/testimonials/AddTestimonials.jsx";
import ViewTestimonials from "./pages/testimonials/ViewTestimonials.jsx";
import AddFaq from "./pages/faq/AddFaq.jsx";
import ViewFaq from "./pages/faq/ViewFaq.jsx";
import Profile from "./pages/profile/Profile.jsx";
import CompanyProfile from "./pages/CompanyProfile/CompanyProfile.jsx";
import UpdateColor from "./pages/color/UpdateColor.jsx";
import UpdateProduct from "./pages/product/UpdateProduct.jsx";
import UpdateMaterial from "./pages/material/UpdateMaterial.jsx";
import UpdateCategories from "./pages/categories/UpdateCategories.jsx";
import UpdateSubCategory from "./pages/sub-categories/UpdateSubCategory.jsx";
import UpdateSubSubCategory from "./pages/sub-sub-categories/UpdateSubSubCategory.jsx";
import UpdateWhyChooseUs from "./pages/why-choose-us/UpdateWhyChooseUs.jsx";
import UpdateSlider from "./pages/slider/UpdateSlider.jsx";
import UpdateCountry from "./pages/country/UpdateCountry.jsx";
import UpdateTestimonials from "./pages/testimonials/UpdateTestimonials.jsx";
import UpdateFaq from "./pages/faq/UpdateFaq.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="/" element={<Layout />}>
          <Route path="dashboard" element={<Dashbard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="company-profile" element={<CompanyProfile />} />

          <Route path="color">
            <Route path="add" element={<AddColor />} />
            <Route path="update/:id?" element={<UpdateColor />} />
            <Route path="view" element={<ViewColor />} />
          </Route>

          <Route path="material">
            <Route path="add" element={<AddMaterial />} />
            <Route path="update/:id?" element={<UpdateMaterial />} />
            <Route path="view" element={<ViewMaterial />} />
          </Route>

          <Route path="category">
            <Route path="add" element={<AddCategory />}></Route>
            <Route path="update/:id?" element={<UpdateCategories />} />
            <Route path="view" element={<ViewCategory />}></Route>
          </Route>

          <Route path="category/sub-category">
            <Route path="add" element={<AddSubCategory />}></Route>
            <Route path="update/:id?" element={<UpdateSubCategory />} />
            <Route path="view" element={<ViewSubCategory />}></Route>
          </Route>


          <Route path="category/sub-sub-category">
            <Route path="add" element={<AddSubSubCategory />}></Route>
            <Route path="update/:id?" element={<UpdateSubSubCategory />} />
            <Route path="view" element={<ViewSubSubCategory />}></Route>
          </Route>

          <Route path="why-choose-us">
            <Route path="add" element={<AddWhyChooseUs />}></Route>
            <Route path="update/:id?" element={<UpdateWhyChooseUs />} />
            <Route path="view" element={<ViewWhyChooseUs />}></Route>
          </Route>

          <Route path="products">
            <Route path="add" element={<AddProduct />}></Route>
            <Route path="update/:id?" element={<UpdateProduct />} />
            <Route path="view" element={<ViewProduct />}></Route>
          </Route>

          <Route path="slider">
            <Route path="add" element={<AddSlider />}></Route>
            <Route path="update/:id?" element={<UpdateSlider />} />
            <Route path="view" element={<ViewSlider />}></Route>
          </Route>

          <Route path="country">
            <Route path="add" element={<AddCountry />}></Route>
            <Route path="update/:id?" element={<UpdateCountry />} />
            <Route path="view" element={<ViewCountry />}></Route>
          </Route>

          <Route path="/user" element={<Users />} />
          <Route path="/enquiry" element={<Enquiry />} />
          <Route path="/newsletter" element={<Newsletters />} />
          <Route path="/order" element={<Order />} />

          <Route path="testimonials">
            <Route path="add" element={<AddTestimonials />}></Route>
            <Route path="update/:id?" element={<UpdateTestimonials />} />
            <Route path="view" element={<ViewTestimonials />}></Route>
          </Route>

          <Route path="faqs">
            <Route path="add" element={<AddFaq />}></Route>
            <Route path="update/:id?" element={<UpdateFaq />} />
            <Route path="view" element={<ViewFaq />}></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
