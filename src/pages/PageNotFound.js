import { useTitle } from '../hooks/useTitle'

export const PageNotFound = ({ title }) => {
	useTitle(`${title}`)

	return (
		<div className='mt-20 pt-20 flex flex-col justify-center items-center'>
			<p>Error 404</p>
			<p>Opss... no page found</p>
		</div>
	)
}
