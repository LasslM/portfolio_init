import {navigation} from '../constants/index.jsx';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "../components/ui/sheet"
import {useLocation} from "react-router-dom";

const Header = () => {
    const pathname = useLocation();

    return (
        <>
            <div className="fixed w-full top-0 z-50 backdrop-blur-sm lg:backdrop-blur-sm px-10 py-2">
                <div className="flex items-center justify-between w-full">
                    <a className="block w-[12rem] font-bold" href="/">
                        MARIUS LASSL
                    </a>

                    <nav className="hidden lg:block bg-transparent lg:bg-transparent">
                        <div className="flex z-2 gap-x-6">
                            {navigation.map((item) => (
                                <a key={item.id} href={item.url}
                                   className={`block uppercase transition-colors 
                             ${item.highlight || ""} 
                             ${item.url === pathname.hash ? "z-2 lg:text-color-dark" : "lg:text-color-dark"}`}>
                                    {item.title}
                                </a>
                            ))}
                        </div>
                    </nav>

                    <Sheet>
                        <SheetTrigger className="block lg:hidden">
                            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM7 12C7 11.4477 7.44772 11 8 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H8C7.44772 13 7 12.5523 7 12ZM13 18C13 17.4477 13.4477 17 14 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H14C13.4477 19 13 18.5523 13 18Z" fill="#000000"/>
                            </svg>
                        </SheetTrigger>

                        <SheetContent>
                            {navigation.map((item) => (
                                <a key={item.id} href={item.url}
                                   className={`block uppercase transition-colors text-2xl ${item.highlight || ""}`}>
                                    {item.title}
                                </a>
                            ))}
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </>

    );
}

export default Header;