import React from 'react';
import MenuCard from './Card';
import { DishInterface } from '@/lib/database/models/dish.model';

const Collection = ({data} : {data: DishInterface[]}) => {
  return (
    <>
      {data.length > 0  ? 
        <div className='flex flex-col items-center gap-10'>
          <ul className='grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-10'>
              {data.map((dish) => {
                return(
                  <li className='flex justify-center' key={dish._id}>
                    <MenuCard dish={dish} />
                  </li>
                )
              })}
              
            
          </ul>
        </div>
      :
        <div>
          <h2>No Data Found!</h2>
        </div>}
      
    </>
  );
};

export default Collection;
