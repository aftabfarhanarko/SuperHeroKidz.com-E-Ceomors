"use client"
import { ShoppingCart } from 'lucide-react';
import React from 'react'

const AddButtons = ({producat}) => {
    return (
        <div>
             <button className="flex-1 bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-2 rounded-full font-bold hover:shadow-lg transform hover:scale-105 transition-all flex items-center justify-center gap-2">
                    <ShoppingCart className="w-5 h-5" />
                    Add to Cart
                  </button>
        </div>
    );
};

export default AddButtons;