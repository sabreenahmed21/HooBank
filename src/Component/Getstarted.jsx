import { arrowUp } from "../images/main"
import styles from "../style"

function Getstarted() {
  return (
    <div className={`${styles.flexCenter} bg-blue-gradient w-[140px] h-[140px] rounded-full p-[2px] cursor-pointer`}>
      <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
        <div className={`${styles.flexStart} flex-row`}>
          <p className="text-[18px] leading-[23px]">
            <span className="text-gradient">Get</span>
          </p>
          <img src={arrowUp} alt="img" className="w-[23px] h-[23px] object-contain"/>
        </div>
        <p className="text-[18px] leading-[23px]">
          <span className="text-gradient">Started</span>
        </p>
      </div>
    </div>
  )
}

export default Getstarted
