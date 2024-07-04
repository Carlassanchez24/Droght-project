import imageKey from '../../../assets/img-key.png'

const cardsData = [
  {
    title:  'interactive map',
    text: 'Visualize drought alert levels across Catalonia. Each municipality is color-coded to indicate its current drought severity.'
  },
  {
    title: 'live updates',
    text: 'Our data is powered by the official Catalonia transparency API, ensuring you have the most current information:',
    linkText: 'Explore the API',
    link: 'https://google.com'
  },
  {
    title: 'detailed data',
    text: 'View specific details such as hydrological and rainfall drought levels, and information on affected exploitation units like reservoirs.',
  }
]

const KeyFeatures = () => {
    return (
        <>
         <section className='px-4 py-12 md:py-24'>
          <div className="container">
            <div className="w-full flex flex-col md:grid grid-cols-12 gap-12">
              <figure className="col-span-12 md:col-span-5 max-w-full">
                <img src={imageKey} className="w-full" alt="some image alt text" />
              </figure>
              <div className="grid grid-cols-2 col-span-12 md:col-span-7 gap-x-8 gap-y-12">
                <h2 className="text-5xl uppercase font-bold text-headlines col-span-2">key features</h2>
                {cardsData.map((card, i) => (
                  <div key={i} className="flex flex-col gap-3 col-span-2 md:col-span-1">
                    {card.title && <h3 className="font-medium text-xl uppercase text-headlines">{card.title}</h3>}
                    {card.text && <p>{card.text}</p>}
                    {card.linkText && card.link && <a className="underline" href={card.link}>{card.linkText}</a>}
                  </div>
                ))}
              </div>
            </div>
          </div>
         </section>
        </>
      )
}

export default KeyFeatures