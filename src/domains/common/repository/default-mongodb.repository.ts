import { Document, Error, Model } from 'mongoose';

import { BaseRepository, FilterOptions, WithId } from './base.repository';

export interface IBaseModel {}

export abstract class DefaultMongoDBRepository<
  DatabaseDTO extends IBaseModel,
  DatabaseCreateDTO = DatabaseDTO
> extends BaseRepository<DatabaseDTO, DatabaseCreateDTO> {
  constructor(private model: Model<DatabaseDTO>) {
    super();
  }

  async create(data: DatabaseCreateDTO): Promise<WithId<DatabaseDTO>> {
    try {
      const model = new this.model(data);
      const document = await model.save();
      return this.convertToJSON(document);
    } catch (error) {
      this.handleError(error);
    }
  }

  async findOne(options: FilterOptions) {
    const document = await this.model.findOne(options);

    return this.convertToJSON(document);
  }

  async find(filter: FilterOptions) {
    try {
      const documents = await this.model.find(filter);
      return documents.map((document) => this.convertToJSON(document));
    } catch (error) {
      this.handleError(error);
    }
  }

  async deleteAll() {
    this.model.deleteMany();
  }

  protected handleError(error: unknown): never {
    console.warn('Database error: ', error);
    throw new Error('Something unexpected happened to the database');
  }

  protected convertToJSON(document: Document | null): WithId<DatabaseDTO> {
    if (!document) {
      this.handleError('Trying to convert null into JSON');
    }

    return document.toJSON({ flattenMaps: false });
  }
}
