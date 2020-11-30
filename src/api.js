export const API_URL = 'http://localhost:8080';

export function PEDIDOS_GET() {
  return {
    url: API_URL + '/pedidoPorHora/today',
    option: {
      method: 'GET',
    },
  };
}

export function PEDIDOS_HOJE_GET() {
  return {
    url: API_URL + '/pedidoPorHora/today',
    option: {
      method: 'GET',
    },
  };
}
export function PEDIDOS_HOJE_GRAPH_GET() {
  return {
    url: API_URL + '/pedidoPorHora/todayGraph',
    option: {
      method: 'GET',
    },
  };
}
