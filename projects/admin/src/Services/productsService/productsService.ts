import { getProducts } from './functions/getProducts';
import { getProduct } from './functions/getProduct';
import { deleteProduct } from './functions/deleteProduct';
import { saveProduct } from './functions/saveProduct';
import { getSortList } from './functions/getSortList';
import { saveProductOrderList } from './functions/saveProductOrderList';
export const productsService = { getProducts, getProduct, deleteProduct, saveProduct, getSortList, saveProductOrderList };
