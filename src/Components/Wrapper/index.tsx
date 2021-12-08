import { ReactChild, ReactChildren, useEffect } from 'react'
import { useDeviceType } from '../../Hooks/useDeviceType'
import GlobalStyles from '../../Styles/GlobalStyles'
import Header from '../Header'

interface WrapperProps {
	children: ReactChild | ReactChildren
}

const Wrapper = ({ children }: WrapperProps) => {
	const device = useDeviceType()
	useEffect(() => {
		document.body.dataset.device = device
	}, [device])

	return (
		<>
			<GlobalStyles />
			<Header />
			{children}
		</>
	)
}

export default Wrapper
