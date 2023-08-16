import { useDispatch } from 'react-redux'
import { remove } from '../store/cartSlice'
import { Link } from 'react-router-dom'

export const CartItemCard = ({ product }) => {
	const dispatch = useDispatch()

	return (
		<div className=' py-4'>
			<div className='w-screen max-w-6xl'>
				<Link className='min-w-min max-w-7xl flex items-center justify-around bg-white border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'>
					<img
						className='object-cover w-full rounded h-96 md:h-auto md:w-48 md:rounded-none'
						src={product.image}
						alt={product.name}
					/>

					<h5 className='text-xl   tracking-tight text-gray-900 dark:text-white'>{product.name}</h5>
					<span className='text-xl   text-gray-900 dark:text-white'>${product.price}</span>
					<button
						onClick={() => dispatch(remove(product))}
						className='remove font-bold px-4 py-2 rounded text-white hover:bg-red-600'>
						X
					</button>
				</Link>
			</div>
		</div>
	)
}
