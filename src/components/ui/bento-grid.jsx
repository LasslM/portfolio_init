import { cn } from "@/lib/utils";
import {Link} from "react-router-dom";

export const BentoGrid = ({
                              className,
                              children
                          }) => {
    return (
        <div
            className={cn(
                "mx-auto grid max-w-6xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
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
                                  header
                              }) => {
    return (
        <Link
            to={href}
            className={cn(
                "group/bento shadow-input  h-[30rem] row-span-1 flex flex-col justify-between space-y-4 border border-neutral-200 bg-white transition duration-200 shadow-2xl hover:shadow-xl ",
                className
            )}>
            {header}
            <div className="transition duration-200 group-hover/bento:translate-x-2 px-4 pb-4">
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
