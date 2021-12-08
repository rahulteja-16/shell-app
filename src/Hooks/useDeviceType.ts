import { useEffect, useState } from 'react'

export const useDeviceType = () => {
	const [device, setDevice] = useState('')
	useEffect(() => {
		function handleResize() {
			if (window.innerWidth === undefined || window.innerWidth <= 481) {
				setDevice('mobile')
			} else if (window.innerWidth > 481 && window.innerWidth <= 961) {
				setDevice('tab')
			} else {
				setDevice('desktop')
			}
		}
		window.addEventListener('resize', handleResize)
		handleResize()
		return () => window.removeEventListener('resize', handleResize)
	}, [])
	return device
}
