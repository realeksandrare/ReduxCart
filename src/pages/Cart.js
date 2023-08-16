import { useSelector } from 'react-redux'
import { useTitle } from '../hooks/useTitle'
import { CartItemCard } from '../components'

export const Cart = ({ title }) => {
	useTitle(`${title}`)

	const cartList = useSelector(state => state.cartState.cartList)
	const total = useSelector(state => state.cartState.total)

	return (
		<main className='mt-20'>
			<p className='text-2xl py-6 text-center'>
				Cart Items: {cartList.length} /$ {total}
			</p>

			{cartList.map(product => (
				<CartItemCard key={product.id} product={product}></CartItemCard>
			))}
		</main>
	)
}
