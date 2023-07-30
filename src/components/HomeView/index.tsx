import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export const HomeView = () => {

    const svgRef = useRef<SVGSVGElement>(null)
    const [dataTheme, setDataTheme] = useState<string | null>('light')

    useEffect(() => {
        const htmlTag = document.querySelector('html')
        if (!htmlTag) return
        setDataTheme(htmlTag.getAttribute('data-theme'));
        const observer = new MutationObserver((mutationsList) => {
            mutationsList.forEach((mutation) => {
                if (mutation.attributeName === 'data-theme') {
                    setDataTheme(htmlTag.getAttribute('data-theme'))
                }
            })
        })
        observer.observe(htmlTag, { attributes: true })
        return () => observer.disconnect()
    }, [])
    useEffect(() => {
        const newFillColor = dataTheme === 'dark' ? '#1d232a' : '#ffffff'
        if (svgRef.current) {
            svgRef.current.setAttribute('fill', newFillColor)
        }
    }, [dataTheme])

    return (
        <>
            <section className="relative flex flex-col-reverse py-16 lg:flex-col lg:pb-0 max-w-screen-4xl mx-auto" >
                <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
                    <svg
                        ref={svgRef}
                        className="absolute left-0 hidden lg:block h-full text-white transform -translate-x-1/2"
                        viewBox="0 0 100 100"
                        fill={dataTheme === 'dark' ? '#1d232a' : '#ffffff'}
                        preserveAspectRatio="none slice"
                    >
                        <path d="M50 0H100L50 100H0L50 0Z" />
                    </svg>
                    <img
                        className=" object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
                        src="https://fangirlblog.com/wp-content/uploads/2020/02/star-wars-high-republic-concept-art-phil-noto-0483.jpg"
                        alt=""
                    />
                </div>
                <div className='relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl'>
                    <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
                        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-yellow-900 uppercase rounded-full bg-yellow-400">Por la luz  y la vida</p>
                        <h2 className='mb-5 font-sans text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none'>
                            Star Wars
                            <span className='inline-block text-yellow-400 ml-1'> Timeline</span>
                        </h2>
                        <p className='pr-5 mb-5 text-base md:text-lg'>
                            ¡Bienvenido al Universo Expandido de Star Wars! Descubre aventuras inéditas más
                            allá de las películas icónicas. Explora historias, personajes y mundos cautivadores.
                            ¡Que la Fuerza te acompañe!
                        </p>
                        <div className='flex items-center'>
                            <Link to="/books" className="btn btn-primary mr-4">Libros</Link>
                            <Link to="/comics" className="btn btn-outline">Comics</Link>
                        </div>
                    </div>
                </div>
            </section>
            {/* TODO section con las eras */}
        </>
    )
}
