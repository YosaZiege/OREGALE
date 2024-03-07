import React from 'react';
import Image from 'next/image';
import { PricesProps, SearchParamProps } from '@/types';
import { getDishById } from '@/lib/actions/dish.actions';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Variant } from '@/lib/database/models/dish.model';

const DishDetails = async ({params: { id }, searchParams}: SearchParamProps) => {
  const dish = await getDishById(id);

  return (
    <section className="theme  flex justify-center dotted bg-contain gap-6  m-0">
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:max-w-7xl">
        <Image 
          src={dish.image}
          alt="dish image"
          width={700}
          height={400}
          className="h-full min-h-[300px] object-cover t lg:mr-[10rem]"
        />
        <div className="ml-2">
          <h1 className="h1-bold mt-2 txt-color-1">{dish.name}</h1>
          <p className="p-regular-20">{dish.description}</p>

          <div className="w-[500px] ml-[5rem] mt-10">
            <Carousel className="bg-white rounded-lg mb-10">
              <CarouselContent className=''>
                {dish.variants.map((variant: Variant) => {
                  const checkPrices = () => {
                    if (variant && variant.prices && variant.prices.length > 0) {
                       
                     
                      return variant.prices.map((priceItem: PricesProps) => (
                        <div className='flex flex-col gap-4 ml-4' key={`${priceItem.size}-${priceItem.price}`}>
                          <span className="text-center black p-semibold-14 rounded-full bg-green-200 px-8 py-4 text-green-600">
                            {priceItem.size}
                          </span>
                          <span className="text-center green p-semibold-14 rounded-full bg-green-100 px-8 py-4 text-green-600">
                            {priceItem.price} DH
                          </span>
                        </div>
                      ));
                    
                      
              
                    } else {
                      return (
                        <div>
                          <span className="text-end green p-semibold-14 rounded-full bg-green-100 px-8 py-4 text-green-600">
                            {variant.price} DH
                          </span>
                        </div>
                      );
                    }
                  };
                  
                  return (
                    <CarouselItem key={variant.name} >
                      <div className="border h-[60vh] gap-10 dotted rounded-md object-contain object-cover">
                        <h2 className="h2-bold mb-10 ml-4 text-center underline">{variant.name}</h2>
                        <p className='ml-4'>Ingrédients</p>
                        <p className="text-gray-500 ml-4">{variant.description}</p>
                        <div className="flex justify-center mt-10">
                          {checkPrices()}
                        </div>
                      </div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DishDetails;
