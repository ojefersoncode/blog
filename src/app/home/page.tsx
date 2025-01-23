"use client";

import React, { useEffect, useState } from "react";
import ProductSkeleton from "@/components/ProductSkeleton";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Heart, MapPin } from "lucide-react";
import { Sidebar } from "@/components/sidebar";

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
};

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=30")
      .then((res) => res.json())
      .then((data: Product[]) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  if (!products.length) {
    return (
      <div>
        <Sidebar />
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <ProductSkeleton key={index} />
          ))}
        </div>
      </div>

    );
  }

  return (


    <div>

      <Sidebar />
      <div className="w-full mx-auto bg-slate-300 p-4">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <Card key={product.id} className="w-full bg-slate-50">
              <CardHeader>
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-contain p-4"
                />
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-1">
                  <span className="font-bold text-lg">R$: {product.price.toFixed(2)}</span>
                  <Heart />
                </div>
                <h3 className="text-base font-semibold line-clamp-2">{product.title}</h3>
              </CardContent>
              <CardFooter className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-slate-800" />
                <span className="text-sm text-slate-800">Sua localização</span>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>


  );
};

export default Home;
