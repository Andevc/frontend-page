import React from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoMdHome, IoMdLogOut, IoMdSettings } from "react-icons/io";
import { AiFillProduct } from "react-icons/ai";
import { MdAddBox } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useUser } from "../api/UserContext";
export default function SideBar() {
    const  {user} = useUser();
    const menus = [
        { name: "home", link: "/", icon: IoMdHome },
        { name: "collection", link: `/collection/${user}`, icon: AiFillProduct },
        { name: "new product", link: `/collection/${user}/create-new`, icon: MdAddBox },
        // { name: "settings", link: `/settings/${user}`, icon: IoMdSettings, margin: true },
        { name: "logout", link: "/login", icon: IoMdLogOut },
    ]

    const [open, setOpen] = useState(true);

    return (
        <aside className={`${open ? 'w-60 px-5' : 'w-16 px-2'} bg-[#0e0e0e] min-h-screen text-gray-100 duration-500 sticky top-0`}>
            <section className="py-3 flex justify-end ">
                <HiMenuAlt3 size={30} className="cursor-pointer" onClick={() => setOpen(!open)} />
            </section>
            <section className="mt-4 flex flex-col gap-4 font-semibold">
                {
                    menus?.map((menu, i) =>
                        <Link to={menu?.link} 
                            key={i} 
                            className={`${
                                menu?.margin && "mt-10"
                                } 
                                group flex items-center text-xl gap-3.5 font-medium px-2 py-5 hover:bg-gray-800 rounded-md`}>
                            <div>{React.createElement(menu?.icon, { size: "26" })}</div>
                            <h2 
                                style={{
                                    transitionDelay: `${i+3}00ms`,
                                }}
                                className={`whitespace-pre duration-500 ${
                                    !open && 'opacity-0 translate-x-28 overflow-hidden'
                                }`} 
                            >
                                {menu?.name}
                            </h2>

                            <h2
                                className={`${open && 'hidden'} absolute left-32 bg-[#0e0e0e] font-semibold whitespace-pre  text-white rounded-xl drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:py-2 group-hover:px-3 group-hover:left-20 group-hover:duration-300 group-hover:w-fit`}
                            >
                                {menu?.name}
                            </h2>
                        </Link>
                    )
                }
            </section>
        </aside>
    )

}