import React from 'react';
import { motion } from 'framer-motion';

const RecruitmentScamsPage = () => {
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            style={{ backgroundColor: '#fff', color: '#333', minHeight: '100vh', paddingTop: '100px' }}
        >
            {/* Header / Hero */}
            <motion.div 
                initial={{ backgroundColor: '#0c355a' }}
                style={{ backgroundColor: '#0c355a', color: '#fff', padding: '100px 0' }}
            >
                <div className="container">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        style={{ fontSize: '3.5rem', fontWeight: 'bold', marginBottom: '30px', lineHeight: '1.2' }}
                    >
                        Recruitment Scams Awareness – SHNOOR International
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        style={{ fontSize: '1.2rem', lineHeight: '1.8', maxWidth: '900px', opacity: 0.9 }}
                    >
                        At SHNOOR International, we are committed to maintaining the highest standards of transparency, trust, and ethical practices in all our recruitment and consultancy services. Unfortunately, many fraudulent individuals and unauthorized agencies misuse the name of reputed companies to mislead job seekers with fake job offers, fraudulent interviews, and false promises of overseas employment.
                    </motion.p>
                </div>
            </motion.div>

            <div className="container" style={{ padding: '80px 0' }}>
                {/* Section: What Are Recruitment Scams? */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ marginBottom: '80px' }}
                >
                    <h2 style={{ fontSize: '2.8rem', fontWeight: 'bold', marginBottom: '30px', color: '#0c355a' }}>What Are Recruitment Scams?</h2>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#444' }}>
                        Recruitment scams involve fraudulent job advertisements, fake offer letters, or demands for money under the guise of employment opportunities. Scammers may use emails, fake websites, social media platforms, or messaging apps to target job seekers by pretending to represent SHNOOR International.
                    </p>
                </motion.div>

                {/* Section: How to Identify */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ marginBottom: '80px' }}
                >
                    <h2 style={{ fontSize: '2.8rem', fontWeight: 'bold', marginBottom: '30px', color: '#0c355a' }}>How to Identify a Recruitment Scam?</h2>
                    <p style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '20px' }}>Be alert if you notice:</p>
                    <ul style={{ fontSize: '1.1rem', lineHeight: '2', color: '#444', listStyleType: 'disc', paddingLeft: '20px' }}>
                        <li>Requests for money, deposits, or processing fees in exchange for a job.</li>
                        <li>Unofficial communication from personal email accounts (e.g., Gmail, Yahoo, Hotmail) instead of our verified domain.</li>
                        <li>Poorly written offer letters with suspicious formatting or spelling errors.</li>
                        <li>Promises of guaranteed jobs without interviews.</li>
                        <li>Fake websites or social media pages claiming to be SHNOOR International.</li>
                    </ul>
                    <p style={{ marginTop: '20px', fontWeight: 'bold', color: '#0c355a' }}>
                        Important: SHNOOR International never charges job seekers any money for interviews, job applications, or placements.
                    </p>
                </motion.div>

                {/* Section: How We Protect */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ marginBottom: '80px' }}
                >
                    <h2 style={{ fontSize: '2.8rem', fontWeight: 'bold', marginBottom: '30px', color: '#0c355a' }}>How We Protect Job Seekers</h2>
                    <ul style={{ fontSize: '1.1rem', lineHeight: '2', color: '#444', listStyleType: 'disc', paddingLeft: '20px' }}>
                        <li>We conduct all recruitment through our official website and verified communication channels.</li>
                        <li>Offer letters are issued only on our official letterhead and signed by authorized personnel.</li>
                        <li>All job-related communication is shared from our official domain email IDs.</li>
                        <li>We encourage applicants to verify the authenticity of any job offer by contacting us directly.</li>
                    </ul>
                </motion.div>

                {/* Section: How to Stay Safe */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ marginBottom: '80px' }}
                >
                    <h2 style={{ fontSize: '2.8rem', fontWeight: 'bold', marginBottom: '30px', color: '#0c355a' }}>How to Stay Safe</h2>
                    <ol style={{ fontSize: '1.1rem', lineHeight: '2', color: '#444', paddingLeft: '20px' }}>
                        <li>Never share personal or financial details with unknown recruiters.</li>
                        <li>Verify email addresses and websites before responding.</li>
                        <li>Report suspicious activity to SHNOOR International's official contact channels.</li>
                        <li>Always check with our HR Department before accepting any offer.</li>
                    </ol>
                </motion.div>

                {/* Section: Report Fraud */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    style={{ padding: '60px', backgroundColor: '#f8fafc', borderRadius: '15px', border: '1px solid #e2e8f0' }}
                >
                    <h2 style={{ fontSize: '2.8rem', fontWeight: 'bold', marginBottom: '30px', color: '#0c355a' }}>Report Fraud</h2>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#444', marginBottom: '20px' }}>
                        If you suspect a recruitment scam using the name of SHNOOR International, please contact us immediately:
                    </p>
                    <a href="mailto:hr@shnoor.com" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#f59e0b', textDecoration: 'none' }}>
                        hr@shnoor.com
                    </a>
                    <p style={{ marginTop: '30px', fontSize: '1.1rem', fontWeight: 'bold' }}>
                        Together, we can fight recruitment fraud and ensure a safe and transparent job search experience.
                    </p>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default RecruitmentScamsPage;
