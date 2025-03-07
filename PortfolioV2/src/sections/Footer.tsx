import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

export const Footer = () => {
  return (
    <footer className="relative -z-5 overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      <div className="container">
        <div className="border-t border-white/15 py-6 flex justify-center  ">
          <span className="text-white/40 text-center w-full block">
            &copy; 2025. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};
