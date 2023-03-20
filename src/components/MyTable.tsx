import React from 'react';

// import { Container } from './styles';
interface MyTableProps {
    title: string
}
const MyTable: React.FC<MyTableProps> = ({ title }: MyTableProps) => {
    return (
        <>
            <div className="bg-gray-900 border border-gray-800 rounded shadow">
                <div className="border-b border-gray-800 p-3">
                    <h5 className="font-bold uppercase text-gray-600">{title}</h5>
                </div>
                <div className="p-5">
                    <table className="w-full p-5 text-gray-700">
                        <thead>
                            <tr>
                                <th className="text-left text-gray-600 uppercase">Pedido nº</th>
                                <th className="text-left text-gray-600 uppercase">Centro de Custo</th>
                                <th className="text-left text-gray-600 uppercase">Estado</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>001</td>
                                <td className='uppercase'>SINSE KILAMBA</td>
                                <td className='uppercase'>Em compra</td>
                            </tr>
                            <tr>
                                <td>002</td>
                                <td className='uppercase'>SINSE MAIANGA</td>
                                <td className='uppercase'>PENDENTE</td>
                            </tr>
                            <tr>
                                <td>003</td>
                                <td className='uppercase'>CONDOMÍNIO 6</td>
                                <td className='uppercase'>STAND BY</td>
                            </tr>
                        </tbody>
                    </table>

                    <p className="py-2">
                        <a href="#" className="text-white">Ver mais pedidos...</a></p>

                </div>
            </div>
        </>
    );
}

export default MyTable;