import React from 'react';
import styles from './PedidoPorHoraGraphs.module.css';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import moment from 'moment';

export const PedidoPorHoraGraphs = ({ data }) => {
  const [graphGroup, setGraphGroup] = React.useState([]);
  const [quantidadePedidoTotal, setQuantidadePedidoTotal] = React.useState(0);
  const [timeStamp, setTimeStamp] = React.useState(0);

  React.useEffect(() => {
    const graphDataGroup = data.map((item) => {
      return {
        hora: item.hora,
        preVenda: item.preVenda,
        prontaEntrega: item.prontaEntrega,
      };
    });

    setTimeStamp(moment().format('DD/MM/YYYY HH:mm:ss'));

    setQuantidadePedidoTotal(
      data.map(({ preVenda }) => Number(preVenda)).reduce((a, b) => a + b) +
        data
          .map(({ prontaEntrega }) => Number(prontaEntrega))
          .reduce((a, b) => a + b),
    );

    setGraphGroup(graphDataGroup);
  }, [data]);

  return (
    <div>
      <div
        className={`${styles.total} ${styles.graphItem} ${styles.graph} animeLeft`}
      >
        <p>Total de Pedidos: {quantidadePedidoTotal}</p>
        <br />
        <p className={styles.sincronizacao}>
          Hora de última sincronização: {timeStamp}
        </p>
      </div>
      <div className={styles.graphGroup}>
        <div className={styles.graphItem}>
          <h2>Pedidos por hora</h2>
          <ResponsiveContainer width="100%" height={500}>
            <BarChart
              data={graphGroup}
              margin={{
                top: 50,
                right: 50,
                left: 50,
                bottom: 50,
              }}
            >
              <XAxis dataKey="hora" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="preVenda" name=" Pré venda" fill="#1226ab" />
              <Bar
                dataKey="prontaEntrega"
                name=" Pronta entrega"
                fill="#009c53"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <section className={`${styles.graph} animeLeft`}>
        <div className={styles.graphItem}></div>
      </section>
    </div>
  );
};

export default PedidoPorHoraGraphs;
