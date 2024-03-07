import Contact from "@/components/shared/Contact";
import Footer from "@/components/shared/Footer";
import Menu from "@/components/shared/Menu";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { BiSolidDish } from "react-icons/bi";
import { CiCircleMore } from "react-icons/ci";
import { IoRestaurant } from "react-icons/io5";

export default function Home() {
  return (
    <>
      <section className="bg-contain bg-center py-5 md:py-10 border-b w-full">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col gap-8 justify-center">
            <h1 className="h1-bold">
              Expérimentez les saveurs des plats signatures d'Oregale.
            </h1>
            <p className="p-regular-20 md:p-regular-24">
              Laissez-vous tenter par un voyage culinaire unique en son genre,
              avec notre menu soigneusement élaboré et une atmosphère
              accueillante.
            </p>
            <Button>Explorer</Button>
          </div>
          <div className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]">
            <Image
              src={"/assets/images/background.jpg"}
              alt="Background"
              width={1000}
              height={1000}
              className='max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]'
            />
          </div>
        </div>
      </section>
      <section className=" wrapper w-full grid  grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-10 " id="decouvrir">
        <div className="col-span-full"> 
        <h2 className="h2-bold mt-6">Découvrez nos délicieuses options de menu</h2>
        </div>
        <div>
          <Image
            src="/assets/images/image_1_decouvrir.jpg"
            alt="image"
            width={380}
            height={340}
            className=" rounded-lg mb-2"
          />
          <div>
          <h4 className="h5-bold mb-4 w-fit">Pratique à emporter pour les personnes en déplacement</h4>
          <p className="p-[16] md:p-regular-16 mb-12 ">Profitez de nos plats savoureux dans le confort de votre propre maison.</p>
         <Link href="#menu" className="flex flex-row ml-32" >
          Commander. 
          <BiSolidDish className="ml-2" fontSize="1.5em"/>
          </Link>
          </div>
        </div>
        <div>
          <Image
            src="/assets/images/image_2_decouvrir.jpg"
            alt="image"
            width={380}
            height={340}
            className="rounded-lg mb-2"
          />
          <div>
          <h4 className="h5-bold  mb-4">Élevez vos occasions spéciales avec notre service de restauration exclusif.</h4>
          <p  className="p-[16] md:p-regular-16 mb-6">Offrez-vous une expérience culinaire inoubliable avec nos services de restauration pour toutes vos célébrations spéciales.</p>
      
          <Link href="#footer" className="flex flex-row " >
          En savoir plus.
          <CiCircleMore className="ml-2" fontSize="1.5em"/>
          </Link>
          </div>

        </div>
        <div>
          <Image
            src="/assets/images/image_3_decouvrir.jpg"
            alt="image"
            width={380}
            height={340}
            className="rounded-lg mb-2"
          />
          <div>
          <h4 className="h5-bold mb-4">Détendez-vous et dînez dans notre restaurant confortable.</h4>
          <p  className="p-[16] md:p-regular-16 mb-12">Vivez un moment délicieux dans une ambiance chaleureuse et invitante.</p>
          <Link href="#contact" className="flex flex-row ml-32 " >
           Reserver.
           <IoRestaurant className="ml-2" fontSize="1.5em"/>
          </Link>
          </div>
        </div>
      </section>

      <Menu />
      <Contact />
      <Footer />
      <div className="border-t flex flex-row justify-between p-6 mt-4 bg-slate-200">
      <Image src="/assets/images/logo_transparent.png" className='cover' width={70} height={60} alt="logo">
      </Image> 
      <p className='text-center mt-6'>Copyright    &#169; 2024 Designed by <span>Yosa</span></p>
      </div>
    </>
  );
}
