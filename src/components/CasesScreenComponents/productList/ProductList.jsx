import "./productList.css";
import Product from "../product/Product";
import { products } from "../../../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 style={{fontFamily: 'GroteskBlack'}} className="pl-title">Real Customers with Huge Results</h1>
        <p className="pl-desc" style={{fontFamily: 'GroteskRegular'}}>
        Picaso has optimized thousands of apps using our platform and methodology. 
        Take a look at each app store case study and see how Picaso can help you.
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
