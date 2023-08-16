import { useTitle } from '../hooks/useTitle'
import { ItemCard } from './ItemCard'

export const ItemsList = ({ title, products }) => {
	useTitle(`${title}`)

	return (
		<main className='py-10'>
			<div className='flex flex-wrap justify-center mx-auto gap-6 mt-20'>
				{products.map(product => (
					<ItemCard key={product.id} product={product} />
				))}
			</div>
		</main>
	)
}
