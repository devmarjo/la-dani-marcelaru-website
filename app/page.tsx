
import Image from "next/image";
import frontLaDani from '@/assets/images/frontLaDani.png'
import romaniaFlag from '@/assets/images/romaniaFlag.svg'
import facebook from '@/assets/images/facebook.png'
import instagram from '@/assets/images/instagram.png'
import tiktok from '@/assets/images/tiktok.png'
import mobile from '@/assets/images/mobile.png'
import romanianProducts from '@/assets/images/romanianProducts.png'
import RomanianText from "@/components/RomanianFlagText";
// import founderImage from "@/assets/images/founder.jpeg"
import RoundedFounderImage from "@/components/RoundedFounderImage";
import Maps from "@/components/Maps";
import Link from "next/link";
export default function Home() {
  return (
   <>
    <div style={{marginTop: "-75px"}}>
      <div className="m-auto w-[1080px] max-w-[90vw] grid grid-cols-1 md:grid-cols-2 mb-5">
        <div className="flex">
          <div className="m-auto pt-20 md:pt-10">
            <div className="text-center text-5xl md:text-7xl font-alfa text-red-700">Traditional Butchery</div>
            <div className="text-center font-alfa text-3xl">Fresh, high-quality meats</div>
          </div>
        </div>
        <div className="flex">
          <div className="m-auto p-10">
            <Image src={frontLaDani} alt="Image" className="rounded-md object-cover" />
          </div>
        </div>
      </div>
      <div className="m-auto w-[1080px] max-w-[90vw] grid grid-cols-1 md:grid-cols-2 mb-5">
        <div className="flex md:hidden">
          <div className="m-auto pt-20 md:pt-10">
            <div className="text-center text-5xl md:text-7xl font-alfa text-red-700">
              <RomanianText/>
            </div>
            <div className="text-center font-alfa text-3xl">Groceries from Romania</div>
          </div>
        </div>
        <div className="flex">
          <div className="m-auto p-10">
            <Image src={romanianProducts} alt="Image" className="rounded-md object-cover" />
          </div>
        </div>
        <div className="hidden md:flex">
          <div className="m-auto pt-20 md:pt-10">
            <div className="text-center text-5xl md:text-7xl font-alfa text-red-700">
              <RomanianText/>
            </div>
            <div className="text-center font-alfa text-3xl">Groceries from Romania</div>
          </div>
        </div>
      </div>
    </div>
    <div className="py-30 bg-red-100" id="AboutUs">
      <div className="m-auto w-[1080px] max-w-[90vw]">
        <div className="text-right font-alfa text-5xl border-b-4 border-b-red-700" id="AboutUs">
          About Us
        </div>
        <div className="text-xl py-10" style={{ textIndent: '5em'}}>
          <p><b>La Dani Macelaru</b> is a Romanian butcher-shop and supermarket that was established around 2020
            by founder Danut Hrisca. Hrisca (often nicknamed “Dani Macelaru,” meaning “Dani the Butcher” in Romanian)
            opened the first location in the Queensbury/Edgware area of North London. The business quickly became popular
            in the local Romanian community for its authentic products and friendly service, earning a 5.0/5 customer rating online.
            In late 2023, La Dani Macelaru expanded by opening a second branch in Borehamwood, Hertfordshire.
            This expansion, along with consistently high reviews and a top food hygiene rating,
            marks a significant milestone in the supermarket&apos;s growth.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 pt-10">
            <div className="m-auto w-[300px]">
              <RoundedFounderImage />
            </div>
            <p>
              <b>Danut Hrisca</b> Romanian-born entrepreneur, Hrisca started the business to bring a taste of Romanian tradition to London&apos;s
              Romanian and Eastern European community. He is the driving force behind the supermarket&apos;s focus on quality meats and authentic products,
              and is even referenced in the store&apos;s name (“La Dani Macelaru” refers to “Dani the Butcher,” a nod to Hrisca&apos;s role).
              Hrisca is the premises license holder for the Borehamwood shop and personally oversees operations 
            </p>
          </div>

        </div>
      </div>
      <div id="Butcher&Grocery"></div>
    </div>
    <div className="m-auto w-[1080px] max-w-[90vw] pt-20">
      <div className="text-right font-alfa text-5xl border-b-4 border-b-red-700" id="AboutUs">
        Authentic Romanian Butchery & Grocery in Edgware
      </div>
      <div className="text-xl py-10" style={{ textIndent: '5em'}}>
        <p>
          At La Dani Macelaru, we take pride in bringing the rich traditions of Romanian cuisine to the heart of Edgware.
          As a specialized Romanian butcher and supermarket, we offer a wide selection of premium fresh meats,
          expertly prepared to meet the highest quality standards. Our butchery provides locally sourced pork, beef, lamb,
          and poultry, along with traditional Romanian specialties such as cârnați (sausages), mici (grill meats), smoked cuts,
          and marinated delicacies—all crafted with authentic flavors.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 pt-10">
          <p>
            In addition to our butchery, our grocery section is stocked with imported Romanian products, including dairy,
            baked goods, pantry essentials, and beverages, ensuring you find everything needed to prepare authentic Romanian meals at home.
            Whether you&apos;re looking for fresh cuts, specialty meats, or traditional ingredients, our store offers a genuine Romanian
            shopping experience, built on quality, authenticity, and a deep passion for tradition. Visit us today and bring the taste of home to your table!
          </p>
          <div className="m-auto w-[300px]">
            <Image src={romaniaFlag} alt='Flag' />
          </div>
        </div>
      </div>
    </div>
    <div className="py-30 bg-yellow-100" id="VisitUs">
      <div className="m-auto w-[1080px] max-w-[90vw]">
        <div className="text-right font-alfa text-5xl border-b-4 border-b-red-700">
          Visit Us
        </div>
        <Maps/>
        <div className="text-xl my-10 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="font-alfa text-right">
            North Parade <br /> 6-7 Mollison Way <br /> Edgware HA8 5QH <br /> London, UK
          </div> 
          <div>
            <div className="font-alfa text-left border-b-2 border-b-red-700">
              Opening hours
            </div> 
            <div className="grid grid-cols-3">
              <div>Monday</div> <div className="col-span-2 text-center">8am - 10pm</div>
              <div>Tuesday</div> <div className="col-span-2 text-center">8am - 10pm</div>
              <div>Wednesday</div> <div className="col-span-2 text-center">8am - 10pm</div>
              <div>Thursday</div> <div className="col-span-2 text-center">8am - 10pm</div>
              <div>Friday</div> <div className="col-span-2 text-center">8am - 10pm</div>
              <div>Saturday</div> <div className="col-span-2 text-center">8am - 10pm</div>
              <div>Sunday</div> <div className="col-span-2 text-center">8am - 10pm</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="m-auto w-[1080px] max-w-[90vw] pt-20">
      <div className="text-right font-alfa text-5xl border-b-4 border-b-red-700" id="Contact">
        Contact Us
      </div>
      <div className="text-xl py-10">
      
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          <div className="py-10">
            <Link target="_blank" href={'https://www.facebook.com/ladani.macelaru'} className="flex flex-col items-center">
              <Image className="max-w-[75px]" src={facebook} alt="Facebook" />
              <div className="text-center font-alfa pt-5" style={{color: 'oklch(0.56 0.24 261.62)'}}>ladani.macelaru</div>
            </Link>
          </div>
          <div className="py-10">
            <Link target="_blank" href={'https://www.instagram.com/ladanimacelaru/'} className="flex flex-col items-center">
              <Image className="max-w-[75px]" src={instagram} alt="Instagram" />
              <div className="text-center font-alfa pt-5 instagram-text">ladani.macelaru</div>
            </Link>
          </div>
          <div className="py-10">
            <Link target="_blank" href={'https://www.tiktok.com/@la.dani.macelaru?lang=en'} className="flex flex-col items-center">
              <Image className="max-w-[75px]" src={tiktok} alt="TikTok" />
              <div className="text-center font-alfa pt-5 tiktok-text">la.dani.macelaru</div>
            </Link>
          </div>
          <div className="py-10">
            <Link target="_blank" href={'tel:+442089227516'} className="flex flex-col items-center">
            <Image className="max-w-[75px]" src={mobile} alt="mobile" />
              <div className="text-center font-alfa pt-5">+44 20 8922 7516</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
    <div className="w-full bg-red-700 text-white p-5 font-alfa">
      <div className="flex flex-row justify-between">
        <div className="font-alfa text-2xl">La Dani Macelaru™</div>
        <div>{new Date().getFullYear()}</div>
        <div className="font-alfa">
          Made By <Link target="_blank" href={'https://2wards.co'} className="text-green-300">2WARDS</Link>
        </div>

      </div>
    </div>
   </>
  );
}
