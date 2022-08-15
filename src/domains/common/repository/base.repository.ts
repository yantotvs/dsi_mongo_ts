export type FilterOptions = Record<string, unknown>;

export type WithId<T> = { id: string } & T;

export interface IBaseRepository<DatabaseDTO, DatabaseCreateDTO> {
  create(data: DatabaseCreateDTO): Promise<WithId<DatabaseDTO>>;
  findOne(options: FilterOptions): Promise<WithId<DatabaseDTO> | undefined>;
  find(options: FilterOptions): Promise<WithId<DatabaseDTO>[]>;
  deleteAll(): Promise<void>;
}

export abstract class BaseRepository<DatabaseDTO, DatabaseCreateDTO = DatabaseDTO>
  implements IBaseRepository<DatabaseDTO, DatabaseCreateDTO>
{
  public abstract create(data: DatabaseCreateDTO): Promise<WithId<DatabaseDTO>>;

  public abstract findOne(options: FilterOptions): Promise<WithId<DatabaseDTO> | undefined>;

  public abstract find(filter: FilterOptions): Promise<WithId<DatabaseDTO>[]>;

  public abstract deleteAll(): Promise<void>;
}
