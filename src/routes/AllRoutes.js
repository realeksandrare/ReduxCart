import { Routes, Route } from 'react-router-dom'
import { ItemDetails, PageNotFound, Cart } from '../pages'
import { ItemsList} from '../components'

export const AllRoutes = ({products, handleAddToCart}) => {
	return (
		<div>
			<Routes>
				<Route path='' element={<ItemsList products={products} handleAddToCart={handleAddToCart} title='Home' />} end />
				<Route path='/:id' element={<ItemDetails products={products} />}  />
				<Route path='/cart' element={<Cart products={products} title='Cart' />}  />
				<Route path='/a' element={<PageNotFound title='Error 404' />}  />
			</Routes>
		</div>
	)
}
