import { useState } from "react"
import { supabase } from "../connectSupabase";





// Fetching data from Supabase :
export const FetchDataFromSupabase = () => {

    const [getSupabaseData, setGetSupabaseData] = useState<any>([]);

    const fetchAllData = async (getSearchQuery: string) => {

        const { data, error } = await supabase
            .from('products')
            .select('*')
            .or(`title.ilike.%${getSearchQuery}%,description.ilike.%${getSearchQuery}%,category.ilike.%${getSearchQuery}%`);


        if (data) {
            setGetSupabaseData(data);
        }
        if (error) {
            console.log(error);
        }
    }
    return { getSupabaseData, fetchAllData };
}