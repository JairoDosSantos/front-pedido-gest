import type { NextPage } from 'next';
import Head from 'next/head';
import { FaCaretDown, FaExchangeAlt, FaTasks, FaUsers, FaWallet } from 'react-icons/fa';
import { MdOutlinePendingActions, MdShoppingBag, MdTimer } from 'react-icons/md';
import MetricCard from '../components/MetricCard';

import dynamic from 'next/dynamic';
import MyTable from '../components/MyTable';

const Chart = dynamic(() => import('react-apexcharts'), {
    ssr: false
})

const Home: NextPage = () => {

    const options = {
        options: {
            chart: {
                id: "basic-bar",
                strocked: true,
                toolbar: {
                    show: false
                }
            },
            zoom: {
                show: false
            },
            grid: {
                show: false
            },
            stoke: {
                width: 3
            },
            plotOptions: {
                bar: {
                    horizontal: false
                }
            }
        },
        xaxis: {
            categories: ['SINSE MAIANGA', 'SINSE KILAMBA', 'CONDOMÍNIO 5', 'CONDOMÍNIO 6'],
        },
        series: [
            {
                name: "series-1",
                data: [30, 40, 45, 50]
            }
        ]
    }

    return (
        <>
            <Head>
                <title>Controle de Pedidos</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="container w-full mx-auto pt-28">
                <div className="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">
                    <div className="flex flex-wrap">
                        <MetricCard
                            description='$3249'
                            title='TOTAL NO CARTÃO'
                            iconElement={<FaWallet className='text-6xl text-white' />}
                            color="bg-green-600"
                            iconAlternative={<FaCaretDown className='text-2xl text-green-600' />}
                        />

                        <MetricCard
                            description='249'
                            title='TOTAL DE USUÁRIOS'
                            iconElement={<FaUsers className='text-6xl text-white' />}
                            color="bg-pink-600"
                            iconAlternative={<FaExchangeAlt className='text-3xl text-pink-600' />}
                        />
                        <MetricCard
                            description='256'
                            title='TOTAL PEDIDOS'
                            iconElement={<FaTasks className='text-6xl text-white' />}
                            color="bg-blue-600"
                            iconAlternative={<FaExchangeAlt className='text-3xl text-blue-600' />}
                        />
                        <MetricCard
                            description='30'
                            title='TOTAL DE PEDIDOS PENDENTES'
                            iconElement={<MdOutlinePendingActions className='text-6xl text-white' />}
                            color="bg-red-600"
                            iconAlternative={<MdTimer className='text-3xl text-red-600' />}
                        />
                        <MetricCard
                            description='249'
                            title='PEDIDOS DE COMPRA EM ATRASO'
                            iconElement={<MdShoppingBag className='text-6xl text-white' />}
                            color="bg-orange-600"
                            iconAlternative={<MdTimer className='text-3xl text-orange-600' />}
                        />
                        <MetricCard
                            description='249'
                            title='TOTAL DE PEDIDOS DE COMPRA'
                            iconElement={<MdShoppingBag className='text-6xl text-white' />}
                            color="bg-purple-600"
                            iconAlternative={<FaExchangeAlt className='text-3xl text-purple-600' />}
                        />

                    </div>

                    <div className='flex flex-col lg:flex-row gap-4 justify-center my-10 '>
                        <div className='bg-gray-900  rounded-md '>
                            <div className='border-b-2 border-gray-600 py-5 text-gray-600 font-extrabold text-lg uppercase px-4'>
                                <h3>Pedidos de Compras / centro de custo</h3>
                            </div>
                            <div className='p-6'>
                                <Chart
                                    options={options}
                                    series={options.series}
                                    height={250}
                                    width={720}
                                    type={'bar'}

                                />
                            </div>
                        </div>
                        <div className='bg-gray-900  rounded-md '>
                            <div className='border-b-2 border-gray-600 py-5 text-gray-600 font-extrabold text-lg uppercase px-4'>
                                <h3>Pedidos / centro de custo</h3>
                            </div>
                            <div className='p-6'>
                                <Chart
                                    options={options}
                                    series={options.series}
                                    height={250}
                                    width={720}
                                    type={'bar'}

                                />
                            </div>
                        </div>

                    </div>
                    <MyTable title='Pedidos de Compra' />

                </div>
            </main>


        </>
    )
}

export default Home
