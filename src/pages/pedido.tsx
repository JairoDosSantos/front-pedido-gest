import { NextPage } from 'next';
import PedidoItem from '../components/PedidoItem';

// import { Container } from './styles';

const Pedido: NextPage = () => {
    return (
        <main className="container w-full mx-auto pt-36 flex flex-col lg:flex-row gap-4 flex-wrap">
            <PedidoItem />
            <PedidoItem />
            <PedidoItem />
            <PedidoItem />
        </main>
    );
}

export default Pedido;