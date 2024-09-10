'use client'
import { Search, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";


type formEvent = React.FormEvent<HTMLFormElement>;
type inputEvent = React.ChangeEvent<HTMLInputElement>;
type headerItemType = Array<string>;


const Header = () => {


    const router = useRouter();

    const [searchQuery, setSearchQuery] = useState<string>('');

    const navMenuItems: headerItemType = [
        "All",
        "Fresh",
        "Sell",
        "Best Sellers",
        "Mobiles",
        "Today's Deals",
        "Customer Service",
        "Electronics",
        "Fashion",
        "Home & Kitchen",
        "Computers",
        "Books",
    ]


    const formSubmitHandle = (e: formEvent) => {
        e.preventDefault();
        router.push(`/search/${searchQuery}`)
    }

    const inputChangeHandle = (e: inputEvent) => {
        setSearchQuery(e.target.value);
    }


    return (
        <>
            <header>
                <div className="">
                    {/* first row header  */}
                    <div className="flex  items-center py-2 justify-between md:px-10 lg:px-10 bg-zinc-800 text-white">
                        {/* header  */}
                        <div className="">
                            <h1 className="text-2xl font-bold font-sans">Ecom Shop</h1>
                        </div>

                        {/* search bar  */}
                        <div className="relative">

                            <form
                                action=""
                                onSubmit={formSubmitHandle}>
                                <input
                                    name={searchQuery}
                                    onChange={inputChangeHandle}
                                    type="text"
                                    placeholder="Search.."
                                    className="w-[600px] py-2 outline-none px-3 rounded-sm text-gray-700 text-xl" />
                            </form>

                            <Search className="absolute top-2 transition-all text-gray-500 cursor-pointer hover:text-black right-3" />
                        </div>

                        {/* navMenus  */}
                        <div className="flex items-center gap-5">

                            {/* first menu div  */}
                            <div className="border border-transparent transition-all duration-200 hover:border-white px-2 py-1 rounded-sm">
                                <div className="span">
                                    <p>Hello, Rakesh</p>
                                </div>
                                <div className="span">
                                    <p className="font-semibold">Account & Lists</p>
                                </div>
                            </div>

                            {/* Second menu div  */}
                            <div className="border border-transparent transition-all duration-200 hover:border-white px-2 py-1 rounded-sm">
                                <p>Returns</p>
                                <p className="font-semibold">& Orders</p>
                            </div>

                            {/* Third menu div  */}
                            <div className="flex border border-transparent transition-all duration-200 hover:border-white px-2 py-1 rounded-sm">
                                <span> <ShoppingCart />  </span>
                                <p className="mt-2">Cart</p>
                            </div>
                        </div>
                    </div>

                    {/* second row header  */}
                    <div className="flex justify-between px-10 bg-gray-700 py-1 items-center   font-[400] text-white">
                        {
                            navMenuItems.map((val, idx) => {
                                return (
                                    <Link className="border py-2 px-2 transition-all duration-200 rounded-sm border-transparent hover:border-white" key={idx} href={`/${val}`}>{val}</Link>
                                )
                            })
                        }
                        <div className="">
                            <Link className="text-yellow-400 font-bold hover:underline" href={'/signout'}>Sign out</Link>
                        </div>
                    </div>
                </div>

            </header>
        </>
    )
}
export default Header;