import Image from 'next/image'

const DesktopHeader = (props) => {
	const smoothScroll = (e, target) => {
		e.preventDefault();
		console.log(document)
		let x = document.querySelector(target);
				console.log(x)
				x.scrollIntoView();
}
  return (
    <header className="h-[125px] bg-neutral-900 w-full flex justify-between items-center px-8">
    	<div  className="basis-[60%]">
	    	<Image
		      src="/images/logo.png"
		      width={250}
		      height={250}
		      alt="Picture of the author"
		      style={
		      	{width: 'auto',
		      	height: 'auto'}
		      }
		    />
    </div>
    	<div className="basis-[35%] flex justify-between items-center">
    		<a href="#artists" onClick={e => smoothScroll(e, '.services')}>Services</a>
    		<a href="#artists" onClick={e => smoothScroll(e, '.artists')}>Artists & Appointments</a>
    		<a href="#" onClick={e => smoothScroll(e, '.contact')}>Contact</a>
    		<a href="#" onClick={e => smoothScroll(e, '.location')}>Location</a>
    	</div>
    </header>
  )
}

export default DesktopHeader;