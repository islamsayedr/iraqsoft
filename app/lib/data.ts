
import { sql } from "@vercel/postgres";
import {
  // CustomerField,
  // CustomersTableType,
  // InvoiceForm,
  // InvoicesTable,
  // LatestInvoiceRaw,
  // User,
  // Revenue,
  Updates,
} from "./definitions";
// import { formatCurrency } from './utils';

export async function fetchUpdates(): Promise<Updates[]> {
  try {
    const data = await sql<Updates>`
    SELECT id, date, title, des, cover
    FROM updates`;

    const latestUpdates = data.rows;

    return latestUpdates;
  } catch (error) {
    console.error("Database Error:", error);
    return [];
    // throw new Error("Failed to fetch the latest updates.");
  }
}


