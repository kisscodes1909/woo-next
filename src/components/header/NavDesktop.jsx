import { nanoid } from 'nanoid'
import { useState } from 'react'
import MegaMenuSubItem from './MegaMenuSubItem';
import MegaMenuSubPanel from './MegaMenuSubPanel';
import Link from 'next/link';

const menuData = [
    {
        id: nanoid(),
        type: 'parent',
        path: '/x1',
        name: 'Home',
        sections: [
            {
                title: 'Home in new 1',
                items: [
                    {
                        name: 'New in home1',
                        path: '/x2/'
                    },
                    {
                        name: 'New in home1',
                        path: '/x2/'
                    },
                    {
                        name: 'New in home1',
                        path: '/x2/'
                    },
                ]
            },
            {
                title: 'Home in new 2',
                items: [
                    {
                        name: 'New in home1',
                        path: '/x2/'
                    },
                    {
                        name: 'New in home1',
                        path: '/x2/'
                    },
                    {
                        name: 'New in home1',
                        path: '/x2/'
                    },
                ]
            },
            {
                title: 'Home in new 2',
                items: [
                    {
                        name: 'New in home1',
                        path: '/x2/'
                    },
                    {
                        name: 'New in home1',
                        path: '/x2/'
                    },
                    {
                        name: 'New in home1',
                        path: '/x2/'
                    },
                ]
            },
            {
                title: 'Home in new 2',
                items: [
                    {
                        name: 'New in home1',
                        path: '/x2/'
                    },
                    {
                        name: 'New in home1',
                        path: '/x2/'
                    },
                    {
                        name: 'New in home1',
                        path: '/x2/'
                    },
                ]
            },
            {
                title: 'Home in new 2',
                items: [
                    {
                        name: 'New in home1',
                        path: '/x2/'
                    },
                    {
                        name: 'New in home1',
                        path: '/x2/'
                    },
                    {
                        name: 'New in home1',
                        path: '/x2/'
                    },
                ]
            },
            {
                title: 'Home in new 2',
                items: [
                    {
                        name: 'New in home1',
                        path: '/x2/'
                    },
                    {
                        name: 'New in home1',
                        path: '/x2/'
                    },
                    {
                        name: 'New in home1',
                        path: '/x2/'
                    },
                ]
            }
        ]
    },
    {
        id: nanoid(),
        type: 'parent',
        path: '/x1',
        name: 'Brands',
        sections: [
            {
                title: 'Home in new 2',
                items: [
                    {
                        name: 'New in home1',
                        path: '/x2/'
                    },
                    {
                        name: 'New in home1',
                        path: '/x2/'
                    },
                    {
                        name: 'New in home1',
                        path: '/x2/'
                    },
                    {
                        name: 'New in home1',
                        path: '/x2/'
                    },
                    {
                        name: 'New in home1',
                        path: '/x2/'
                    },
                    {
                        name: 'New in home1',
                        path: '/x2/'
                    },
                ]
            }
        ]
    },
    {
        id: nanoid(),
        type: 'parent',
        path: '/x1',
        name: 'Gifts',
        sections: [
            {
                title: 'Home in new3',
                items: [
                    {
                        name: 'New in home1',
                        path: '/x2/'
                    },
                    {
                        name: 'New in home1',
                        path: '/x2/'
                    },
                    {
                        name: 'New in home1',
                        path: '/x2/'
                    },
                ]
            }
        ]
    }
]

const NavDesktop = () => {

    // const [showMegaMenu, setShowMegaMenu] = useState(false);
    const [megaMenuData, setMegaMenuData] = useState([]);

    function displaySubPanel(id) {
        const megaMenuData = menuData.find(item => item.id === id);
        setMegaMenuData(megaMenuData);
    }

    function hideSubPanel() {
        setMegaMenuData([])
    }

    console.log(megaMenuData);

    return (
        <nav className="sticky relative container w-full order-1 lg:order-2 hidden lg:flex items-center justify-center border-t border-b font-lato">
            <ul className="flex items-center space-x-4 space-x-5">
                {menuData.map(menuItem => <li
                    onMouseEnter={() => displaySubPanel(menuItem.id)}
                    onMouseLeave={() => hideSubPanel(menuItem.id)}
                    key={menuItem.id}>
                        <Link href={menuItem.path}><a className='uppercase px-5 py-3 block'>{menuItem.name}</a></Link>
                        {
                            (megaMenuData.id === menuItem.id && megaMenuData.sections.length > 0)
                            &&
                            (
                                <>
                                    <MegaMenuSubPanel>
                                        {megaMenuData.sections.map(menuSubItem => <MegaMenuSubItem title={menuSubItem.title} items={menuSubItem.items} />)}
                                    </MegaMenuSubPanel>
                                </>
                            )
                        }
                        
                </li>)}    
            </ul>


                    
        </nav>
    )
}

export default NavDesktop;