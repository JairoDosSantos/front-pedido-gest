import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
const Chart = dynamic(() => import('react-apexcharts'), {
    ssr: false
})


const AnalisePC: NextPage = () => {

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
            categories: ['ELETRICIDADE', 'HIDRÁULICA', 'AVAC', 'TOSCOS'],
        },
        series: [
            {
                name: "series-1",
                data: [30, 40, 45, 50]
            }
        ]
    }

    const donutOptions = {
        series: [44, 55],
        labels: ['COMPRADO', 'NÃO COMPRADO']
    }


    return (
        <>
            <Head>
                <title>Controle de Pedidos | Análise</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="container w-full mx-auto pt-36 flex flex-col lg:flex-row gap-4 flex-wrap">
                <div className='my-5 w-full flex flex-col lg:flex-row justify-end gap-2'>
                    <select className='bg-gray-900 text-sm text-gray-400 transition border border-gray-800 focus:outline-none
                     focus:border-gray-600 rounded py-1 px-2 pl-10 appearance-none leading-normal cursor-pointer'>
                        <option value="">SINSE KILAMBA</option>
                        <option value="">SINSE MAIANGA</option>
                        <option value="">CASA DE JOGO GANHA BUÉ - MUTAMBA</option>
                    </select>
                    <input
                        type="month"
                        className='bg-gray-900 text-sm text-gray-400 transition border border-gray-800 focus:outline-none
                     focus:border-gray-600 rounded py-1 px-2 pl-10 appearance-none leading-normal'
                    />
                </div>

                <div className='flex flex-col lg:flex-row gap-4 justify-center my-10 '>
                    <div className='bg-gray-900  rounded-md '>
                        <div className='border-b-2 border-gray-600 py-5 text-gray-600 font-extrabold text-lg uppercase px-4'>
                            <h3>Pedidos de Compras (GASTOS) / ESPECIALIDADE</h3>
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
                            <h3>COMPRADOS vs NÃO COMPRADOS</h3>
                        </div>
                        <div className='p-6'>
                            <Chart
                                options={donutOptions}
                                series={donutOptions.series}
                                height={250}
                                width={720}
                                type={'donut'}

                            />
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default AnalisePC;