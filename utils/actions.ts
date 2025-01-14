import db from '@/utils/db';
import { redirect } from 'next/navigation';

//! One way to fetch
export const fetchFeaturedProducts = async () => {
  const products = await db.product.findMany({
    where: {
      featured: true,
    },
  });
  return products;
};

//! Alternative way to fetch without async/await
export const fetchAllProducts = ({ search = '' }: { search: string }) => {
  return db.product.findMany({
    where: {
      OR: [
        {
          name: { contains: search, mode: 'insensitive' },
        },
        {
          company: { contains: search, mode: 'insensitive' },
        },
      ],
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
};

export const fetchSingleProduct = async (productId: string) => {
  const product = await db.product.findUnique({
    where: {
      id: productId,
    },
  });

  if (!product) redirect('/products');
  return product;
};
