import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

function Header() {
  return (
    <div className='p-5 shadow-sm flex  justify-between
    '>
        <div className='flex items-center gap-8 '>
            <Image src='/logo.svg' alt='logo'
            width={60} height={50} />
            {/* <h1 className="text-2xl text-bold font-serif">zindage-asan</h1> */}
            <div className='md:flex items-center
                gap-6 hidden'>
                <Link href={'/'} className='hover:scale-105 hover:text-primary
                cursor-pointer'>Home</Link>
                <h2 className='hover:scale-105 hover:text-primary
                cursor-pointer'>Services</h2>
                <h2 className='hover:scale-105 hover:text-primary
                cursor-pointer'>About Us</h2>

            </div>


           </div>
           
            <div className="">
              <Button>Get Started</Button>
            </div>
 </div>
    
  )
}

export default Header