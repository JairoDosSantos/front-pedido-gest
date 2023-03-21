import { NextPage } from 'next';
import PedidoItem from '../components/PedidoItem';

// import { Container } from './styles';

const Pedido: NextPage = () => {
    return (
        <main className="container w-full mx-auto pt-32">
            <PedidoItem />
        </main>
    );
}

export default Pedido;