import {stats} from '../Constants/main'
import styles from '../style'

function Stats() {
  return (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
      {stats.map((s) => (
        <div key={s.id} className={`flex-1 flex justify-start items-center flex-row m-3`} >
          <h4 className='text-white text-[30px]  md:text-[40px] font-semibold '>{s.value}</h4>
          <p className='text-gradient xl:text-[20px] text-[15px]  uppercase ml-3'>{s.title}</p>
        </div>
      ))}
    </section>
  )
}

export default Stats
