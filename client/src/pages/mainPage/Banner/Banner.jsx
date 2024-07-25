
import { useState } from 'react'
import './Banner.css'
import { Link } from 'react-router-dom'

export function Banner() {
    const [open, setOpen] = useState('banner_btn close')
    return (
        <>
            <div className="banner">
                <div className="banner_text">
                    <p className="banner_title"><span>Все</span> путешествия по России от <span>прямых</span>  организаторов!</p>
                    <p className="banner_subtitle">Отдых на любой вкус! <span>6322</span> вариантов путешествий по <span>всему Миру</span></p>
                    <Link to='/catalog'>
                        <button className={open} onMouseEnter={() => { setOpen('banner_btn open') }} onMouseLeave={() => { setOpen('banner_btn close') }}>
                            <p>Выбрать путешествие</p>
                            <svg width="20" height="16" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.2916 0.293265C13.1986 0.386132 13.1249 0.496416 13.0746 0.617806C13.0242 0.739196 12.9983 0.869312 12.9983 1.00072C12.9983 1.13212 13.0242 1.26224 13.0746 1.38363C13.1249 1.50502 13.1986 1.6153 13.2916 1.70817L20.5849 9.00018H0.999935C0.734737 9.00018 0.480399 9.10553 0.292875 9.29306C0.105351 9.48058 2.43697e-06 9.73492 2.43697e-06 10.0001C2.43697e-06 10.2653 0.105351 10.5197 0.292875 10.7072C0.480399 10.8947 0.734737 11 0.999935 11H20.5849L13.2916 18.2921C13.104 18.4797 12.9986 18.7342 12.9986 18.9995C12.9986 19.2649 13.104 19.5193 13.2916 19.707C13.4792 19.8946 13.7337 20 13.9991 20C14.2644 20 14.5189 19.8946 14.7065 19.707L23.7059 10.7076C23.7989 10.6147 23.8726 10.5044 23.923 10.383C23.9733 10.2616 23.9992 10.1315 23.9992 10.0001C23.9992 9.86871 23.9733 9.73859 23.923 9.6172C23.8726 9.49581 23.7989 9.38553 23.7059 9.29266L14.7065 0.293265C14.6136 0.200295 14.5034 0.126541 14.382 0.0762198C14.2606 0.0258989 14.1305 -3.86717e-07 13.9991 -3.86717e-07C13.8677 -3.86717e-07 13.7375 0.0258989 13.6161 0.0762198C13.4948 0.126541 13.3845 0.200295 13.2916 0.293265Z" fill="white" />
                            </svg>
                        </button>
                    </Link>
                </div>
                <div className="banner_img">
                    <img src="https://photopole.ru/wp-content/uploads/turtsiia-antalia-1-1.webp" alt="" />
                </div>
            </div>
        </>
    )
}