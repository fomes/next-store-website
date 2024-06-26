import { getProduct } from "@/actions/get-product";
import { getProducts } from "@/actions/get-products";
import { Container } from "@/components/Container";
import { Gallery } from "@/components/Gallery";
import { Info } from "@/components/Info";
import { ProductList } from "@/components/ProductList";
import React from "react";

interface ProductDetailsProps {
  params: {
    productId: string;
  };
}

const ProductDetails = async ({ params }: ProductDetailsProps) => {
  const product = await getProduct(params.productId);
  const suggestedItems = await getProducts({
    categoryId: product?.category?.id,
  });

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <Gallery images={product.images} />

            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <Info data={product} />
            </div>
          </div>

          <hr className="my-10" />
          <ProductList title="Items Relacionados" items={suggestedItems} />
        </div>
      </Container>
    </div>
  );
};

export default ProductDetails;
