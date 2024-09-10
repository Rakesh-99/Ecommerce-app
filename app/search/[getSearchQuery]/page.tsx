'use client'
import { FetchDataFromSupabase } from "@/lib/superbase/hooks/fetchSupabaseData";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";





const GetSearchQueryItems = () => {

    const { getSearchQuery } = useParams();

    const { getSupabaseData, fetchAllData } = FetchDataFromSupabase();


    useEffect(() => {
        fetchAllData(getSearchQuery.toString());
    }, [getSupabaseData]);

    return (
        <>
            <div className="w-[80%]  m-auto  min-h-screen">
                <div className="title">
                    <h1 className="md:text-4xl lg:text-4xl font-semibold mt-10">Result </h1>
                </div>

                <div className="grid  lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 md:grid-cols-3 gap-3">
                    {
                        getSupabaseData.map((val: any, idx: number) => {
                            console.log(val);


                            return (
                                <div className="mt-10  flex justify-center rounded-md shadow-md hover:shadow-lg transition-all items-center gap-5" key={idx}>
                                    <Image src={val.image} alt="product image" width={150} height={100} />
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        </>
    )
}
export default GetSearchQueryItems;