
import { PiNeedleLight } from "react-icons/pi";
import { GiSkullRing } from "react-icons/gi";
import { CgPen } from "react-icons/cg";
import styles from './services.module.scss';

import ServiceCard from './ServiceCard';
const Services = (props) => {
  return (
    <section className={` ${styles.serviceBackground} services w-full bg-neutral-900 text-white bg-black flex items-center justify-evenly flex-col lg:h-[85vh]`}>
    	<div><h1 className="text-2xl">Services</h1></div>
    	<div className="flex flex-col items-start justify-around lg:flex-row lg:w-[95%]">
        <ServiceCard desc={"Custom full service tattoos"} icon={<CgPen className="h-full w-full"/>}/>
        <ServiceCard desc={"Professional body modifications and piercings"} icon={<PiNeedleLight className="h-full w-full"/>}/>
        <ServiceCard desc={"Large variety of body jewlery and tattoo stencils."} icon={<GiSkullRing className="h-full w-full"/>}/>
      </div>
    </section>
  )
}

export default Services;