import { NextResponse } from "next/server";
import { getLatestUpdates } from "@/app/lib/talkToDBa";

export async function GET(request: Request) {
  return NextResponse.json(await getLatestUpdates());
}
