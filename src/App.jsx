import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const LogisticsPage = lazy(() => import('./pages/LogisticsPage'));
const ExportPage = lazy(() => import('./pages/ExportPage'));
const CareersPage = lazy(() => import('./pages/CareersPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'));
const CloudPage = lazy(() => import('./pages/CloudPage'));
const EnterprisePage = lazy(() => import('./pages/EnterprisePage'));
const AIPage = lazy(() => import('./pages/AIPage'));
const StaffingPage = lazy(() => import('./pages/StaffingPage'));
const VerificationPage = lazy(() => import('./pages/VerificationPage'));
const NetworkPage = lazy(() => import('./pages/NetworkPage'));
const HealthcarePage = lazy(() => import('./pages/HealthcarePage'));
const ImportExportPage = lazy(() => import('./pages/ImportExportPage'));
const RecruitmentScamsPage = lazy(() => import('./pages/RecruitmentScamsPage'));
const JobOpeningsPage = lazy(() => import('./pages/JobOpeningsPage'));
const ApplicationFormPage = lazy(() => import('./pages/ApplicationFormPage'));
const ProductDetailPage = lazy(() => import('./pages/ProductDetailPage'));
const BlogDetailPage = lazy(() => import('./pages/BlogDetailPage'));
const AdminPage = lazy(() => import('./pages/AdminPage'));

import { Cloud, Globe, Database, Users, ShieldCheck, Network, HeartPulse } from 'lucide-react';
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const serviceData = {
  cloud: {
    title: "Cloud",
    content: "We optimize existing workloads or building next-gen applications. Our experts deliver secure, scalable, and cost-effective solutions tailored to your business needs. We design and implement Azure, AWS, and Google Cloud solutions that align with your business goals, ensuring security, efficiency, and growth.",
    icon: <Cloud size={60} />
  },
  enterprise: {
    title: "Enterprise Management",
    content: "Our Enterprise Management solutions streamline business operations using cutting-edge ERP systems and SAP outsourcing. we empower organizations to innovate faster, operate smarter, and reach new markets with confidence.",
    icon: <Globe size={60} />
  },
  ai: {
    title: "Data & Artificial Intelligence",
    content: "Leverage AI-powered automation and advanced analytics to improve efficiency and decision-making. We provide tailored solutions that transform raw data into strategic insights.",
    icon: <Database size={60} />
  },
  staffing: {
    title: "Consulting & Staffing",
    icon: <Users size={60} />,
    content: "Connecting businesses with specialized IT talent. We focus primarily on IT Consulting & Staffing, IT Product Development, and Application Designing & Development."
  },
  verification: {
    title: "Background verification",
    icon: <ShieldCheck size={60} />,
    content: "Ensuring trust and security through reliable background verification services. We protect your organization with professional screening solutions."
  },
  network: {
    title: "Network Management",
    icon: <Network size={60} />,
    content: "Robust and secure network infrastructure solutions to support your global trade and IT operations seamlessly."
  },
  healthcare: {
    title: "Health Care",
    icon: <HeartPulse size={60} />,
    content: "Tailored IT solutions for the healthcare industry, ensuring data security and operational efficiency for healthcare providers."
  }
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Suspense fallback={<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh', width: '100%' }}>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/logistics" element={<LogisticsPage />} />
            <Route path="/export" element={<ExportPage />} />
            <Route path="/import-and-export" element={<ImportExportPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/services" element={<ServicesPage />} />

            {/* Sub-Service Routes */}
            <Route path="/services/cloud" element={<CloudPage />} />
            <Route path="/services/enterprise" element={<EnterprisePage />} />
            <Route path="/services/ai" element={<AIPage />} />
            <Route path="/services/staffing" element={<StaffingPage />} />
            <Route path="/services/verification" element={<VerificationPage />} />
            <Route path="/services/network" element={<NetworkPage />} />
            <Route path="/services/healthcare" element={<HealthcarePage />} />
            <Route path="/recruitment-scams" element={<RecruitmentScamsPage />} />
            <Route path="/latest-openings" element={<JobOpeningsPage />} />
            <Route path="/apply" element={<ApplicationFormPage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="/blog/:slug" element={<BlogDetailPage />} />
            <Route path="/admin" element={<AdminPage />} />

          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
