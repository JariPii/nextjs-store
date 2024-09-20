import db from '@/utils/db';

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
export const fetchAllProducts = () => {
  return db.product.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });
};
