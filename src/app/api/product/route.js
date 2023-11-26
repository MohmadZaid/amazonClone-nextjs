import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch("https://fakestoreapiserver.reactbd.com/tech");
  const productData = await res.json();
  return NextResponse.json(productData);
}