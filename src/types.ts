export type Cat = Readonly<{
  id: string;
  name: string;
}>;

export type CatListType = ReadonlyArray<Cat>;
export type PaginatedListResult<T> = Readonly<{
  results: ReadonlyArray<T>;
  hasNextPage?: boolean;
}>;

export type CatListPaginatedResult = PaginatedListResult<CatListType>;
