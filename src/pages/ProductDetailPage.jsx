import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, ArrowRight, ShoppingCart } from 'lucide-react';
import { useAppContext } from '../AppContext';

import { supabase } from '../supabase';

const ProductDetailPage = () => {
    const { id } = useParams();
    const { addToCart } = useAppContext();
    const [product, setProduct] = React.useState(null);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const fetchProduct = async () => {
            const { data, error } = await supabase.from('products').select('*').eq('id', id).single();
            if (data) {
                setProduct(data);
            }
            setLoading(false);
        };
        fetchProduct();
    }, [id]);

    if (loading) {
        return (
            <div style={{ paddingTop: '150px', textAlign: 'center', minHeight: '60vh' }}>
                <h2>Loading Product...</h2>
            </div>
        );
    }

    if (!product) {
        return (
            <div style={{ paddingTop: '150px', textAlign: 'center', minHeight: '60vh' }}>
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
                        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '40px' }}>
                            <h2 style={{ fontSize: '1.8rem', fontWeight: '700', color: '#f59e0b', margin: 0 }}>
                                {product.tagline}
                            </h2>
                            <span style={{ background: '#0f172a', color: 'white', padding: '8px 20px', borderRadius: '30px', fontSize: '1.5rem', fontWeight: 'bold' }}>
                                ${product.price}
                            </span>
                        </div>
                        
                        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#475569', marginBottom: '50px' }}>
                            {product.description}
                        </p>

                        <div style={{ display: 'flex', gap: '20px' }}>
                            <button 
                                onClick={() => addToCart(product)}
                                style={{ 
                                    display: 'inline-flex', 
                                    alignItems: 'center',
                                    gap: '10px',
                                    padding: '18px 40px', 
                                    borderRadius: '15px',
                                    background: '#f59e0b',
                                    color: 'white',
                                    fontWeight: 'bold',
                                    border: 'none',
                                    cursor: 'pointer'
                                }}
                            >
                                <ShoppingCart size={20} /> ADD TO CART
                            </button>
                        </div>
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
