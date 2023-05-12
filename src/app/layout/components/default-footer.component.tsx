import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import Link from "next/link";


export const DefaultFooter: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white p-10">
      <div className="container mx-auto grid md:grid-cols-3 gap-4">
        <div>
          <h2 className="text-2xl mb-4">Our Gym</h2>
          <p>
            We are committed to providing a safe and inclusive environment where you can
            focus on your fitness journey. Join us today and start your path to wellness.
          </p>
        </div>
        <div>
          <h2 className="text-2xl mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li><Link href="/about" className="text-lg hover:underline">About Us</Link></li>
            <li><Link href="/classes" className="text-lg hover:underline">Classes</Link></li>
            <li><Link href="/contact" className="text-lg hover:underline">Contact</Link></li>
          </ul>
        </div>
        <div className="flex items-start justify-center md:justify-start flex-col">
          <h2 className="text-2xl mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="text-2xl" />
            </Link>
            <Link href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-2xl" />
            </Link>
            <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-2xl" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};





