import Image from 'next/image'

const Logo = ({isOpen = false, setOpen = null, isMobile=false}) => {
  const toggleMobileNav = () => {
    if(isMobile && setOpen) setOpen(false);
    return;
  };
  return (
    <div className="header-logo" onClick={() => toggleMobileNav()}>
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
  );
};

export default Logo;
