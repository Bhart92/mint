import styles from './services.module.scss';

const ServiceCard = ({desc, icon}) => {
  return (
    <div className={`${styles.serviceCard} flex flex-col items-center justify-center border-white-800 border-solid border-2 lg:p-4`}>
    	<div className="h-[200px] w-[200px] flex items-center justify-center">{icon}</div>
          <div className="max-w-[250px] border-white-800 border-solid border-t-2 lg:p-6">
          <p className=" text-center text-base">{desc}</p>
        </div>
    </div>
  )
}

export default ServiceCard;