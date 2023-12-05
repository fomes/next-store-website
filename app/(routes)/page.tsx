import { getBillboards } from "@/actions/get-billboards";
import { getProducts } from "@/actions/get-products";
import { Billboard } from "@/components/Billboard";
import { Container } from "@/components/Container";
import { ProductList } from "@/components/ProductList";

export const revalidate = 0;

const Home = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboards("5703bd5d-61e0-4614-a77d-e3856ac68887");

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />

        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default Home;
