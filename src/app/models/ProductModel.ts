export class ProductModel {
  ProductID: bigint;
  ProductName: string;
  ProductPrice: number;
  Quantity: bigint;
  CreatedDate: Date;
  CreatedBy: bigint;
  UpdatedDate: Date;
  UpdatedBy: bigint;
  IsArchived: boolean;
}
