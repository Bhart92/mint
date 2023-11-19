import styles from './location.module.scss'
import Map from '../map/Map';
const Location = (props) => {

  return (
    <section className={`${styles.location} location w-full bg-neutral-900 text-white h-[65vh] bg-black flex items-center justify-evenly flex-col`}>
    	<div className="flex w-full h-full items-center justify-around">
        <Map lat={34.100576391039766} lng={-117.66972350988341} />
      </div>
    </section>  )
}

export default Location;