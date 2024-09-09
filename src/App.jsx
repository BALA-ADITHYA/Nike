import React from 'react'
import { CustomerReviews,Hero,Footer,PopularProduct,Services,SpecialOffer,Subscribe,SuperQuality } from './Components'
import Nav from './Components/Nav'


const App = () => {
  return (
    <main className='relative'>
          <Nav/>
        <section className='xl:padding-l wide:padding-r padding-b'>
          <Hero/>
        </section>
        <section className='padding'>
          <PopularProduct/>
        </section>
        <section className="padding">
          <SuperQuality/>
        </section>
        <section className='padding-x py-10'>
          <Services/>
        </section>
        <section className='padding'>
        <SpecialOffer/>
        </section>
        <section className="bg-pale-blue padding">
        <CustomerReviews/>
        </section>
        <section className="w-full padding-x sm:py-32 py-16">
        <Subscribe/>
        </section>
        <section className="bg-black padding-x padding-t pb-8">
        <Footer/>
        </section>

    </main>
    
  )
}

export default App
