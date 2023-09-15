import React from 'react'
import styles from './style'
import { Navbar,
  Billing,
  Business,
  Carddeal,
  Client,
  Cta,
  Footer,
  Hero,
  Stats,
  Testimonial   } from './Component/Main';

function App() {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <Carddeal />
          <Testimonial />
          <Client />
          <Cta />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App

