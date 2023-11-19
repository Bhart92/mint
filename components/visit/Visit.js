import styles from './visit.module.scss';

const Visit = (props) => {
  return (
    <section className={`${styles.visit} contact h-[45vh] text-black flex flex-col items-center justify-center`}>
    	<div className="mt-[9rem]">
    		<h3 className="text-black text-center text-3xl">Come visit</h3>
    		<div className="flex items-center flex-col justify-center mt-5 mb-2 text-base">
	          <a href="http://maps.google.com/?q=560  N Mountain Ave, Upland, California, 91786">560 N Mountain Ave Suite E</a>
	          <a href="http://maps.google.com/?q=560  N Mountain Ave, Upland, California, 91786">Upland, CA 91786</a>
	          <a className="my-2 font-bold" href="tel:9099825347">(909) 982-5347</a>
	          <span>Monday - Sunday</span>
	          <span>12pm - 9pm</span>
        	</div>
    	</div>
    </section>
  )
}

export default Visit;