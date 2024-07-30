import { getSupabase } from "./supabase";
import { getSession } from "./auth";

export const getShoppingItems = (userId) => {
    const supabase = getSupabase();

    return supabase
    .from('shopping_items')
    .select('*')
    .eq('user_id', userId);
};

export const addShoppingItem = (product, amount, unit, userId) => {
    const supabase = getSupabase();
    return supabase.from('shopping_items').insert({
        product: product,
        amount: amount,
        unit: unit,
        done: false,
        user_id: userId
    });
};
