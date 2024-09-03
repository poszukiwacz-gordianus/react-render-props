import { faker } from "@faker-js/faker";
import List from "./List";
import ProductItem from "./ProductItem";
import CompanyItem from "./CompanyItem";
import ProductList from "./ProductList";
import withToggles from "./HOC";

const products = Array.from({ length: 20 }, () => {
  return {
    productName: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: faker.commerce.price()
  };
});

const companies = Array.from({ length: 15 }, () => {
  return {
    companyName: faker.company.name(),
    phrase: faker.company.catchPhrase()
  };
});

const ProductListWithToogles = withToggles(ProductList);

export default function App() {
  return (
    <div>
      <h1>Render Props Demo</h1>

      {/* <div className="col-2">
        <List
          title="Products"
          items={products}
          render={(product) => (
            <ProductItem key={product.productName} product={product} />
          )}
        />

        <List
          title="Companies"
          items={companies}
          render={(company) => (
            <CompanyItem
              key={company.companyName}
              company={company}
              defaultVisibility={false}
            />
          )}
        />
      </div> */}

      <div className="col-2">
        <ProductList title="Products HOC" items={products} />
        <ProductListWithToogles title="Products HOC" items={products} />
      </div>
    </div>
  );
}
