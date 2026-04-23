import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, ArrowRight } from 'lucide-react';

const ProductDetailPage = () => {
    const { id } = useParams();

    // Product Data (Should match ImportExportPage)
    const products = [
        {
            id: "oats",
            name: "Morning Harvest Whole Grain Oats",
            tagline: "Premium oats for a healthy breakfast",
            description: "Experience the nourishing goodness of Morning Harvest Whole Grain Oats, expertly packed in a convenient resealable pouch to ensure lasting freshness. Perfect for energizing breakfasts or adding hearty nutrition to your favorite recipes, these premium oats are a versatile pantry staple. Enjoy their natural taste and wholesome benefits in every serving. Available in a generous 1kg bag, making it ideal for families and avid oat lovers alike.",
            badge: "Bestseller",
            image: "/oats.png",
            category: "Cereals",
            footerText: "FMCG PRODUCTS - A WIDE RANGE OF ESSENTIAL CONSUMER GOODS MEETING GLOBAL STANDARDS"
        },
        {
            id: "handwash",
            name: "Aqua-Pure Moisturizing Hand Wash",
            tagline: "Gentle protection for your family",
            description: "Aqua-Pure Moisturizing Hand Wash combines advanced cleansing with skin-loving nutrients. Its unique formula removes germs while leaving your hands feeling soft, smooth, and hydrated. Infused with a refreshing fragrance, it provides a spa-like experience every time you wash your hands.",
            badge: "new arrival",
            image: "/handwash.png",
            category: "Personal Care",
            footerText: "PERSONAL CARE - HIGH-QUALITY HYGIENE SOLUTIONS FOR MODERN HOMES"
        },
        {
            id: "plantation",
            name: "Plantation Crops Assortment",
            tagline: "Direct from India's finest estates",
            description: "Discover the rich diversity of India's agricultural heritage with our curated Plantation Crops Assortment. From hand-picked coffee beans to aromatic spices, each product is sourced directly from sustainable estates. We ensure the highest quality standards from farm to table.",
            badge: "hand-crafted",
            image: "/plantation.png",
            category: "Plantation Crops",
            footerText: "PLANTATION CROPS - SUSTAINABLY SOURCED FROM PREMIUM INDIAN ESTATES"
        },
        {
            id: "coconutoil",
            name: "Organic Cold-Pressed Coconut Oil",
            tagline: "Pure, natural, and nutrient-rich",
            description: "Our Organic Cold-Pressed Coconut Oil is extracted from the finest sun-dried coconuts. Without any chemical processing, it retains all its natural nutrients, medium-chain fatty acids, and distinct aroma. Perfect for cooking, skin care, and hair care.",
            badge: "best seller",
            image: "/coconutoil.png",
            category: "Oil",
            footerText: "ORGANIC OILS - 100% PURE AND COLD-PRESSED FOR MAXIMUM NUTRITION"
        },
        {
            id: "cereals",
            name: "Healthy Organic Cereals",
            tagline: "A crunch of health in every bite",
            description: "Start your day with a bowl of health. Our Healthy Organic Cereals are made from non-GMO grains, naturally sweetened, and packed with fiber. They are free from artificial preservatives and colors, making them the perfect choice for health-conscious families.",
            badge: "Best Seller",
            image: "/cereals.png",
            category: "Cereals",
            footerText: "CEREAL PRODUCTS - NUTRITIOUS GRAINS SOURCED FROM ORGANIC FARMS"
        },
        {
            id: "mineraloil",
            name: "Mineral Oil (Food Grade)",
            tagline: "Safe, pure, and multi-purpose",
            description: "Our Food Grade Mineral Oil is highly refined and meets strict international purity standards. It is odorless, tasteless, and safe for contact with food preparation surfaces. Ideal for wood conditioning, machinery lubrication, and industrial applications.",
            badge: "Best Seller",
            image: "/mineraloil.png",
            category: "Oil",
            footerText: "INDUSTRIAL OILS - CERTIFIED FOOD-GRADE SOLUTIONS FOR MULTIPLE INDUSTRIES"
        },
        {
            id: "taro",
            name: "Fresh Taro Root",
            tagline: "Root vegetables at their freshest",
            description: "Our Fresh Taro Root is harvested at peak maturity to ensure the best texture and nutritional value. Rich in fiber, potassium, and vitamins, it is a versatile ingredient for global cuisines. We handle our root vegetables with care to ensure they reach you in perfect condition.",
            badge: "Fresh Arrival",
            image: "/taro root.png",
            category: "Elephant Yam",
            footerText: "VEGETABLE EXPORTS - FARM-FRESH ROOT CROPS FROM PREMIUM SOURCES"
        }
    ];

    const product = products.find(p => p.id === id);

    if (!product) {
        return (
            <div style={{ paddingTop: '150px', textAlign: 'center' }}>
                <h2>Product not found</h2>
                <Link to="/import-and-export">Back to Catalog</Link>
            </div>
        );
    }

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ backgroundColor: '#fff', minHeight: '100vh', paddingTop: '120px', paddingBottom: '100px' }}
        >
            <div className="container">
                <Link to="/import-and-export" style={{ 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    gap: '10px', 
                    color: '#64748b', 
                    textDecoration: 'none', 
                    fontWeight: '700',
                    marginBottom: '40px'
                }}>
                    <ChevronLeft size={20} /> BACK TO CATALOG
                </Link>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }} className="grid-responsive">
                    {/* Left: Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        style={{ background: '#f8fafc', padding: '40px', borderRadius: '40px' }}
                    >
                        <img src={product.image} alt={product.name} style={{ width: '100%', borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} />
                        
                        <div style={{ 
                            marginTop: '40px',
                            background: '#fff', 
                            padding: '25px', 
                            borderRadius: '20px',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                            border: '1px solid #f1f5f9'
                        }}>
                            <h4 style={{ fontSize: '0.8rem', fontWeight: '800', color: '#0f172a', letterSpacing: '1px', margin: 0 }}>{product.footerText}</h4>
                        </div>
                    </motion.div>

                    {/* Right: Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <h1 style={{ fontSize: '3.5rem', fontWeight: '900', color: '#0f172a', marginBottom: '20px', lineHeight: 1.1 }}>
                            {product.name}
                        </h1>
                        <h2 style={{ fontSize: '1.8rem', fontWeight: '700', color: '#f59e0b', marginBottom: '40px' }}>
                            {product.tagline}
                        </h2>
                        
                        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#475569', marginBottom: '50px' }}>
                            {product.description}
                        </p>

                        <Link to="/contact" className="btn-blue" style={{ display: 'inline-flex', padding: '18px 40px', borderRadius: '15px' }}>
                            ENQUIRE NOW <ArrowRight size={20} />
                        </Link>
                    </motion.div>
                </div>
                {/* Related Products Section */}
                <div style={{ marginTop: '120px', borderTop: '1px solid #f1f5f9', paddingTop: '80px' }}>
                    <h3 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#0f172a', marginBottom: '50px' }}>Related <span style={{ color: '#f59e0b' }}>Products</span></h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }} className="grid-responsive-3">
                        {products.filter(p => p.id !== id).slice(0, 3).map(related => (
                            <Link 
                                key={related.id} 
                                to={`/product/${related.id}`}
                                style={{ textDecoration: 'none', color: 'inherit' }}
                            >
                                <motion.div 
                                    whileHover={{ y: -10 }}
                                    style={{ background: '#fff', borderRadius: '25px', overflow: 'hidden', boxShadow: '0 15px 35px rgba(0,0,0,0.05)', border: '1px solid #f1f5f9' }}
                                >
                                    <img src={related.image} alt={related.name} style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
                                    <div style={{ padding: '25px' }}>
                                        <h4 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#0f172a', marginBottom: '10px' }}>{related.name}</h4>
                                        <p style={{ fontSize: '0.9rem', color: '#64748b' }}>{related.category}</p>
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
                .grid-responsive {
                    @media (max-width: 992px) {
                        grid-template-columns: 1fr !important;
                        gap: 40px !important;
                    }
                }
                .grid-responsive-3 {
                    @media (max-width: 992px) {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </motion.div>
    );
};

export default ProductDetailPage;
