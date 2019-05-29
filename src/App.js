import { add } from './add';

export const total = (shipping, subtotal) => {
	return "$" + add(shipping, subtotal);
}
