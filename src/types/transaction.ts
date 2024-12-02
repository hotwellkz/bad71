import { User } from './user';

export interface Transaction {
  id: string;
  fromUser: string;
  toUser: string;
  amount: number;
  description: string;
  date: any;
  type: 'income' | 'expense';
  categoryId: string;
  isSalary?: boolean;
}

export interface GroupedTransactions {
  [key: string]: Transaction[];
}