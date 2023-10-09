import axios from 'axios';
import {useRouter} from 'next/navigation';
import {useCallback, useMemo} from 'react';


import { SafeUser } from '../types'; 

interface IUseBasket{
    courseId : string;
    currentUser : SafeUser | null; 
}

const userBasket = ({courseId, currentUser}:IUseBasket) => {
    const router = useRouter();

    const hasBasket = useMemo(() => {
        const List = 
    })

}