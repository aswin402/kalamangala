import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootLayout } from "@/layouts/RootLayout";
import { AdminLayout } from "@/layouts/AdminLayout";
import { AdminRoute } from "@/components/auth/AdminRoute";
import {
  HomePageSkeleton,
  AboutPageSkeleton,
  ContactPageSkeleton,
  WaterfrontPageSkeleton,
  ProjectPageSkeleton,
  LocationPageSkeleton,
  BlogPageSkeleton,
  BlogPostPageSkeleton,
} from "@/components/skeletons/PageSkeletons";
import "./App.css";

/* ── Lazy-loaded pages ────────────────────────────── */
const HomePage = lazy(() =>
  import("@/pages/home/HomePage").then((m) => ({ default: m.HomePage }))
);
const AboutPage = lazy(() =>
  import("@/pages/about/AboutPage").then((m) => ({ default: m.AboutPage }))
);
const ContactPage = lazy(() =>
  import("@/pages/contact/ContactPage").then((m) => ({ default: m.ContactPage }))
);
const TheWaterfrontPage = lazy(() =>
  import("@/pages/projects/waterfront/TheWaterfrontPage").then((m) => ({
    default: m.TheWaterfrontPage,
  }))
);
const AmenitiesPage = lazy(() =>
  import("@/pages/projects/amenities/AmenitiesPage").then((m) => ({
    default: m.AmenitiesPage,
  }))
);
const ConstructionCompanyPage = lazy(() =>
  import("@/pages/projects/construction/ConstructionCompanyPage").then((m) => ({
    default: m.ConstructionCompanyPage,
  }))
);
const PremiumResidentialPlotsPage = lazy(() =>
  import("@/pages/projects/premium-plots/PremiumResidentialPlotsPage").then(
    (m) => ({ default: m.PremiumResidentialPlotsPage })
  )
);
const TiruchengodeContractorsPage = lazy(() =>
  import("@/pages/projects/tiruchengode-contractors/TiruchengodeContractorsPage").then(
    (m) => ({ default: m.TiruchengodeContractorsPage })
  )
);
const KarurRealEstatePage = lazy(() =>
  import("@/pages/projects/karur-real-estate/KarurRealEstatePage").then(
    (m) => ({ default: m.KarurRealEstatePage })
  )
);
const TiruppurVillaPage = lazy(() =>
  import("@/pages/projects/tiruppur-villa/TiruppurVillaPage").then(
    (m) => ({ default: m.TiruppurVillaPage })
  )
);
const LocationAdvantagePage = lazy(() =>
  import("@/pages/location/LocationAdvantagePage").then((m) => ({
    default: m.LocationAdvantagePage,
  }))
);
const BlogPage = lazy(() =>
  import("@/pages/blog/BlogPage").then((m) => ({ default: m.BlogPage }))
);
const BlogPostPage = lazy(() =>
  import("@/pages/blog/post/BlogPostPage").then((m) => ({
    default: m.BlogPostPage,
  }))
);
const NotFoundPage = lazy(() =>
  import("@/pages/error/NotFoundPage").then((m) => ({
    default: m.NotFoundPage,
  }))
);
const AdminLoginPage = lazy(() =>
  import("@/pages/admin/login").then((m) => ({ default: m.AdminLoginPage }))
);
const AdminDashboardPage = lazy(() =>
  import("@/pages/admin/dashboard").then((m) => ({
    default: m.AdminDashboardPage,
  }))
);

/* ── Helper: wrap element with Suspense ───────────── */
function withSkeleton(element: React.ReactNode, fallback: React.ReactNode) {
  return <Suspense fallback={fallback}>{element}</Suspense>;
}

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: withSkeleton(<HomePage />, <HomePageSkeleton />),
        },
        {
          path: "about",
          element: withSkeleton(<AboutPage />, <AboutPageSkeleton />),
        },
        {
          path: "the-waterfront",
          element: withSkeleton(
            <TheWaterfrontPage />,
            <WaterfrontPageSkeleton />
          ),
        },
        {
          path: "amenities",
          element: withSkeleton(<AmenitiesPage />, <ProjectPageSkeleton />),
        },
        {
          path: "location-advantage",
          element: withSkeleton(
            <LocationAdvantagePage />,
            <LocationPageSkeleton />
          ),
        },
        {
          path: "construction-company",
          element: withSkeleton(
            <ConstructionCompanyPage />,
            <ProjectPageSkeleton />
          ),
        },
        {
          path: "residential-plots-coimbatore",
          element: withSkeleton(
            <PremiumResidentialPlotsPage />,
            <ProjectPageSkeleton />
          ),
        },
        {
          path: "top-real-estate-contractors-in-tiruchengode",
          element: withSkeleton(
            <TiruchengodeContractorsPage />,
            <ProjectPageSkeleton />
          ),
        },
        {
          path: "real-estate-karur",
          element: withSkeleton(
            <KarurRealEstatePage />,
            <ProjectPageSkeleton />
          ),
        },
        {
          path: "tiruppur-villa-gated-community-plots",
          element: withSkeleton(
            <TiruppurVillaPage />,
            <ProjectPageSkeleton />
          ),
        },
        {
          path: "blog",
          element: withSkeleton(<BlogPage />, <BlogPageSkeleton />),
        },
        {
          path: "blog/:slug",
          element: withSkeleton(<BlogPostPage />, <BlogPostPageSkeleton />),
        },
        {
          path: "contact",
          element: withSkeleton(<ContactPage />, <ContactPageSkeleton />),
        },
        { path: "*", element: <Suspense><NotFoundPage /></Suspense> },
      ],
    },
    {
      path: "/admin-kalamangala",
      element: <Suspense><AdminLoginPage /></Suspense>,
    },
    {
      path: "/admin-dashboard",
      element: (
        <AdminRoute>
          <AdminLayout>
            <Suspense>
              <AdminDashboardPage />
            </Suspense>
          </AdminLayout>
        </AdminRoute>
      ),
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
