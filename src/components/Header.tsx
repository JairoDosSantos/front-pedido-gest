import Image from 'next/image';
import React, { useState } from 'react';
import { FaHome, FaShoppingBag, FaTasks, FaWallet } from 'react-icons/fa';
import { FiUser } from 'react-icons/fi';
import { GoGraph } from 'react-icons/go';
import { IoIosArrowDown } from 'react-icons/io';
import { MdNotificationsActive } from 'react-icons/md';
import { RiLogoutCircleFill } from 'react-icons/ri';
import LogoNoah from '../assets/Noah.png';
const Header: React.FC = () => {

    const [showNotificationMenu, setShowNotificationMenu] = useState(false)
    const [showNavMenu, setShowNavMenu] = useState(false)

    const showMenuNotification = () => {
        setShowNotificationMenu(!showNotificationMenu)
    }

    const handleShowNavMenu = () => {
        setShowNavMenu(!showNavMenu)
    }

    return (
        <>
            <nav

                className="bg-gray-900 fixed w-full z-10 top-0 shadow py-4">


                <div className="w-full container mx-auto flex flex-wrap items-center mt-0 pt-3 pb-3 md:pb-0">

                    <div className="w-1/2 pl-2 md:pl-0">
                        <a className="text-gray-100 flex items-end space-x-3 text-base xl:text-xl no-underline hover:no-underline font-bold" href="#">
                            <Image
                                src={LogoNoah}
                                className="h-8 w-24"
                                loading='lazy'
                                alt='Logotipo da NOAH' />
                            <span>
                                Controle de Pedidos
                            </span>
                        </a>
                    </div>
                    <div className="w-1/2 pr-0">
                        <div className="flex relative  float-right">

                            <div className="relative text-sm text-gray-100">
                                <button
                                    onClick={showMenuNotification}
                                    className="flex items-center focus:outline-none mr-3 space-x-2">
                                    <FiUser height={100} width={100} />
                                    <span className="hidden md:inline-block text-gray-100">Olá, Jairo dos Santos</span>
                                    <IoIosArrowDown />
                                </button>
                                {
                                    showNotificationMenu && (
                                        <div
                                            className="bg-gray-900 rounded shadow-md  absolute mt-12 top-0 right-0 min-w-full overflow-auto z-30 ">
                                            <ul className="list-reset">
                                                <li className='flex items-center px-2 hover:bg-gray-800 no-underline hover:no-underline' >
                                                    <FiUser />
                                                    <a href="#" className="px-4 py-2 block text-gray-100 ">
                                                        Minha conta</a>
                                                </li>
                                                <li className='flex items-center px-2 hover:bg-gray-800 no-underline hover:no-underline'>
                                                    {
                                                        <div className='relative'>
                                                            <span className="animate-ping absolute inline-flex h-2 w-2 -top-1 right-0 rounded-full bg-red-700 opacity-75" />
                                                            <MdNotificationsActive className='animate-pulse text-red-700' />
                                                        </div>
                                                    }
                                                    <a href="#" className="px-4 py-2 block text-gray-100 ">Notoficação</a>
                                                </li>
                                                <li>
                                                    <hr className="border-t mx-2 border-gray-400" />

                                                </li>
                                                <li className='flex items-center px-2 hover:bg-gray-800 no-underline hover:no-underline'>
                                                    <RiLogoutCircleFill />
                                                    <a href="#" className="px-4 py-2 block text-gray-100 ">
                                                        Sair
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    )
                                }

                            </div>


                            <div className="block lg:hidden pr-4">
                                <button
                                    onClick={handleShowNavMenu}
                                    className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-100 hover:border-teal-500 appearance-none focus:outline-none">
                                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <title>Menu</title>
                                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                    </div>


                    <div className={`w-full flex-grow lg:flex lg:items-center lg:w-auto ${!showNavMenu ? 'hidden' : ''}  mt-2 lg:mt-0 bg-gray-900 z-20`} id="nav-content">
                        <ul className="list-reset lg:flex flex-1 items-center px-4 md:px-0">
                            <li className="mr-6 my-2 md:my-0">
                                <a href="#"
                                    className="flex items-center space-x-2 py-1 md:py-3 pl-1 align-middle text-blue-400 no-underline
                                     hover:text-gray-100 border-b-2 border-blue-400 hover:border-blue-400">
                                    <FaHome />
                                    <span className="pb-1 md:pb-0 text-sm">Página Inicial</span>
                                </a>
                            </li>
                            <li className="mr-6 my-2 md:my-0 relative">

                                <span className="animate-ping absolute inline-flex h-2 w-2 top-2 right-0 rounded-full bg-red-700 opacity-75" />

                                <a href="#" className="flex items-center space-x-2 py-1 md:py-3 pl-1 align-middle text-gray-500 no-underline
                                 hover:text-gray-100 border-b-2 border-gray-900  hover:border-pink-400">

                                    <FaTasks />
                                    <span className="pb-1 md:pb-0 text-sm">Pedidos</span>
                                </a>
                            </li>
                            <li className="mr-6 my-2 md:my-0 relative">
                                <span className="animate-ping absolute inline-flex h-2 w-2 top-2 right-0 rounded-full bg-red-700 opacity-75" />
                                <a href="#" className="flex items-center space-x-2 py-1 md:py-3 pl-1 align-middle text-gray-500 no-underline
                                 hover:text-gray-100 border-b-2 border-gray-900  hover:border-purple-400">
                                    <FaShoppingBag />
                                    <span className="pb-1 md:pb-0 text-sm">Pedidos de Compra</span>
                                </a>
                            </li>
                            <li className="mr-6 my-2 md:my-0">
                                <a href="#" className="flex items-baseline space-x-2 py-1 md:py-3 pl-1 align-middle text-gray-500 no-underline
                                 hover:text-gray-100 border-b-2 border-gray-900  hover:border-green-400">
                                    <GoGraph />
                                    <span className="pb-1 md:pb-0 text-sm">Análise</span>
                                </a>
                            </li>
                            <li className="mr-6 my-2 md:my-0">
                                <a href="#" className="flex items-center space-x-2 py-1 md:py-3 pl-1 align-middle text-gray-500 no-underline
                                 hover:text-gray-100 border-b-2 border-gray-900  hover:border-red-400">
                                    <FaWallet />
                                    <span className="pb-1 md:pb-0 text-sm">Pagamentos</span>
                                </a>
                            </li>
                        </ul>

                        <div className="relative pull-right pl-4 pr-4 md:pr-0">
                            <input
                                type="search"
                                placeholder="Pesquisar"
                                className="w-full bg-gray-900 text-sm text-gray-400 transition border border-gray-800 focus:outline-none focus:border-gray-600 rounded py-1 px-2 pl-10 appearance-none leading-normal" />
                            <div className="absolute search-icon top-[0.375rem] left-[1.75rem]">
                                <svg className="fill-current pointer-events-none text-gray-500 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
                                </svg>
                            </div>
                        </div>

                    </div>

                </div>
            </nav>
        </>
    );
}

export default Header;