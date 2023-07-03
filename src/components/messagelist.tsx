
import john from "../assets/john.jpg";
import { chatlist } from "../constants";

const Messagelist = () => {
    return (<>
        {
            chatlist.map((chat) => (
                <div className="flex flex-row  p-3  hover:bg-gray-200 hover:bg-opacity-5 rounded-2xl">
                    <img src={john} className="rounded-full w-12 h-12" />
                    <div className='flex flex-col flex-1 px-4 '>
                        <div className='text-lg font-bold hidden text-white md:block'>{chat.username}</div>
                        <div className='text-md font-medium text-primary hidden md:block'>{chat.message}</div>
                    </div>
                    <div className="flex flex-col">
                        <div className="text-xs text-primary">{chat.lastmessage}</div>
                        <div className="flex justify-end py-1">
                        <span className="bg-slate-600 rounded-xl px-2 text-white ">
                                {chat.notification}

                            </span>
                        </div>
                           

                    </div>
                </div>
            ))
        }

    </>);
}

export default Messagelist;