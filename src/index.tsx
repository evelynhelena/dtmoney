import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs'
import { App } from './App';

createServer({

  models: {
    transition: Model,
  },

  seeds(server) {
    server.db.loadData({
      transitions: [
        {
        id:1,
        title:'Freelance WebSite',
        type:'deposit',
        category: 'Dev',
        amount:6000,
        createdAt: new Date('2021-02-12 09:00:00')
      },
      {
        id:2,
        title:'Pagar conta de luz',
        type:'withdraw',
        category: 'Contas de consumo',
        amount:450,
        createdAt: new Date('2021-03-18 11:00:00')
      }
    ]
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transition');
    })

    this.post('/transactions', (scheme, request) => {
      const data = JSON.parse(request.requestBody);
      return scheme.create('transition', data);
    })

  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);