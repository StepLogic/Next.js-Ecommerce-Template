import { createContext, useContext, useState } from 'react'

export const ItemsContext = createContext({
    items:{},
    changeItem:()=>{}
});
