import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const ExportPage = () => {
    const services = [
        {
            title: "Product Sourcing & Procurement",
            image: "/sourcing.png",
            description: "With our deep understanding of global markets and complex supply chains, we offer complete management of your procurement process. This includes everything from identifying and qualifying reliable sources, to negotiating the best terms and ensuring quality and consistency.",
            color: "#e2e8f0"
        },
        {
            title: "International Shipping & Logistics",
            image: "https://images.weserv.nl/?url=images.unsplash.com/photo-1494412519320-aa613dfb7738&w=800",
            description: "At SHNOOR International LLC, we make global trade simple by delivering reliable, efficient, and cost-effective international shipping & logistics solutions. From India to markets across the UAE, Bahrain, Qatar, Oman, Malaysia, and beyond, we ensure your products reach their destination on time and in perfect condition.",
            color: "#f8fafc"
        },
        {
            title: "Quality Control & Compliances",
            image: "https://images.weserv.nl/?url=images.unsplash.com/photo-1581091226825-a6a2a5aee158&w=800",
            description: "Our Quality Control & Compliance services ensure every product we source, export, or import meets international standards and client expectations. We work with certified inspection agencies, follow stringent testing procedures, and handle all legal and regulatory documentation for a smooth cross-border trade experience.",
            color: "#f1f5f9"
        }
    ];

    const tradeSolutions = [
        "Product Sourcing & Procurement",
        "International Shipping & Logistics",
        "Quality Control & Compliance",
        "Market Expansion Support",
        "Customized Export Strategies"
    ];

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            style={{ backgroundColor: '#fff', color: '#333', minHeight: '100vh', paddingTop: '100px' }}
        >
            {/* Header Section */}
            <div style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', padding: '100px 0', textAlign: 'center', color: '#fff' }}>
                <div className="container">
                    <motion.h1 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        style={{ fontSize: '4rem', fontWeight: '900', marginBottom: '30px' }}
                    >
                        What we do
                    </motion.h1>
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        style={{ maxWidth: '900px', margin: '0 auto' }}
                    >
                        <h2 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#f59e0b', marginBottom: '20px' }}>Connecting Markets. Driving Growth.</h2>
                        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', fontWeight: '500' }}>
                            At <strong>SHNOOR International LLC</strong>, we bridge markets by delivering high-quality products from India to global destinations including the United Arab Emirates, Bahrain, Qatar, Oman, and Malaysia. Our import and export services are built on trust, transparency, and timely delivery, ensuring seamless cross-border trade.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Services Grid */}
            <div className="container" style={{ marginTop: '-60px', paddingBottom: '100px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }} className="grid-responsive">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            style={{ 
                                backgroundColor: '#fff', 
                                borderRadius: '20px', 
                                overflow: 'hidden', 
                                boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
                                display: 'flex',
                                flexDirection: 'column'
                            }}
                        >
                            <img src={service.image} alt={service.title} style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
                            <div style={{ padding: '40px', textAlign: 'center', flexGrow: 1 }}>
                                <h3 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#0f172a', marginBottom: '20px' }}>{service.title}</h3>
                                <p style={{ color: '#64748b', lineHeight: '1.8', fontSize: '1rem' }}>{service.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Quote Section */}
            <div style={{ backgroundColor: '#f8fafc', padding: '120px 0' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <motion.h2 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        style={{ fontSize: '3.5rem', fontWeight: '900', color: '#0f172a', marginBottom: '50px' }}
                    >
                        "From India to the world, Seamlessly"
                    </motion.h2>
                    
                    <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'left' }}>
                        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#334155', marginBottom: '30px' }}>
                            At <strong>SHNOOR International LLC</strong>, we bridge markets by delivering high-quality products from India to global destinations including the United Arab Emirates, Bahrain, Qatar, Oman, and Malaysia. Our import and export services are built on trust, transparency, and timely delivery, ensuring seamless cross-border trade.
                        </p>
                        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#334155', marginBottom: '40px' }}>
                            We specialize in sourcing, packaging, and shipping a wide range of products while complying with international trade standards. With a strong network of suppliers, logistics partners, and compliance experts, we make global trade simple, reliable, and profitable for our clients.
                        </p>

                        <h4 style={{ fontSize: '1.3rem', fontWeight: '800', color: '#0f172a', marginBottom: '25px' }}>Our Trade Solutions Include:</h4>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '15px', marginBottom: '50px' }}>
                            {tradeSolutions.map((item, i) => (
                                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                    <CheckCircle size={20} color="#f59e0b" />
                                    <span style={{ fontSize: '1.1rem', color: '#475569', fontWeight: '600' }}>{item}</span>
                                </div>
                            ))}
                        </div>

                        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#334155', marginBottom: '40px' }}>
                            Whether you're looking to export premium products from India or import goods into growing markets, SHNOOR International is your trusted partner in global trade.
                        </p>

                        <h3 style={{ fontSize: '1.5rem', fontWeight: '900', color: '#0f172a', marginTop: '60px' }}>Connecting Markets. Driving Growth.</h3>
                    </div>
                </div>
            </div>

            <style>{`
                .grid-responsive {
                    @media (max-width: 992px) {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </motion.div>
    );
};

export default ExportPage;
