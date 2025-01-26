import { Brand } from "@/types/brand";
import Image from "next/image";
import brandsData from "./brandsData";
import InfiniteMovingCards from "@/components/Brands/infinite-moving-cards";
import SectionTitle from "../Common/SectionTitle";


const testimonials = [
  {
    description:"Connecting Employers With Untapped Talent!",    
    name: "Jobsmato",
    title: "Jobsmato",
    image: "/jobsmato.svg",
    market: "HR Services",
    url:"https://jobsmato.github.io/web-jobsmato/",
  },
  {
    description:"Authenticty at its best",    
    name: "Ashvi Shop",
    title: "Ashvi.shop",
    image: "/ashvi-shop.svg",
    market: "E-commerce",
    url:"https://ashvi.shop",
  },
  {
    description:"Empowering Your Financial Success",    
    name: "CA Anil K Agrawal",
    title: "caanil.finance",
    image: "/CA.svg",
    market: "Finance",
    url:"https://www.caanil.finance/",
  },
  {
    description:"Real Estate",    
    name: "Raj Shree Build Homes",
    title: "rsb",
    image: "/rsb.svg.svg",
    market: "Retalors",
    url:"https://devrajshreebuildho.wixsite.com/raj-shree-build-home",
  },
  {
    description:"Taste So Good,Even Lions Go Veg!",    
    name: "Hungry Lions",
    title: "Hungry Lions",
    image: "/HungryLions.svg",
    market: "Restaraunt",
    url:"https://www.kishnafoods.com/copy-of-kwikly",
  },
  {
    description:"Making Great Food Affordable!",    
    name: "Kishna Foods",
    title: "Kishna Foods",
    image: "/KishnaFoods.svg",
    market: "Delivery App",
    url:"https://www.kishnafoods.com/general-clean",
  },
  {
    description:"Fresh from the farms!",    
    name: "K-Organic",
    title: "K-Organic",
    image: "/K-organic.svg",
    market: "Agriculture",
    url:"https://www.kishnafoods.com/copy-of-k-bakers",
  },


  // {
  //   quote:
  //     "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
  //   name: "William Shakespeare",
  //   title: "Hamlet",
  //   background: "linear-gradient(180deg, var(--slate-800), var(--slate-900)"

  // },
  // {
  //   quote: "All that we see or seem is but a dream within a dream.",
  //   name: "Edgar Allan Poe",
  //   title: "A Dream Within a Dream",
  //   background: "linear-gradient(180deg, var(--slate-800), var(--slate-900)"

  // },
  // {
  //   quote:
  //     "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
  //   name: "Jane Austen",
  //   title: "Pride and Prejudice",
  //   background: "linear-gradient(180deg, var(--slate-800), var(--slate-900)"

  // },
  // {
  //   quote:
  //     "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
  //   name: "Herman Melville",
  //   title: "Moby-Dick",
  //   background: "linear-gradient(180deg, var(--slate-800), var(--slate-900)"

  // },
];

const Brands = () => {
  return (
    <section className="relative  py-16 md:py-20 lg:py-28">

<SectionTitle
          title="Our Partners"
          paragraph="8 Active Partners in 5 different domains"
          center
          mb="5px"
        />
      
 <div className="relative h-[60rem]  rounded-md flex flex-col antialiased bg-gray dark:bg-black dark:bg-grid-white/[0.05] items-center justify-top relative overflow-hidden -mt-20 z-0">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="normal"
        className ="partners"
      />
    </div>    
    </section>
  );
};

export default Brands;

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { href, image, imageLight, name } = brand;

  return (
    <div className="flex w-1/2 items-center justify-center px-3 py-[15px] sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6">
      <a
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        className="relative h-10 w-full opacity-70 transition hover:opacity-100 dark:opacity-60 dark:hover:opacity-100"
      >
        <Image src={imageLight} alt={name} fill className="hidden dark:block" />
        <Image src={image} alt={name} fill className="block dark:hidden" />
      </a>
    </div>
  );
};
