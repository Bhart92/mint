import styles from "./services.module.scss";

const ServiceCard = ({ desc, icon }) => {
  return (
    <div
      className={`${styles.serviceCard} my-8 flex flex-col items-center justify-center md:border-white-800 md:border-solid md:border-2 lg:p-4`}
    >
      <div className="h-[150px] w-[150px] flex items-center justify-center md:h-[200px] md:w-[200px]">
        {icon}
      </div>
      <div className="max-w-[250px] md:border-white-800 md:border-solid md:border-t-2 lg:p-6">
        <p className=" text-center text-base">{desc}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
