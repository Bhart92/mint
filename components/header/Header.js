import DesktopHeader from "../DesktopHeader";
import useIsDesktopSize from "../../utils/useIsDesktopSize.js";
import MobileHeader from "../mobile/MobileHeader";
import dynamic from "next/dynamic";

const Header = () => {
  const { isDesktopSize } = useIsDesktopSize();
  const generateNav = () => {
    if (isDesktop) return <DesktopHeader />;
    return <MobileHeader />;
  };

  return (
    <header className="row-span-1 h-fit">
      {!isDesktopSize ? <MobileHeader /> : <DesktopHeader />}
    </header>
  );
};

export default dynamic(() => Promise.resolve(Header), { ssr: false });
