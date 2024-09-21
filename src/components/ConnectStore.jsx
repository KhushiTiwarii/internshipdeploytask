import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './ConnectStore.css';  // Import CSS for additional styling

const ConnectStore = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // State to track if it's mobile

  useEffect(() => {
    // Set the mobile state based on window size
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call it on initial render

    // Intersection observer to check when the section is visible
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    });

    const section = document.querySelector('#connect-store-section');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
      window.removeEventListener('resize', handleResize); // Clean up the event listener
    };
  }, []);

  // Store logos with adjusted distance for mobile view
  const storeLogos = [
    { name: 'shopify', distance: isMobile ? 80 : 150, url: 'https://th.bing.com/th/id/OIP.v7YqdYNctsBliZBi1YE0FAHaHv?w=159&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { name: 'wix', distance: isMobile ? 120 : 300, url: 'https://th.bing.com/th/id/OIP.aHc1vB5Orcb5qMRi0M-wGwHaEK?w=274&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { name: 'etsy', distance: isMobile ? 90 : 180, url: 'https://th.bing.com/th/id/OIP.OQwYxKMmLIqEcsPd0X5RaQHaE8?w=262&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { name: 'bigcommerce', distance: isMobile ? 100 : 220, url: 'https://th.bing.com/th/id/OIP.uV3qr4Wu-ZW0GmudS_eObAHaHZ?w=176&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { name: 'squarespace', distance: isMobile ? 130 : 260, url: 'https://th.bing.com/th/id/OIP.y75MBzkrY7D6WTos5x7EXgHaEh?w=255&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { name: 'woocommerce', distance: isMobile ? 100 : 200, url: 'https://th.bing.com/th/id/OIP.FWzuEMwSCpq0hjk32YlaXQHaEb?w=258&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { name: 'api', distance: isMobile ? 140 : 320, url: 'https://th.bing.com/th/id/OIP.eiN8UHpq4jdi6_4393d8hwHaEl?w=279&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { name: 'other', distance: isMobile ? 70 : 100, url: 'https://th.bing.com/th/id/OIP.qwKL9-6SXrSPCrfhNlyrgAHaHa?pid=ImgDet&w=179&h=179&c=7&dpr=1.3' },
  ];

  return (
    <section id="connect-store-section" className="relative w-full flex flex-col items-center py-20">
      <h2 className="text-6xl font-bold mb-8">Connect your store</h2>
      <p className="text-gray-500 mb-0 text-2xl">Printify easily integrates with major e-commerce platforms and marketplaces</p>

      <div className="relative card-container flex">
        {/* Main green card in the center */}
        <motion.div
          className="green-card w-16 h-16 md:w-28 md:h-28  rounded-full md:rounded-lg"
          animate={{ scale: isVisible ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img src="https://th.bing.com/th/id/OIP.4Tw-apLNAF3Otn4LKAvuBwHaHa?w=170&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Printify" className="w-full h-full rounded-lg" />
        </motion.div>

        {/* White cards animating outward */}
        <div className="white-cards-container">
          {storeLogos.map((store, index) => {
            const angle = 30 * index;  // 30 degrees increment
            const distance = store.distance*1.3 ;  // Random distance for each card, adjusted for mobile/desktop

            return (
              <motion.div
                key={store.name}
                className={`white-card white-card-${store.name}`}
                initial={{ opacity: 0, scale: 0.2, x: 0, y: 0 }}
                animate={{
                  opacity: isVisible ? 1 : 0,
                  scale: isVisible ? 1 : 0.2,
                  x: isVisible ? distance * Math.cos((angle * Math.PI) / 180) : 0,
                  y: isVisible ? distance * Math.sin((angle * Math.PI) / 180) : 0,
                }}
                transition={{ duration: 1.2, delay: 0.3 + index * 0.1 }}
              >
                <img src={store.url} alt={store.name} className='w-10 h-10'/>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ConnectStore;
