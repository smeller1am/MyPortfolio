import { ProductCard, ProductCardProps } from '@/entities/product-card';
import { CategoryModel, ProductModel } from '@/shared/contracts';
import { FC } from 'react';

export interface ProductListProps {
  products: ProductModel[] | undefined;
  onProductClick?: ProductCardProps['onClick'];
}

const transformProducts = (
  products: ProductModel[],
): [ProductModel[], ProductModel[], ProductModel[]] => {
  const top = products.slice(0, 4);
  const middle = products.slice(5, 8);
  const bottom = products.slice(9);

  return [top, middle, bottom];
};

const renderProducts = (products: ProductModel[], onProductClick: ProductCardProps['onClick']) =>
  products.map(product => (
    <ProductCard product={product} key={product.id} onClick={onProductClick} />
  ));

export const ProductList: FC<ProductListProps> = ({ products, onProductClick }) => {
  if (!products) return 'Error while fetching';

  const productsMap = new Map<CategoryModel['name'], ProductModel[]>();

  products
    .sort((a, b) => (a.category.sortNumber ?? 0) - (b.category?.sortNumber ?? 0))
    .forEach(el => {
      if (productsMap.has(el.category.name)) {
        productsMap.set(el.category.name, [...(productsMap.get(el.category.name) ?? []), el]);
      } else {
        productsMap.set(el.category.name, [el]);
      }
    });
  const renderProductsHelper = (products: ProductModel[]) =>
    renderProducts(products, onProductClick);

  return (
    <>
      {Array.from(productsMap).map((el, index) => {
        const [topProducts, middleProducts, bottomProducts] = transformProducts(el[1]);
        return (
          <div className="grid" key={index}>
            {productsMap.size > 1 && <p className="subtitle">{el[0]}</p>}

            <div className="gridTop">{renderProductsHelper(topProducts)}</div>
            <div className="gridMiddle">{renderProductsHelper(middleProducts)}</div>
            <div className="gridBottom">{renderProductsHelper(bottomProducts)}</div>
          </div>
        );
      })}
    </>
  );
};
