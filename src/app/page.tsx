import Banner from "@/Components/Banner";
import Products from "@/Components/products";
import { ProductProps } from "../../type";

interface Props {
  productData: ProductProps;
}

async function getServerSideProps() {
  let data = await fetch("https://fakestoreapiserver.reactbd.com/tech");
  data = await data.json();
  return data;
}

export default async function Home() {
  let productsData = await getServerSideProps();
  // console.log(productsData);

  return (
    <main>
      <div className="max-w-screen-3 xl mx-auto">
        <Banner />
        <div className="relative md:-mt-20 lgl:-mt-32 xl:-mt-60 z-20 mb-10">
          <Products productData={productsData} />
        </div>
      </div>
    </main>
  );
}
