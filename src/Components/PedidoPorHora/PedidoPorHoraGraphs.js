import React from 'react';
import styles from './PedidoPorHoraGraphs.module.css';
import Chart from 'react-google-charts';

export const PedidoPorHoraGraphs = ({ data }) => {
  //  const [graphPie, setGraphPie] = React.useState([]);
  const [graphGroup, setGraphGroup] = React.useState([]);
  const [graphGroupP, setGraphGroupP] = React.useState([]);
  const [quantidadePedidoTotal, setQuantidadePedidoTotal] = React.useState(0);

  React.useEffect(() => {
    const temPedido = (modelo) => {
      var pedidos;
      const dados = data.filter((item) => item.tipo === modelo);
      if (dados.length > 0) {
        pedidos = {
          titulo: modelo === 'F.V.' ? 'Pré venda' : 'Pronta entrega',
          quantidadePedido: dados
            .map(({ quantidadePedido }) => Number(quantidadePedido))
            .reduce((a, b) => a + b),
        };
      } else {
        pedidos = null;
      }
      return pedidos;
    };
    const pedidoForcaVendas = temPedido('F.V.');
    const pedidoProntaEntrega = temPedido('P.E.');

    const pedidos = [
      pedidoForcaVendas != null && pedidoForcaVendas,
      pedidoProntaEntrega != null && pedidoProntaEntrega,
    ];

    console.log(pedidos);

    /*  const graphData = pedidos
      .filter((item) => item !== false)
      .map((item) => {
        return {
          x: item.quantidadePedido,
          y: item.quantidadePedido,
        };
      });*/
    const graphDataGroup = data.filter((item) => item.tipo === 'F.V.');
    const graphDataGroupP = data.filter((item) => item.tipo === 'P.E.');

    setQuantidadePedidoTotal(
      data
        .map(({ quantidadePedido }) => Number(quantidadePedido))
        .reduce((a, b) => a + b),
    );

    //  setGraphPie(graphData);
    setGraphGroup(graphDataGroup);
    setGraphGroupP(graphDataGroupP);

    console.log(graphDataGroup);
    console.log(graphDataGroupP);
  }, [data]);
  return (
    <div>
      <div
        className={`${styles.total} ${styles.graphItem} ${styles.graph} animeLeft`}
      >
        <p>Total de Pedidos: {quantidadePedidoTotal}</p>
      </div>
      <div className={styles.graphGroup}>
        <div className={styles.graphItem}>
          <Chart
            width={'500px'}
            height={'300px'}
            chartType="Bar"
            loader={<div>Loading Chart</div>}
            data={[['Quantidade Pedido', 'Hora Inclusao'], graphGroup]}
            options={{
              title: 'Pedidos por Hora',
              vAxis: { title: 'Horas' },
              hAxis: { title: 'Quantidade de pedidos' },
              seriesType: 'bars',
              series: { 5: { type: 'line' } },
            }}
            //rootProps={{ 'data-testid': '1' }}
          />
        </div>
      </div>

      <section className={`${styles.graph} animeLeft`}>
        <div className={styles.graphItem}></div>
      </section>
    </div>
  );
};

export default PedidoPorHoraGraphs;
