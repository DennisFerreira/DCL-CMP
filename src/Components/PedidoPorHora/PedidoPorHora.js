import React from 'react';
import { PEDIDOS_GET } from '../../api';
import { PEDIDOS_HOJE_GET } from '../../api';
import useFetch from '../../Hooks/useFetch';
const PedidoPorHoraGraphs = React.lazy(() => import('./PedidoPorHoraGraphs'));

const PedidoPorHora = () => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    async function getData() {
      const { url, options } = PEDIDOS_HOJE_GET();
      await request(url, options);
    }
    getData();
  }, [request]);
  if (loading) return <div>Carregando...</div>;
  if (error) return <div>Ocorreu um erro...</div>;
  if (data)
    return (
      <React.Suspense fallback={<div></div>}>
        <PedidoPorHoraGraphs data={data} />
      </React.Suspense>
    );
  else return null;
};

export default PedidoPorHora;
