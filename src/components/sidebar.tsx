import { RxHamburgerMenu } from "react-icons/rx";
import { TfiSearch } from "react-icons/tfi";
import Messagelist from "./messagelist";
const Sidebar = () => {
    return (<>
        <div className="flex flex-col w-[420px] h-full  px-3 bg-dark_theme overflow-y-auto   ">
            {/* burgger button and search */}
            <div className="flex flex-row py-2 justify-between items-center text-gray-300">
                <div className="hover:bg-zinc-700 rounded-full p-2  ">
                    <RxHamburgerMenu className="text-xl" />
                </div>
                <div className="bg-neutral-700  rounded-full p-1 w-full flex flex-row justify-center items-center ml-4">
                    <div className="pl-2">
                        <TfiSearch className="text-md " />
                    </div>
                    <input type="search"
                        className="bg-transparent w-full pl-3 p-1 placeholder:text-gray-300 focus:ring-0 outline-none"
                        placeholder="Search" />
                </div>

            </div>
            {/* message list */}
            <div className="flex flex-col">
                <Messagelist />
            </div>
        </div></>);
}

export default Sidebar;