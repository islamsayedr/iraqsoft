import { NextResponse } from "next/server";
import { getUpdates } from "@/scripts/talkToDBa";

export async function GET(request: Request) {
  return NextResponse.json(await getUpdates());
}
