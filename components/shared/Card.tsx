"use client"
import { DishInterface } from '@/lib/database/models/dish.model';
import Link from 'next/link';
import { useState } from 'react';

const MenuCard = ({ dish }: { dish: DishInterface }) => {
    const [isHovered, setIsHovered] = useState(false);
    
    return (
        <div 
            className={`group relative flex min-h-[380px] w-full max-w-[400px] flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all ${isHovered ? 'hover:scale-105' : 'hover:shadow-lg'} md:min-h-[438px]`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Link 
                href={`/dishes/${dish._id}`} 
                style={{backgroundImage: `url(${dish.image})`}}
                className="flex-center flex-grow bg-gray-50 bg-cover bg-center text-grey-500"
            >
            </Link>   
            <div className='flex flex-row justify-between p-6'>     
                <p className='font-bold'>
                    {dish.name}
                </p>
                ---------------------
                <span className="red p-semibold-14 rounded-full bg-green-100 px-6 py-1 text-green-60">
                  {dish.default_price}
                </span>
            </div>
        </div>
    );
}

export default MenuCard;
