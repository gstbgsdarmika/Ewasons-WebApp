import CardProduct from './CardProduct';

function ProductList({ products }) {
  return (
    <div className="recommendation mx-4">
      <div className="container-fluid">
        <div className="row list-recommendation d-flex justify-content-center align-items-center">
          {
            products.map((product) => (
              <CardProduct
                key={product._id}
                id={product._id}
                name={product.name}
                image={product.image}
                price={product.price}
                rating={product.rating}
                stock={product.stock}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default ProductList;
