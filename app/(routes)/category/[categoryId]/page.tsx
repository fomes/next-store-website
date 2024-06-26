import React from "react";

import { getSizes } from "@/actions/get-sizes";
import { getColors } from "@/actions/get-colors";
import { Billboard } from "@/components/Billboard";
import { Container } from "@/components/Container";
import { getCategory } from "@/actions/get-category";
import { getProducts } from "@/actions/get-products";
import { CategoryFilter } from "@/components/CategoryFilter";
import { NoResults } from "@/components/NoResults";
import { ProductCard } from "@/components/ProductCard";
import { MobileFilters } from "@/components/MobileFilters";

interface CategoryPageProps {
  params: {
    categoryId: string;
  };

  searchParams: {
    colorId: string;
    sizeId: string;
  };
}

const CategoryPage = async ({ params, searchParams }: CategoryPageProps) => {
  const products = await getProducts({
    categoryId: params.categoryId,
    colorId: searchParams.colorId,
    sizeId: searchParams.sizeId,
  });

  const sizes = await getSizes();
  const colors = await getColors();
  const category = await getCategory(params.categoryId);

  return (
    <div className="bg-white mt-8">
      <Container>
        {/* <Billboard data={category.billboard} /> */}

        <div className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            <MobileFilters sizes={sizes} colors={colors} />

            <div className="hidden lg:block">
              <CategoryFilter valueKey="sizeId" name="Tamanhos" data={sizes} />
              <CategoryFilter valueKey="colorId" name="Cores" data={colors} />
            </div>

            <div className="mt-6 lg:col-span-4 lg:mt-0">
              {products.length === 0 && <NoResults />}

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {products.map((item) => (
                  <ProductCard key={item.id} data={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CategoryPage;
