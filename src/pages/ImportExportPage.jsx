import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, ChevronDown, Package, ShieldCheck, Zap, ArrowRight, Star } from 'lucide-react';

const ImportExportPage = () => {
    const [activeCategory, setActiveCategory] = useState('All products');
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;

    const categories = [
        'All products', 'Cereals', 'Coconut Delights', 'Elephant Yam', 
        'FMCG Products', 'Oil', 'Personal Care', 'Plantation Crops'
    ];

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

    const filteredProducts = products.filter(p => {
        const matchesCategory = activeCategory === 'All products' || p.category === activeCategory;
        const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                             p.tagline.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

    const handleCategoryChange = (cat) => {
        setActiveCategory(cat);
        setCurrentPage(1);
    };

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            style={{ backgroundColor: '#fff', color: '#333', minHeight: '100vh', paddingTop: '100px' }}
        >
            {/* Hero Section */}
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '80px', alignItems: 'center', padding: '80px 0' }} className="grid-responsive">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h1 style={{ fontSize: '3.5rem', fontWeight: '800', color: '#0f172a', marginBottom: '30px', lineHeight: 1.1 }}>
                            Authentic Agri-Food & <br />Consumer Goods <span style={{ color: '#f59e0b' }}>Delivered</span>
                        </h1>
                        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#64748b', marginBottom: '30px' }}>
                            SHNOOR International LLC is a dynamic organization bridging the worlds of technology and trade. With expertise spanning IT Consulting & Staffing, IT Product Development, and global import and export, we connect India with the UAE, Bahrain, Qatar, Oman, and Malaysia—delivering quality products and building lasting partnerships.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        style={{ position: 'relative' }}
                    >
                        <div style={{ 
                            borderRadius: '250px 250px 0 0', 
                            overflow: 'hidden',
                            boxShadow: '0 30px 60px rgba(0,0,0,0.1)',
                            aspectRatio: '1/1'
                        }}>
                            <img 
                                src="/banner-natural.png" 
                                alt="Agri Products" 
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                            />
                        </div>
                        <div style={{ 
                            position: 'absolute', 
                            bottom: '20px', 
                            left: '50%',
                            transform: 'translateX(-50%)',
                            background: '#fff', 
                            padding: '15px 30px', 
                            borderRadius: '30px',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                            textAlign: 'center',
                            minWidth: '280px'
                        }}>
                            <h3 style={{ fontSize: '0.9rem', fontWeight: '800', color: '#0f172a', letterSpacing: '2px' }}>AUTHENTIC AGRI-FOOD & CONSUMER GOODS</h3>
                            <p style={{ fontSize: '0.7rem', color: '#64748b', fontWeight: '700' }}>DELIVERED WORLDWIDE</p>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Product Explorer Section */}
            <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '80px', paddingBottom: '120px' }}>
                <div className="container grid-responsive" style={{ display: 'grid', gridTemplateColumns: '250px 1fr', gap: '60px' }}>
                    {/* Sidebar */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                        <div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '30px', color: '#0f172a' }}>Browse by</h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                                {categories.map((cat) => (
                                    <button 
                                        key={cat}
                                        onClick={() => handleCategoryChange(cat)}
                                        style={{ 
                                            textAlign: 'left', 
                                            background: 'none', 
                                            border: 'none', 
                                            fontSize: '1rem', 
                                            color: activeCategory === cat ? '#f59e0b' : '#64748b',
                                            fontWeight: activeCategory === cat ? '700' : '500',
                                            cursor: 'pointer',
                                            transition: '0.2s',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '10px'
                                        }}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Content Area */}
                    <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }} className="grid-responsive">
                            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#0f172a' }}>All products</h2>
                            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }} className="grid-responsive">
                                <div style={{ position: 'relative' }}>
                                    <Search size={20} style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
                                    <input 
                                        type="text" 
                                        placeholder="Search products" 
                                        value={searchQuery}
                                        onChange={(e) => {
                                            setSearchQuery(e.target.value);
                                            setCurrentPage(1);
                                        }}
                                        style={{ padding: '12px 20px 12px 45px', borderRadius: '30px', border: '1px solid #e2e8f0', width: '300px' }} 
                                    />
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#64748b' }}>
                                    <span>Sort by:</span>
                                    <select style={{ border: '1px solid #e2e8f0', borderRadius: '5px', padding: '8px 15px', background: '#fff' }}>
                                        <option>Default</option>
                                        <option>Price: Low to High</option>
                                        <option>Price: High to Low</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <p style={{ color: '#94a3b8', marginBottom: '30px' }}>{filteredProducts.length} products</p>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px', minHeight: '600px' }} className="product-grid-responsive">
                            {currentItems.map((product, i) => (
                                <motion.div 
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    style={{ border: '1px solid #f1f5f9', borderRadius: '15px', overflow: 'hidden', transition: '0.3s' }}
                                    className="product-card"
                                >
                                    <div style={{ position: 'relative', overflow: 'hidden' }}>
                                        <img src={product.image} alt={product.name} style={{ width: '100%', height: '300px', objectFit: 'cover', transition: '0.5s' }} className="product-img" />
                                        <span style={{ 
                                            position: 'absolute', 
                                            top: '15px', 
                                            left: '15px', 
                                            background: '#0f172a', 
                                            color: '#fff', 
                                            padding: '5px 12px', 
                                            fontSize: '0.75rem', 
                                            fontWeight: 'bold', 
                                            borderRadius: '4px',
                                            textTransform: 'uppercase'
                                        }}>
                                            {product.badge}
                                        </span>
                                    </div>
                                    <div style={{ padding: '25px' }}>
                                        <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#0f172a', marginBottom: '15px', minHeight: '3rem' }}>{product.name}</h3>
                                        <Link 
                                            to={`/product/${product.id}`}
                                            style={{ 
                                                display: 'block',
                                                width: '100%', 
                                                padding: '12px', 
                                                background: 'none', 
                                                border: '2px solid #0f172a', 
                                                borderRadius: '8px', 
                                                fontWeight: '700', 
                                                color: '#0f172a',
                                                cursor: 'pointer',
                                                textDecoration: 'none',
                                                textAlign: 'center',
                                                transition: '0.3s'
                                            }}
                                            className="btn-product"
                                        >
                                            View Details
                                        </Link>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Pagination */}
                        {totalPages > 1 && (
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', marginTop: '60px' }}>
                                <button 
                                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                                    style={{ background: 'none', border: 'none', color: currentPage === 1 ? '#cbd5e1' : '#0f172a', cursor: currentPage === 1 ? 'default' : 'pointer', fontSize: '1.5rem' }}
                                >
                                    &lt;
                                </button>
                                {[...Array(totalPages)].map((_, i) => (
                                    <button 
                                        key={i}
                                        onClick={() => setCurrentPage(i + 1)}
                                        style={{ 
                                            background: 'none', 
                                            border: 'none', 
                                            fontWeight: 'bold', 
                                            color: currentPage === i + 1 ? '#f59e0b' : '#64748b',
                                            cursor: 'pointer',
                                            fontSize: '1rem'
                                        }}
                                    >
                                        {i + 1}
                                    </button>
                                ))}
                                <button 
                                    onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                                    style={{ background: 'none', border: 'none', color: currentPage === totalPages ? '#cbd5e1' : '#0f172a', cursor: currentPage === totalPages ? 'default' : 'pointer', fontSize: '1.5rem' }}
                                >
                                    &gt;
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            
            {/* Know More Section */}
            <div style={{ backgroundColor: '#f8fafc', padding: '100px 0', borderTop: '1px solid #f1f5f9' }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}
                    >
                        <h2 style={{ fontSize: '3rem', fontWeight: '900', color: '#0f172a', marginBottom: '40px' }}>Know <span style={{ color: '#f59e0b' }}>More</span></h2>
                        <p style={{ fontSize: '1.2rem', lineHeight: '2', color: '#475569', marginBottom: '30px' }}>
                            <strong>SHNOOR International LLC</strong> is a dynamic organization bridging the worlds of technology and trade. With expertise spanning IT Consulting & Staffing, IT Product Development, Application Designing & Development, and SAP Outsourcing, we empower businesses with cutting-edge digital solutions. Beyond IT, our strong foothold in global import and export connects India with the UAE, Bahrain, Qatar, Oman, and Malaysia—delivering quality products and building lasting partnerships.
                        </p>
                        <p style={{ fontSize: '1.3rem', fontWeight: '700', color: '#0f172a', letterSpacing: '0.5px' }}>
                            We are driven by innovation, guided by trust, and committed to delivering value that exceeds expectations.
                        </p>
                    </motion.div>
                </div>
            </div>

            <style>{`
                .grid-responsive {
                    @media (max-width: 992px) {
                        grid-template-columns: 1fr !important;
                    }
                }
                .product-grid-responsive {
                    @media (max-width: 1200px) {
                        grid-template-columns: repeat(2, 1fr) !important;
                    }
                    @media (max-width: 768px) {
                        grid-template-columns: 1fr !important;
                    }
                }
                .product-card:hover {
                    box-shadow: 0 20px 40px rgba(15, 23, 42, 0.1);
                    transform: translateY(-5px);
                }
                .product-card:hover .product-img {
                    transform: scale(1.05);
                }
            `}</style>
        </motion.div>
    );
};

export default ImportExportPage;
