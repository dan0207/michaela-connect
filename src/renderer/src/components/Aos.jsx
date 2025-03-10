import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
const App = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])
    return <div data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200"></div>
}
export default App
