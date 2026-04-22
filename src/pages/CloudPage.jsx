import React from 'react';
import { motion } from 'framer-motion';
import PageHero from '../components/PageHero';

const CloudPage = () => {
    const cloudServices = [
        {
            title: "AWS Cloud",
            image: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
            description: "At SHNOOR International LLC, we help businesses unlock the full potential of Amazon Web Services (AWS)—the world's most comprehensive and widely adopted cloud platform. Whether you're migrating to the cloud, optimizing existing workloads, or building next-gen applications, our AWS-certified experts deliver secure, scalable, and cost-effective solutions tailored to your business needs."
        },
        {
            title: "Google Cloud",
            image: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg",
            description: "At SHNOOR International LLC, we help businesses leverage the capabilities of Google Cloud Platform (GCP) to achieve agility, scalability, and innovation. Whether you're migrating workloads, building intelligent applications, or optimizing your infrastructure, our Google Cloud experts deliver solutions that are secure, cost-effective, and performant."
        },
        {
            title: "Microsoft Cloud",
            image: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
            description: "At SHNOOR International LLC, we help organizations harness the full potential of Microsoft Azure—one of the world's leading cloud platforms. From infrastructure modernization to advanced analytics and AI integration, we design and implement Azure solutions that align with your business goals, ensuring security, efficiency, and growth."
        }
    ];

    return (
        <div className="cloud-page">
            <PageHero 
                title="Cloud" 
                highlight="Solutions" 
                description="We offer three core categories of cloud services to drive maximum business value: Customer First, Enterprise Management, and Intelligent Enterprise." 
            />

            <section className="section-padding">
                <div className="container">
                    <div style={{ 
                        display: 'grid', 
                        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
                        gap: '40px' 
                    }}>
                        {cloudServices.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="card"
                                style={{ 
                                    background: '#fff', 
                                    borderRadius: '24px', 
                                    overflow: 'hidden', 
                                    display: 'flex',
                                    flexDirection: 'column',
                                    padding: 0
                                }}
                            >
                                <div style={{ 
                                    height: '240px', 
                                    background: '#fdfaff', 
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    justifyContent: 'center',
                                    padding: '50px'
                                }}>
                                    <img src={service.image} alt={service.title} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                                </div>
                                <div style={{ padding: '40px', textAlign: 'center', flex: 1 }}>
                                    <h3 style={{ fontSize: '1.8rem', marginBottom: '20px', color: 'var(--purple-dark)', fontWeight: '800' }}>{service.title}</h3>
                                    <p style={{ color: 'var(--text)', fontSize: '1.05rem', lineHeight: 1.8 }}>
                                        {service.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CloudPage;
