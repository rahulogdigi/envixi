export interface User {
  _id: string;
  role: string;
  email: string;
  last_name?: string;
  first_name?: string;
  company_ids?: Array<1>;
}
