import Link from "next/link";
import Image from "../image";
import Logo from "./header/Logo";

const Footer = () => (
	
	<footer id="footer" class="bg-grey-light mt-20" aria-labelledby="footerHeading">
		<div class="relative container mx-auto pt-12 lg:pt-16 lg:px-8">
			<div class="absolute -top-14 inset-0 mx-auto h-28 w-28 rounded-full flex items-center justify-center bg-grey-light">
				<Link href="/">
					<a class="hover:opacity-50">
						<Logo src="/images/sgb-logo.png" width={112} height={111} alt="footer logo" />
					</a>
				</Link>
            </div>
			<div class="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-10 xl:mt-0 xl:col-span-2">
                <div class="flex flex-col items-center">
                    <h3 class="font-lato text-black font-bold tracking-widest">
                        OUR STORY
                    </h3>
                    <ul class="flex flex-col items-center mt-4 space-y-2.5 font-libre">
                        <li>
                            <a href="https://www.sirgordonbennett.com/about-us/" class="text-s italic hover:font-bold">
                                About Us
                            </a>
                        </li>
                        <li>
                            <a href="https://www.sirgordonbennett.com/made-in-britain-definition/" class="text-s italic hover:font-bold">
                                Our Definition of British Made
                            </a>
                        </li>
                        <li>
                            <a href="https://www.sirgordonbennett.com/green-policy/" class="text-s italic hover:font-bold">
                                Green Policy
                            </a>
                        </li>
                        <li>
                            <a href="https://www.sirgordonbennett.com/contact-us/" class="text-s italic hover:font-bold">
                                Contact Us
                            </a>
                        </li>
                        <li>
                            <a href="https://www.sirgordonbennett.com/jobs/" class="text-s italic hover:font-bold">
                                Jobs
                            </a>
                        </li>
                        <li>
                            <a href="https://www.sirgordonbennett.com/work-with-us/" class="text-s italic hover:font-bold">
                                Work with us
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="flex flex-col items-center">
                    <h3 class="font-lato text-black font-bold tracking-widest">
                        SUPPORT
                    </h3>
                    <ul class="flex flex-col items-center mt-4 space-y-2.5 font-libre">
                        <li>
                            <a href="mailto:support@sirgordonbennett.com" class="text-s italic hover:font-bold">
                                support@sirgordonbennett.com
                            </a>
                        </li>
                        <li>
                            <a href="https://www.sirgordonbennett.com/faqs/" class="text-s italic hover:font-bold">
                                FAQS
                            </a>
                        </li>
                        <li>
                            <a href="https://www.sirgordonbennett.com/delivery-returns/" class="text-s italic hover:font-bold">
                                Delivery & Returns
                            </a>
                        </li>
                        <li>
                            <a href="https://www.sirgordonbennett.com/terms-conditions/" class="text-s italic hover:font-bold">
                                Terms & Conditions
                            </a>
                        </li>
                        <li>
                            <a href="https://www.sirgordonbennett.com/privacy-policy/" class="text-s italic hover:font-bold">
                                Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a href="https://www.sirgordonbennett.com/page-sitemap.xml" class="text-s italic hover:font-bold">
                                Sitemap
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="flex flex-col items-center">
                    <h3 class="font-lato text-black font-bold tracking-widest">
                        MY ACCOUNT
                    </h3>
                    <ul class="flex flex-col items-center mt-4 space-y-2.5 font-libre">
						<li>
							<a href="/register/" class="text-s italic hover:font-bold">
								Log In
							</a>
						</li>
						<li>
							<a href="/my-account/" class="text-s italic hover:font-bold">
								Sign Up
							</a>
						</li>
                        <li>
                            <a href="https://www.sirgordonbennett.com/wishlist/" class="text-s italic hover:font-bold">
                                Wishlist
                            </a>
                        </li>
                        <li>
                            <a href="https://www.sirgordonbennett.com/my-account/orders/" class="text-s italic hover:font-bold">
                                Order History
                            </a>
                        </li>
                        <li>
                            <a href="https://www.sirgordonbennett.com/friend-of-sir-gordon/" class="text-s italic hover:font-bold">
                                Friends of Sir Gordon
                            </a>
                        </li>
                        <li>
                            <a href="https://uk.trustpilot.com/review/sirgordonbennett.com" class="text-s italic hover:font-bold">
                                Read our TrustPilot reviews
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="flex flex-col items-center">
                    <h3 class="font-lato text-black font-bold tracking-widest">
                        SOCIAL
                    </h3>
                    <ul class="flex flex-col items-center mt-4 space-y-5 font-libre">
                        <li>
                            <ul class="flex space-x-2">
                                <li>
                                    <a href="https://twitter.com/SirGBennett" class="flex items-center justify-center w-8 h-8 rounded-full bg-black hover:text-sgb-pink text-white">
                                        <i class="fab fa-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.facebook.com/SirGordonBennett/" class="flex items-center justify-center w-8 h-8 rounded-full bg-black hover:text-sgb-pink text-white">
                                        <i class="fab fa-facebook-f"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/sirgordonbennett/" class="flex items-center justify-center w-8 h-8 rounded-full bg-black hover:text-sgb-pink text-white">
                                        <i class="fab fa-instagram"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://open.spotify.com/user/q2hyvyys6j85v8x517uj5qmam?si=j13gX4-wQLWMHi-9PspY9g" class="flex items-center justify-center w-8 h-8 rounded-full bg-black hover:text-sgb-pink text-white">
                                        <i class="fab fa-spotify"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://open.spotify.com/user/q2hyvyys6j85v8x517uj5qmam?si=j13gX4-wQLWMHi-9PspY9g" class="flex items-center justify-center w-8 h-8 rounded-full bg-black hover:text-sgb-pink text-white">
                                        <i class="fab fa-youtube"></i>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="https://www.sirgordonbennett.com/photographic-attribution/" class="text-s italic hover:text-sgb-pink">
                                <span class="font-libre text-base">Photographic</span>
                                <span class="-ml-1 font-lato font-bold">ATTRIBUTIONS</span>
                            </a>
                        </li>
                        <li>
							<Image src="/images/paypal-logo.png" width={283} height={82} alt="Paypal - pay in 3"/>
						</li>
                    </ul>
                </div>
            </div>
		</div>
	</footer>	
);

export default Footer;
