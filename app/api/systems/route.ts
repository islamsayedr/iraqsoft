import { NextResponse } from "next/server";
import { getSystems } from "@/scripts/talkToDBa";

export async function GET(request: Request) {
  return NextResponse.json(await getSystems());
}
