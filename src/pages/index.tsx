import type { NextPage } from 'next';
import Head from 'next/head';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import LOGO_NOAH from '../assets/Noah.png';
const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false
})

const Login: NextPage = () => {

  return (
    <>
      <Head>
        <title>Controle de Pedidos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container w-full mx-auto pt-28 flex items-center justify-center h-screen text-gray-500">
        <div className="flex items-start  px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal  lg:h-3/5 lg:w-3/4">
          <div className='lg:w-1/2 w-full bg-gray-800 h-full rounded-l text-white hidden lg:flex lg:flex-col'>

            <div className='w-80 mt-20 text-center mx-auto'>
              <h3 className='font-extrabold text-2xl'>Seja Bem-vindo!</h3>
              <p className='mt-6 text-sm'>Para efectuar um pedido de compra de material, por favor acesse o nosso sistema, e efectue o seu pedido!</p>
            </div>
            <div className='mx-auto mt-20'>
              <button
                className='border border-stone-600 px-4 py-2 rounded-full hover:bg-stone-800 animate-pulse '
              >Faça já ...</button>
            </div>
          </div>

          <div className='lg:w-1/2 w-full h-full rounded-r bg-gray-900 text-white p-6'>

            <div className='flex justify-center'>

              <Image
                alt='Logotipo da NOAH'
                src={LOGO_NOAH}
                width={100} />

            </div>

            <div className='w-full mt-20 text-center'>
              <h2 className='font-extrabold text-2xl'>Tela de Acesso ao sistema</h2>
              <p className='my-4 text-sm'>Por favor, insira o seu e-mail e senha para acessar o sistema!</p>
            </div>

            <form className='flex flex-col gap-4 justify-center items-center lg:my-20'>

              <div className='bg-gray-600 rounded flex w-full lg:w-80'>
                <MdEmail className="text-gray-900 text-4xl" />
                <input
                  type="email"
                  className='bg-gray-600 rounded flex w-full lg:w-80 text-xl ring-0 focus:ring-0 text-gray-900 placeholder:text-gray-900'
                  placeholder='E-mail'
                />
              </div>

              <div className='bg-gray-600 rounded flex w-full lg:w-80'>
                <RiLockPasswordFill className="text-gray-900 text-4xl" />
                <input
                  type="password"
                  className='bg-gray-600 rounded flex w-full lg:w-80 text-xl ring-0 focus:ring-0 text-gray-900 placeholder:text-gray-900'
                  placeholder='*************'
                />
              </div>

              <div className='mt-8'>
                <button
                  className='bg-stone-600 px-4 py-2 rounded-full hover:brightness-75'
                >Acessar</button>
              </div>

            </form>
          </div>
        </div>
      </main>


    </>
  )
}

export default Login
