import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const newsItems = [
    // Page 1
    [
        {
            title: "SAP MM (Materials Management): A Comprehensive Overview, Features, and Business Benefits",
            desc: "Learn how SAP MM helps businesses manage procurement, inventory, and vendor processes efficiently. Explore features, benefits, integrations, and career opportunities.",
            date: "12/16/2025 · 2 min read",
            image: "https://images.weserv.nl/?url=images.unsplash.com/photo-1553413077-190dd305871c&w=1000"
        },
        {
            title: "Import & Export Solutions for India & UAE: Simplifying Global Trade Operations",
            desc: "Discover reliable import and export solutions for India and UAE. Learn about trade processes, documentation, customs clearance, compliance, and logistics.",
            date: "12/15/2025 · 3 min read",
            image: "https://images.weserv.nl/?url=images.unsplash.com/photo-1524522173746-f628baad3644&w=1000"
        },
        {
            title: "Building Trust and Security Through Reliable Background Verification Services",
            desc: "Protect your organization with our professional background verification solutions. We help you validate candidate credentials and ensure safety and reliability.",
            date: "10/14/2025 · 2 min read",
            image: "https://images.weserv.nl/?url=images.unsplash.com/photo-1454165833767-027ffea9e77b&w=1000"
        }
    ],
    // Page 2
    [
        {
            title: "Understanding the Significance of Background Verification Services",
            desc: "Ensure safe and reliable hiring with our end-to-end background verification services. From employment checks to criminal and address verification.",
            date: "10/13/2025 · 2 min read",
            image: "https://images.weserv.nl/?url=images.unsplash.com/photo-1556740758-90de374c12ad&w=1000"
        },
        {
            title: "Exploring Spatial Computing: The Intersection of Digital and Physical Worlds",
            desc: "Explore how spatial computing and XR technologies are powering the metaverse. See how AR, VR, and MR are revolutionizing industries like healthcare.",
            date: "10/03/2025 · 2 min read",
            image: "https://images.weserv.nl/?url=images.unsplash.com/photo-1622979135225-d2ba269cf1ac&w=1000"
        },
        {
            title: "Exploring Agentic AI and Autonomous Systems: Implications for Industries",
            desc: "Discover how Agentic AI is transforming the future of autonomous systems. Learn the opportunities, challenges, and what lies ahead in building truly intelligent automation.",
            date: "10/03/2025 · 2 min read",
            image: "https://images.weserv.nl/?url=images.unsplash.com/photo-1485827404703-89b55fcc595e&w=1000"
        }
    ],
    // Page 3
    [
        {
            title: "Enhancing Procurement Efficiency: The Benefits of Upgrading SAP MM",
            desc: "This blog focuses on the value of upgrading the SAP MM module to strengthen procurement and inventory operations for better business outcomes.",
            date: "9/26/2025 · 2 min read",
            image: "https://images.weserv.nl/?url=images.unsplash.com/photo-1586769852044-692d6e3703a0&w=1000"
        },
        {
            title: "The Importance of Master Data in SAP MM for Efficient Procurement",
            desc: "Master data is the backbone of SAP MM. Learn how material, vendor, and purchasing records form the foundation of smooth procurement and supply chain operations.",
            date: "9/24/2025 · 2 min read",
            image: "https://images.weserv.nl/?url=images.unsplash.com/photo-1551288049-bebda4e38f71&w=1000"
        },
        {
            title: "Transforming Procurement: The Journey from Manual Processes to Automated Efficiency",
            desc: "See how businesses move from slow, manual procurement to automated efficiency with SAP MM. Learn how digital transformation reduces errors and improves visibility.",
            date: "9/23/2025 · 2 min read",
            image: "https://images.weserv.nl/?url=images.unsplash.com/photo-1460925895917-afdab827c52f&w=1000"
        }
    ],
    // Page 4
    [
        {
            title: "Navigating the Challenges of Rolling Out SAP MM Worldwide",
            desc: "Rolling out SAP MM worldwide isn't easy. From tax regulations to user adoption, explore the key challenges businesses face and strategies for success.",
            date: "9/23/2025 · 2 min read",
            image: "https://images.weserv.nl/?url=images.unsplash.com/photo-1507679799987-c73779587ccf&w=1000"
        },
        {
            title: "Best Practices for Handling Letters of Credit in SAP MM for International Trade",
            desc: "International trade demands accuracy. Discover best practices for handling LC in SAP MM, ensuring compliance and reducing risk in global transactions.",
            date: "9/23/2025 · 2 min read",
            image: "https://images.weserv.nl/?url=images.unsplash.com/photo-1450101499163-c8848c66ca85&w=1000"
        },
        {
            title: "Unlock the Power of SAP MM Reporting: Essential T-Codes for Procurement",
            desc: "Unlock the power of SAP MM reporting. Explore essential T-Codes that help track purchase orders, analyze vendor performance, and monitor stock levels.",
            date: "9/23/2025 · 2 min read",
            image: "https://images.weserv.nl/?url=images.unsplash.com/photo-1551288049-bebda4e38f71&w=1000"
        }
    ],
    // Page 5
    [
        {
            title: "SAP OUTSOURCING WITH SHNOOR",
            desc: "In a fast-paced business environment, efficiency, accuracy, and adaptability are key. Learn how our specialized expertise in SAP can optimize your operations.",
            date: "8/15/2025 · 1 min read",
            image: "https://images.weserv.nl/?url=images.unsplash.com/photo-1504384308090-c894fdcc538d&w=1000"
        },
        {
            title: "IT Consulting at SHNOOR International",
            desc: "Driving Innovation & Efficiency in today's competitive business environment. Our IT consulting services are designed to help you achieve operational excellence.",
            date: "8/15/2025 · 1 min read",
            image: "https://images.weserv.nl/?url=images.unsplash.com/photo-1519389950473-47ba0277781c&w=1000"
        },
        {
            title: "General Trading Got Easier",
            desc: "Our expertise in cross-border trade means smooth operations and transparent processes. SHNOOR International is your bridge to international business growth.",
            date: "8/15/2025 · 1 min read",
            image: "https://images.weserv.nl/?url=images.unsplash.com/photo-1494412574743-019445217683&w=1000"
        }
    ]
];

