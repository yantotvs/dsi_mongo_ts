import { Router } from 'express';

import { ShippingTableRepository } from './repository/shipping-table.repository';

const router = Router();

router.get('/tabelasFrete', async (_request, response) => {
  const rep = new ShippingTableRepository();

  const table = await rep.create({
    name: 'Tabela 1'
  });

  return response.send(`<h1>Tabela criada com nome ${table.name} e id ${table.id}</h1>`);
});

export default router;
