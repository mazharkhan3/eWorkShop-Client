import { TemplateType } from "./TemplateType";
import { TicketInvoice } from "./TicketInvoice";

export class Ticket {
  TicketID: bigint;
  CustomerID: bigint;
  Deccription: string;
  PickupTime: Date;
  CreatedDate: Date;
  CreatedBy: bigint;
  UpdatedDate: Date;
  UpdatedBy: bigint;
  IsArchived: boolean;
  TemplateTypes: TemplateType[];
  TicketInvoices: TicketInvoice[];
}
