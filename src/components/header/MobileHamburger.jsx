import Link from "next/link";
import Logo from "./Logo";
const MobileHamburger = ({}) => {
    return (
        <>
        	{/*Menu button*/}
            <div className="flex col-span-2 items-center">
                <a className='w-6'>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                    </svg>
                </a>

                <div class="ml-2 h-[30px]">
                    <Link href="/">
                        <a className="inline-block  overflow-hidden">
                            <Logo src='/images/SGB-Logo-Mobile.jpeg' width={150} height={30}/>
                        </a>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default MobileHamburger;