const News = () => {
    const [currentPage, setCurrentPage] = useState(0);

    const handlePageChange = (index) => {
        if (index >= 0 && index < newsItems.length) {
            setCurrentPage(index);
            const section = document.getElementById('news-section');
            if (section) {
                window.scrollTo({ top: section.offsetTop - 100, behavior: 'smooth' });
            }
        }
    };

    return (
        <section id="news-section" className="section-padding bg-white" style={{ minHeight: '800px' }}>
            <div className="container">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentPage}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.5 }}
                        style={{ 
                            display: 'grid', 
                            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
                            gap: '40px',
                            marginBottom: '60px'
                        }}
                    >
                        {newsItems[currentPage].map((item, index) => (
                            <div
                                key={index}
                                style={{ 
                                    display: 'flex', 
                                    flexDirection: 'column',
                                    background: '#fff'
                                }}
                            >
                                <div style={{ height: '250px', overflow: 'hidden', borderRadius: '5px', marginBottom: '25px' }}>
                                    <img 
                                        src={item.image} 
                                        alt={item.title} 
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        onError={(e) => {
                                            e.target.src = 'https://images.weserv.nl/?url=images.unsplash.com/photo-1460925895917-afdab827c52f&w=1000';
                                        }}
                                    />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                                    <h3 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '20px', color: '#0f172a', lineHeight: '1.3' }}>
                                        {item.title}
                                    </h3>
                                    <p style={{ color: '#64748b', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '25px', flex: 1 }}>
                                        {item.desc}
                                    </p>
                                    <p style={{ fontSize: '0.9rem', color: '#94a3b8', fontWeight: '500' }}>
                                        {item.date}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* Pagination */}
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', marginTop: '40px' }}>
                    <button 
                        onClick={() => handlePageChange(currentPage - 1)}
                        style={{ background: 'none', border: 'none', cursor: 'pointer', color: currentPage === 0 ? '#cbd5e1' : '#64748b' }}
                        disabled={currentPage === 0}
                    >
                        <ChevronLeft size={20} />
                    </button>
                    {newsItems.map((_, index) => (
                        <button 
                            key={index} 
                            onClick={() => handlePageChange(index)}
                            style={{ 
                                background: 'none', 
                                border: 'none', 
                                cursor: 'pointer', 
                                fontSize: '1rem', 
                                fontWeight: currentPage === index ? 'bold' : 'normal',
                                color: currentPage === index ? '#f59e0b' : '#64748b',
                                padding: '5px 10px'
                            }}
                        >
                            {index + 1}
                        </button>
                    ))}
                    <button 
                        onClick={() => handlePageChange(currentPage + 1)}
                        style={{ background: 'none', border: 'none', cursor: 'pointer', color: currentPage === newsItems.length - 1 ? '#cbd5e1' : '#64748b' }}
                        disabled={currentPage === newsItems.length - 1}
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default News;
