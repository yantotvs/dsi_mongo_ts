import { DefaultMongoDBRepository } from '../../common/repository/default-mongodb.repository';
import { IShippingTable, ShippingTableSchema } from '../schemas/shipping-table.schema';

export class ShippingTableRepository extends DefaultMongoDBRepository<IShippingTable> {
  constructor(shippingTableModel = ShippingTableSchema) {
    super(shippingTableModel);
  }

  async findAllConfigurations(shippingTableId: string) {
    // TODO procurar configuracoes da tabela
    return this.find({ id: shippingTableId });
  }
}
