import imageGetStarted from '../../../assets/img-contact.jpg'

const getStartedCardsData = [
    {
        title:  'Start exploring Catalonia’s drought data',
        text: 'And gain insights into the state of our water resources. Whether you’re a resident, researcher, or policy maker, this platform equips you with essential information to make informed decisions.',
        contactType: 'Email',
        contact: 'contact@foo.com'
    },
    {
        title: 'contact us',
        text: 'For support or feedback, contact us. Join us in fostering awareness and resilience in managing water resources in Catalonia.',
        contactType: 'Phone',
        contact: '+00 000 00 00'
    }
]

const GetStarted = () => {
    return (
        <>
         <section className='px-4 py-12 md:py-24'>
            <div className="container">
                <div className="w-full grid grid-cols-12 gap-7">
                    <div className="col-span-12 lg:col-span-8 flex flex-col justify-between">
                        <h2 className="text-5xl uppercase font-bold text-headlines mb-12">Get Started</h2>
                        <div className="w-full grid grid-cols-8 gap-7 flex-grow">
                            {getStartedCardsData.map((card, i) => (
                            <div key={i} className="flex flex-col gap-3 col-span-12 md:col-span-6 first:lg:col-span-5 lg:col-span-3">
                                {card.title && <h3 className="font-medium text-xl uppercase text-headlines">{card.title}</h3>}
                                {card.text && <p>{card.text}</p>}
                                {card.contactType && card.contact &&
                                    <span className='mt-auto'>
                                        <p className='uppercase'>{card.contactType}</p>
                                        <a href="" className='text-3xl font-medium uppercase text-blue'>{card.contact}</a>
                                    </span>
                                }
                            </div>
                            ))}
                        </div>
                    </div>
                    <img src={imageGetStarted} className="w-full col-span-12 lg:col-span-4" alt="some image alt text" />
                </div>
            </div>
         </section>
        </>
      )
}

export default GetStarted