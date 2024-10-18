import userIcon from '../assets/bxs-user.svg'
import brainIcon from '../assets/bxs-brain.svg'
import educationIcon from '../assets/bxs-graduation.svg'
import workIcon from '../assets/bxs-briefcase.svg'

export default function Menu() {
  return (  
    <div className="side__bar">
      <div className="icon__container">
        <div className="user__container">
          <img src={userIcon} alt="" className='user__img icon__img' />
        </div>
        <div className="technical__container">
          <img src={brainIcon} alt="" className='technical__img icon__img' />
        </div>
        <div className="education__container">
          <img src={educationIcon} alt="" className='education__img icon__img' />
        </div>
        <div className="work__container">
          <img src={workIcon} alt="" className='work__img icon__img' />
        </div>
      </div>
    </div>
  );
}
