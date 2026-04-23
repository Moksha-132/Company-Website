import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import LogisticsPage from './pages/LogisticsPage';
import ExportPage from './pages/ExportPage';
import CareersPage from './pages/CareersPage';
import ContactPage from './pages/ContactPage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetail from './pages/ServiceDetail';
import CloudPage from './pages/CloudPage';
import EnterprisePage from './pages/EnterprisePage';
import AIPage from './pages/AIPage';
import StaffingPage from './pages/StaffingPage';
import VerificationPage from './pages/VerificationPage';
import NetworkPage from './pages/NetworkPage';
import HealthcarePage from './pages/HealthcarePage';
import ImportExportPage from './pages/ImportExportPage';
import RecruitmentScamsPage from './pages/RecruitmentScamsPage';
import JobOpeningsPage from './pages/JobOpeningsPage';
import ApplicationFormPage from './pages/ApplicationFormPage';
import ProductDetailPage from './pages/ProductDetailPage';
import BlogDetailPage from './pages/BlogDetailPage';

import { Cloud, Globe, Database, Users, ShieldCheck, Network, HeartPulse } from 'lucide-react';

// ScrollToTop component to ensure page starts at top on route change
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

        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
