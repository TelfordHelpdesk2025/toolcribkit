import { Link, usePage, router } from "@inertiajs/react";
import { useState } from "react";

export default function NavBar() {
    const { emp_data } = usePage().props;

    const logout = () => {
        const token = localStorage.getItem("authify-token");
        localStorage.removeItem("authify-token");
        router.get(route("logout"));
        window.location.href = `http://192.168.2.221/authify/public/logout?key=${encodeURIComponent(
            token
        )}&redirect=${encodeURIComponent(route("dashboard"))}`;
    };

    return (
        <nav className="">
            <div className="px-4 mx-auto sm:px-6 lg:px-8">
                <div className="flex justify-end h-[50px] ">
                    <div className="items-center hidden mr-5 space-x-1 font-semibold md:flex">
                        <div className="dropdown dropdown-end">
                            <div
                                tabIndex={0}
                                role="button"
                                className="flex items-center m-1 space-x-2 cursor-pointer select-none"
                            >
                               <i className="fa-regular fa-circle-user text-sky-600 text-2xl"></i>
                                <span className="mt-[3px] text-sky-600">
                                    Welcome back, {emp_data?.emp_firstname}
                                </span>
                                <i className="fa-solid fa-caret-down text-sky-600 text-2xl"></i>
                            </div>

                            <ul
                                tabIndex={0}
                                className="p-2 shadow-md dropdown-content menu bg-base-100 rounded-box z-1 w-52"
                            >
                                <li>
                                    <a href={route("profile.index")}>
                                        <i className="fa-regular fa-id-card text-sky-600"></i>

                                        <span className="mt-[3px] text-sky-600">
                                            Profile
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <button onClick={logout}>
                                        <i className="fa-regular fa-share-from-square text-sky-600"></i>
                                        <span className="mt-[3px] text-sky-600">
                                            Log out
                                        </span>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
