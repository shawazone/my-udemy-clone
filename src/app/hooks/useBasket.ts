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
        const List = currentUser?.basketIds || [];
        return List.includes(courseId);
    },[currentUser,courseId]);

    const toggleBasket = useCallback(async (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.stopPropagation();
            try{
                let request ;

                if(hasBasket){
                    request = () => axios.delete(`/api/basket/${courseId}`)
                }else {
                    request = ()=> axios.post(`/api/basket/${courseId}`)
                }

                await request();
                router.refresh();

            }catch(error:any){
                throw new Error(error);
            }
    },[currentUser,hasBasket,courseId, router])

    return{
         hasBasket,toggleBasket
    }

}

export default userBasket;