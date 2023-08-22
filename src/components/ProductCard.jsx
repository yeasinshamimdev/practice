/* eslint-disable react/prop-types */

const ProductCard = ({product}) => {
  console.log(product)
  
  return (
    <div
      style={{ width: "auto" }}
      className="shadow-md">
      <img alt="products" className="p-2 w-auto mx-auto"  src={product?.image} />
      <p className='text-[17px] mt-0 mb-4 font-bold'><b></b>{product?.productName}</p>
      <p className='text-sm mt-0 mb-2'><b>Category: </b>{product?.category}</p>
      <p className='text-sm mt-0 mb-2'><b>Price: $</b>{product?.price}</p>
      <p className='text-sm mt-0 mb-2'><b>Status: </b>{product?.status}</p>
      <div className="flex gap-0 items-center">
        <p className='text-sm my-0'><b>Rating: </b>{product?.averageRating}</p>
      </div>
      <div className="mt-8">
          <button type="primary" shape="round" className={"w-full"}>More Details</button>
      </div>
    </div>
  )
}

export default ProductCard;
