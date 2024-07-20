"use client";
import { useEffect, useState } from "react";
import CategoryList from "./_components/CategoryList";
import Hero from "./_components/Hero";
import { getCategories } from "./_services/Globalapi";

export default function Home() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const result = await getCategories();
        console.log("API response:", result);
        if (result.categories) {
          setCategories(result.categories);
        } else {
          console.error("Invalid response structure:", result);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div>
      <Hero/>
      <CategoryList categories={categories} />
    </div>
  );
}
