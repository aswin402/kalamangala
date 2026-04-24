import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RootLayout } from '@/layouts/RootLayout';
import { HomePage } from '@/pages/HomePage';
import { AboutPage } from '@/pages/AboutPage';
import { ContactPage } from '@/pages/ContactPage';
import { TheWaterfrontPage } from '@/pages/TheWaterfrontPage';
import { AmenitiesPage } from '@/pages/AmenitiesPage';
import { LocationAdvantagePage } from '@/pages/LocationAdvantagePage';
import { ConstructionCompanyPage } from '@/pages/ConstructionCompanyPage';
import { PremiumResidentialPlotsPage } from '@/pages/PremiumResidentialPlotsPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import './App.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'the-waterfront', element: <TheWaterfrontPage /> },
      { path: 'amenities', element: <AmenitiesPage /> },
      { path: 'location-advantage', element: <LocationAdvantagePage /> },
      { path: 'construction-company', element: <ConstructionCompanyPage /> },
      { path: 'residential-plots-coimbatore', element: <PremiumResidentialPlotsPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;



