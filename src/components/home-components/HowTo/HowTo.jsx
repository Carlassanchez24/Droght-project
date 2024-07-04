import styles from './HowTo.module.css';

const howToCardsData = [
  {
    title:  'Select Municipality',
    text: 'Choose a municipality from the map or dropdown menu.',
    step: '1'
  },
  {
    title: 'Explore Drought Levels',
    text: 'Hover over or click on a municipality to view detailed drought information.',
    step: '2'
  },
  {
    title: 'Stay Informed',
    text: 'Monitor changes and trends in drought severity to better understand local water conditions.',
    step: '3'
  }
]

const HowTo = () => {
    return (
        <>
         <section className='px-4 py-12 md:py-24'>
            <div className="container">
              <h2 className="text-5xl uppercase font-bold text-headlines mb-12">how to use</h2>
              <div className="w-full grid grid-cols-12 gap-7">
                {howToCardsData.map((card, i) => (
                  <div key={i} className="flex flex-col gap-3 col-span-12 md:col-span-6 lg:col-span-4 py-8 px-6 bg-light relative">
                      {card.title && <h3 className="font-medium text-xl uppercase text-headlines">{card.title}</h3>}
                      {card.text && <p>{card.text}</p>}
                      {card.step && <span className={styles['step-span']}><p>{card.step}</p></span>}
                  </div>
                ))}
              </div>
            </div>
         </section>
        </>
    )
}

export default HowTo