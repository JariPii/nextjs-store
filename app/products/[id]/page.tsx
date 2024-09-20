import AddToCart from '@/components/product-details/AddToCart';
import BreadCrumbs from '@/components/product-details/BreadCrumbs';
import ProductRating from '@/components/product-details/ProductRating';
import FavoriteToggleButton from '@/components/products/FavoriteToggleButton';
import { fetchSingleProduct } from '@/utils/actions';
import { formatCurrency } from '@/utils/format';
import Image from 'next/image';

const ProductDetails = async ({ params }: { params: { id: string } }) => {
  const product = await fetchSingleProduct(params.id);
  const { name, image, company, description, price } = product;
  const sekAmout = formatCurrency(price);

  return (
    <section>
      <BreadCrumbs name={product.name} />
      <div className='mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16'>
        {/* IMAGE FIRST COL */}
        <div className='relative h-full'>
          <Image
            src={image}
            alt={name}
            fill
            sizes='(max-width:768px) 100svw, (max-width:1200px) 50svw,33svw'
            priority
            className='w-full rounded object-cover'
          />
        </div>
        {/* PRODUCT INFO SECOND COL */}
        <div>
          <div className='flex gap-x-8 items-center'>
            <h1 className='capitalize text-3xl font-bold'>{name}</h1>
            <FavoriteToggleButton productId={params.id} />
          </div>
          <ProductRating productId={params.id} />
          <h4 className='text-xl mt-2'>{company}</h4>
          <p className='mt-3 text-md bg-muted inline-block p-2 rounded'>
            {sekAmout}
          </p>
          <p className='mt-6 leading-8 text-muted-foreground'>{description}</p>
          <AddToCart productId={params.id} />
        </div>
      </div>
    </section>
  );
};
export default ProductDetails;