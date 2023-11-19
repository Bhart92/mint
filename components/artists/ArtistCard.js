import Image from 'next/image';
import {FiInstagram} from 'react-icons/fi'
const ArtistCard = ({name, url, job, img, alt}) => {
  return (
    <article className="bg-neutral-900 first:mt-0 border-white-800 border-solid border-2 justify-between basis-[20%] md:last:my-0 md:min-w-[375px] md:max-w-[55%] mx-2 lg:h-full">
    	<a href={url} target="_blank">
    		<figure className="overflow-hidden w-full h-full ">
    		<Image
                className="m-auto w-full h-full"
                src={img}
                width={250}
                height={250}
                alt={alt}
                placeholder="empty"
            />
    	</figure>
    	<div className="w-full p-3">
    		<h2 className="text-white text-center w-full text-lg">
    			{name}
    		</h2>
    		<aside className="flex items-center justify-center "><FiInstagram className="mr-2 scale-[1.25]"/> <span>View Portfolio</span></aside>
    		
    	</div>
    	</a>
    </article>
  )
}

export default ArtistCard;