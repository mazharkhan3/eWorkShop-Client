export class Customer {
  UserID: bigint;
  Username: string;
  Phonenumber: bigint;
  Password: string;
  Email: string;
  UserTypeId: number;
  CustomerGroupID: bigint;
  Address: string;
  Zip: string;
  Km: number;
  Note: string;
  CreatedDate: Date;
  CreatedBy: bigint;
  UpdatedDate: Date;
  UpdatedBy: Date;
  IsArchived: boolean;
}
