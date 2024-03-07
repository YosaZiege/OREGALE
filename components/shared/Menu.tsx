import React from 'react'
import Collection from './Collection'
import { fetchAllDishes } from '@/lib/actions/dish.actions'
import { Button } from '../ui/button';

const Menu = async () => {
    const dishes = await fetchAllDishes();

  return (
    <section className='wrapper my-8 gap-8 md:gap-12 flex flex-col  border-grey' id="">
        <div className='flex flex-row justify-between'>     
        <h2 className='h2-bold'>Menu</h2>
        <Button variant="outline" className='mr-6 hover:bg-black hover:text-white'>Voir tout</Button>
        </div>
        <p className='p-regular-20 md:p-regular-24'>Explorez notre sélection alléchante de plats.</p>

        <Collection data={dishes} />
    </section>
  )
}

export default Menu
