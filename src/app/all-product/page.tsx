"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import Swal from "sweetalert2";
import { addToCart } from "../actions/actions";
import { Product } from "../../../type/products";  

// Fetch All Products
async function getAllProducts(): Promise<Product[]> {
  return client.fetch(
    groq`*[_type == "product"]{
      _id,
      productName,
      image {
        asset {
          _ref
        }
      },
      category,
      price,
      status,
      description,
      slug
    }`
  );
}

export default function AllProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const data = await getAllProducts();
      console.log("Fetched Products:", data); 
      setProducts(data);
      setLoading(false);
    }
    fetchData();
  }, []);

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    
    Swal.fire({
      position: "top-right",
      icon: "success",
      title: `${product.productName} added to cart`,
      showConfirmButton: false,
      timer: 1000
    });

    addToCart(product);
  };

  if (loading) return <p className="text-center text-gray-500">Loading products...</p>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Latest Products</h1>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product._id} className="border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200">
            <Link href={`/product/${product.slug?.current || "#"}`} className="block text-center hover:underline text-gray-800">
              {product.productName}
            </Link>
            
            

            {product.image?.asset?._ref && (
              <Image
                src={urlFor(product.image).url()} 
                alt={product.productName}
                width={100}
                height={100}
                className="w-full h-40 object-cover rounded-md"
              />
            )}

            <p className="text-gray-500 mt-2 text-center">
              {product.price ? `$${product.price}` : "Price not available"}
            </p>
            
            <h2 className="text-lg font-semibold text-red-500 text-center">{product.status}</h2>
            <button className="bg-gradient-to-r from-lime-300 to-lime-800 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-200 ease-in-out"
              onClick={(e) => handleAddToCart(e, product)}>
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
