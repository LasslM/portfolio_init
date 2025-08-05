import { cn } from "@/lib/utils";
import {Link} from "react-router-dom";

export const BentoGrid = ({
                              className,
                              children
                          }) => {
    return (
        <div
            className={cn(
                "mx-auto grid max-w-6xl grid-cols-1 gap-6 md:auto-rows-[18rem] md:grid-cols-3",
                className
            )}>
            {children}
        </div>
    );
};

export const BentoGridItem = ({
                                  className,
                                  title,
                                  href,
                                  description,
                                  header,
                                  setCursorEnabled
                              }) => {
    return (
        <Link
            to={href}
            onMouseEnter={() => {
                console.log("Hover start");
                setCursorEnabled(true);
            }}
            onMouseLeave={() => {
                console.log("Hover end");
                setCursorEnabled(false);
            }}

            className={cn(
                "group/bento shadow-input  h-[30rem] row-span-1 flex flex-col justify-between space-y-4 bg-white transition duration-200 shadow-2xl hover:shadow-xl hover:scale-105 hover:cursor-none",
                className
            )}>
            {header}
            <div className="px-4 pb-4">
                <div
                    className="font-bold text-color-dark dark:text-neutral-200">
                    {title}
                </div>
                <div
                    className=" text-xs font-normal text-neutral-600 dark:text-neutral-300">
                    {description}
                </div>
            </div>
        </Link>
    );
};
