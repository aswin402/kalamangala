import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootLayout } from "@/layouts/RootLayout";
import {
  HomePage,
  AboutPage,
  ContactPage,
  TheWaterfrontPage,
  AmenitiesPage,
  LocationAdvantagePage,
  ConstructionCompanyPage,
  PremiumResidentialPlotsPage,
  BlogPage,
  BlogPostPage,
  NotFoundPage,
} from "@/pages";
import "./App.css";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "about", element: <AboutPage /> },
        { path: "the-waterfront", element: <TheWaterfrontPage /> },
        { path: "amenities", element: <AmenitiesPage /> },
        { path: "location-advantage", element: <LocationAdvantagePage /> },
        { path: "construction-company", element: <ConstructionCompanyPage /> },
        {
          path: "residential-plots-coimbatore",
          element: <PremiumResidentialPlotsPage />,
        },
        { path: "blog", element: <BlogPage /> },
        { path: "blog/:slug", element: <BlogPostPage /> },
        { path: "contact", element: <ContactPage /> },
        { path: "*", element: <NotFoundPage /> },
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
