import React from 'react';

// import { Container } from './styles';

const PedidoItem: React.FC = () => {
    return (
        <div className="lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-gray-900 py-5 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-8">
                <div className="mx-auto max-w-xs px-8">
                    <p className="text-base font-semibold text-gray-600">Pedido de material de eletricidade</p>
                    <p className="mt-6 flex items-baseline justify-center gap-x-2">
                        <span className="text-5xl font-bold tracking-tight text-gray-700">$349</span>
                        <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">USD</span>
                    </p>
                    <p className="mt-6 flex items-baseline justify-center gap-x-2">
                        <span className="text-3xl  tracking-tight text-red-400 font-bold">$50</span>
                        <span className="text-sm  leading-6 tracking-wide text-red-400 font-bold">USD</span>
                    </p>
                    <a href="#" className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold
                     text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                      focus-visible:outline-indigo-600">Em compra</a>
                    <p className="mt-6 text-xs leading-5 text-gray-600">Este pedido está agora na fase de compras.</p>
                </div>
            </div>
        </div>
    );
}

export default PedidoItem;