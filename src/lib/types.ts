export interface Book {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  created_at: string;
}

export interface UpsertResult {
  affectedRows: number;
  insertId: number;
  warningStatus: number;
}
