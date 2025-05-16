import {navigation} from '../constants';
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
        <div className="fixed w-full top-0 z-50 backdrop-blur-sm border-b border-n-6 lg:backdrop-blur-sm">
            <div className="flex items-center justify-between w-full px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
                <a className="block w-[12rem]" href="#hero">
                    LOGO
                </a>

                <nav className="hidden lg:block bg-transparent lg:bg-transparent">
                    <div className="flex z-2 flex gap-x-6">
                        {navigation.map((item) => (
                            <a key={item.id} href={item.url}
                            className={`block uppercase transition-colors 
                             ${item.highlight || ""} 
                             ${item.url === pathname.hash ? "z-2 lg:text-color-9" : "lg:text-color-8"}`}>
                                {item.title}
                            </a>
                        ))}
                    </div>
                </nav>

                <Sheet>
                    <SheetTrigger className="block lg:hidden">
                        <img alt="Menü" src={"../src/assets/svg/burger_menu_right.svg"} className="w-7 h-7"/>
                    </SheetTrigger>

                    <SheetContent>
                        {navigation.map((item) => (
                            <a key={item.id} href={item.url}
                               className={`block uppercase transition-colors ${item.highlight || ""}`}>
                                {item.title}
                            </a>
                        ))}
                    </SheetContent>
                </Sheet>
            </div>
        </div>
    );
}

export default Header;