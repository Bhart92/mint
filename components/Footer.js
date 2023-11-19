const Footer = (props) => {
  return (
    <footer className=" static bottom-0 left-0 right-0 h-auto bg-neutral-900 w-full flex flex-col justify-around items-center h-[195px] lg:py-4">
    <div className="flex flex-col items-center justify-center">
    	<h5 className="text-base">Mint Condition Tattoo</h5>
    	 <a className=" text-sm" href="tel:9099825347">(909) 982-5347</a>
    </div>
    <div className="flex flex-col items-center justify-center ">
    <span className="text-[11px] text-center">©2018 by www.mintconditiontattoo.com.</span>
    <span className="text-[11px] text-center max-w-[85%]">Upland, Rancho Cucamonga, Ontario, Chino, Fontana, Claremont, LaVerne, San Dimas, Chino Hills.</span>
    <span className="text-[11px]">All violators will be shot, survivors will be shot twice.</span>
    </div>
    </footer>
  )
}

export default Footer;