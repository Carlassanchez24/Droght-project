import imageHero from '../../../assets/img-hero.jpg'


const buttonsData = [
    {
        text:  'interactive map',
        link: '/page',
    },
    {
        text:  'detailed data',
        link: '/page/2',
    },
]

const HomeHero = () => {
    return (
        <>
         <section className='px-4 py-12 md:py-24'>
          <div className="container grid md:grid-cols-2 gap-7">
            <div className='flex flex-col gap-5 md:pr-10 self-center'>
                <h1 className='text-6xl uppercase font-bold'>Catalonia Drought monitor</h1>
                <p className='text-xl max-w-xl'>Explore real-time drought information for municipalities across Catalonia, Spain. Our interactive platform provides up-to-date insights into hydrological and rainfall drought levels, helping you understand the impact on local water resources.</p>
                <div className='flex gap-2'>
                    {buttonsData.map((button, i) => (
                        <a key={i} href={button.link} className='py-5 px-10 bg-blue w-fit uppercase text-white hover:bg-blue-800'>{button.text}</a>
                    ))}
                </div>
            </div>
            <figure className='w-full'>
                <img src={imageHero} className='w-full' alt=""/>
            </figure>
          </div>
         </section>
        </>
      )
}

export default HomeHero