import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube, FaTiktok, FaReddit } from 'react-icons/fa';

function Footer() {
  return (
    <div className="bg-white py-12 px-4 sm:px-8 mt-12">
        {/* Logo and Social Icons */}
        <div className="space-y-6 flex flex-col items-center justify-around mb-16">
        <h1 className="text-3xl md:text-4xl font-bold text-green-600">Printify</h1>
          <div className="flex space-x-3 text-green-500">
            <a href="#"><FaFacebookF size={20} /></a>
            <a href="#"><FaInstagram size={20} /></a>
            <a href="#"><FaLinkedinIn size={20} /></a>
            <a href="#"><FaTwitter size={20} /></a>
            <a href="#"><FaYoutube size={20} /></a>
            <a href="#"><FaTiktok size={20} /></a>
            <a href="#"><FaReddit size={20} /></a>
          </div>
        </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 flex md:flex-row flex-col mt-5" >

        {/* Integrations */}
        <div>
          <h4 className="font-bold mb-4">Integrations</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>Shopify</li>
            <li>Etsy</li>
            <li>eBay</li>
            <li>Amazon</li>
            <li>TikTok Shop</li>
            <li>PrestaShop</li>
            <li>BigCommerce</li>
            <li>Wix</li>
            <li>WooCommerce</li>
            <li>Squarespace</li>
            <li>Printify API</li>
            <li>Printify Pop-Up Store</li>
          </ul>
        </div>

        {/* Discover */}
        <div>
          <h4 className="font-bold mb-4">Discover</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>Blog</li>
            <li>Guides</li>
            <li>Products</li>
            <li>Etsy print-on-demand</li>
            <li>Shopify print-on-demand</li>
            <li>WooCommerce print-on-demand</li>
            <li>Wix print-on-demand</li>
            <li>Squarespace print-on-demand</li>
            <li>Make Your Own Shirt</li>
            <li>Brands</li>
            <li>Pricing</li>
          </ul>
        </div>

        {/* Start Selling */}
        <div>
          <h4 className="font-bold mb-4">Start Selling</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>Custom T-shirts</li>
            <li>Custom Hoodies</li>
            <li>Custom Mugs</li>
            <li>Custom Socks</li>
            <li>Custom Backpacks</li>
            <li>Custom Branding</li>
            <li>Sell on Etsy</li>
            <li>Sell on Social Media</li>
            <li>Free T-shirt Designs</li>
            <li>Custom Products</li>
            <li>Custom All-Over-Print Hoodies</li>
          </ul>
        </div>

        {/* Printify */}
        <div>
          <h4 className="font-bold mb-4">Printify</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>Print on Demand</li>
            <li>Print Providers</li>
            <li>Experts Program</li>
            <li>Printify Express Delivery</li>
            <li>Become a Partner</li>
            <li>About</li>
            <li>Printify Quality Promise</li>
            <li>Jobs</li>
            <li>Webinars</li>
            <li>Printing Profits Podcast</li>
            <li>Contact Us</li>
            <li>Affiliate</li>
          </ul>
        </div>

      </div>
    </div>
  );
}

export default Footer;
