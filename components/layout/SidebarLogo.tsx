import { useRouter } from "next/router";
import { FaBowlingBall } from "react-icons/fa";

const SidebarLogo = () => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push('/')}
      className="
        rounded-full 
        h-14
        w-14  
        p-0 
        flex 
        items-center 
        justify-center 
        hover:bg-blue-300 
        hover:bg-opacity-10 
        cursor-pointer
    "
    >
      <FaBowlingBall color="orange" size={46} /> {/* Adjusted the size to 36 */}
    </div>
  );
};

export default SidebarLogo;
