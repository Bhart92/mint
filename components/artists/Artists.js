import styles from './artists.module.scss';
import ArtistCard from '../artists/ArtistCard';
import artists from '../../data.js';
const Artists = (props) => {
  return (
    <section className={`${styles.artistBackground} w-full bg-neutral-900 text-white h-[100vh] bg-black flex items-center justify-evenly flex-col artists" id="artists`}>
    	<div><h1 className="text-2xl">Artists</h1></div>
    	<div className="flex flex-col h-auto min-w-[85%] justify-center items-normal md:flex-row lg:min-h-[510px]">
    	  <div className="lg:flex lg:max-h-[425px] lg:h-full">
				{artists.map((artist, i) => {
					if(i < 2){
						return (
							<ArtistCard name={artist.name} url={artist.url} job={artist.job} img={artist.img} alt={artist.alt} key={artist.url} />
						)
					}
    			})}
    	  </div>
    	  <div className="lg:flex lg:max-h-[425px] lg:h-full">
				{artists.map((artist, i) => {
					if(i >= 2 && i < 4){
						return (
							<ArtistCard name={artist.name} url={artist.url} job={artist.job} img={artist.img} alt={artist.alt} key={artist.url} />
						)
					}
    			})}
    	  </div>
    		
    	</div>
    </section>  )
}

export default Artists;