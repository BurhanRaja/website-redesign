import { cn } from "@/lib/utils";
import Link from "next/link";

export const BentoGrid = ({ className, children }) => {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-3 gap-4 ", className)}>
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  titleCSS,
  description,
  descriptionCSS,
  header,
  icon,
}) => {
  return (
    <>
      {/* <Link href={""}> */}
      <div
        className={cn(
          "row-span-1 rounded-xl group/bento hover:shadow-sm transition duration-200 p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent cursor-pointer",
          className
        )}
      >
        <div className="group-hover/bento:translate-x-2 transition duration-200">
          {icon}
          <div className={`font-bold  mb-2 mt-2 ${titleCSS}`}>{title}</div>
          <div className={"font-sans font-normal " + descriptionCSS}>
            {description}
          </div>
        </div>
      </div>
      {/* </Link> */}
    </>
  );
};
