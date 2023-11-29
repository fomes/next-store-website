import { getBillboards } from "@/actions/get-billboards";
import { getProducts } from "@/actions/get-products";
import { Billboard } from "@/components/Billboard";
import { Container } from "@/components/Container";
import { ProductList } from "@/components/ProductList";

export const revalidate = 0;

const Home = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboards("548f8b0d-d640-4e23-a33d-e4898e54c00a");

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />

        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Feature Products" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default Home;
