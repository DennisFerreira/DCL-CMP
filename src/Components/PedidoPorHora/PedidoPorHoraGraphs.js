import React from 'react';
import styles from './PedidoPorHoraGraphs.module.css';
import Chart from 'react-google-charts';

export const PedidoPorHoraGraphs = ({ data }) => {
  const [graphGroup, setGraphGroup] = React.useState([]);
  const [quantidadePedidoTotal, setQuantidadePedidoTotal] = React.useState(0);

  React.useEffect(() => {
    console.log(data);

    const graphDataGroup = data.map((item) => {
      return {
        horaInclusao: item.hora,
        preVenda: item.preVenda,
        prontaEntrega: item.prontaEntrega,
      };
    });

    setQuantidadePedidoTotal(
      data
        .map(({ preVenda, prontaEntrega }) => Number(preVenda, prontaEntrega))
        .reduce((a, b) => a + b),
    );

    setGraphGroup(graphDataGroup);
    console.log(graphDataGroup);
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
            chartType="ColumnChart"
            loader={<div>Loading Chart</div>}
            data={[
              ['Hora Inclusão', 'Pre Venda', 'Pronta Entrega'],
              graphGroup,
            ]}
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
