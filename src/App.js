import { Header, Footer } from './components'
import { AllRoutes } from './routes/AllRoutes'
import './App.css'

function App() {
	const products = [
		{
			id: 1,
			name: 'Headphones Elegance',
			price: 199.99,
			image: '/assets/images/headphones1.jpg',
		},
		{
			id: 2,
			name: 'Headphones SonicWave',
			price: 149.99,
			image: '/assets/images/headphones2.jpg',
		},
		{
			id: 3,
			name: 'Headphones BassXperience',
			price: 129.99,
			image: '/assets/images/headphones3.jpg',
		},
		{
			id: 4,
			name: 'Headphones CrystalClear',
			price: 179.99,
			image: '/assets/images/headphones4.jpg',
		},
		{
			id: 5,
			name: 'Headphones NeonBeats',
			price: 89.99,
			image: '/assets/images/headphones5.jpg',
		},
		{
			id: 6,
			name: 'Headphones AeroSound',
			price: 209.99,
			image: '/assets/images/headphones6.jpg',
		},
		{
			id: 7,
			name: 'Headphones UltraBass',
			price: 169.99,
			image: '/assets/images/headphones7.jpg',
		},
	]

	return (
		<div className='App'>
			<Header />
			<AllRoutes products={products} />
			<Footer />
		</div>
	)
}

export default App
