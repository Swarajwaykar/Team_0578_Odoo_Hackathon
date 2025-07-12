// app/api/recommend-bot/route.ts
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();
  const { type, color, condition } = body;

  let suggestions = [];

  if (type === 'top' && color === 'blue') {
    suggestions.push("Pair with white or beige jeans.");
  } else if (type === 'sari') {
    suggestions.push("Add silver bangles or ethnic jhumkas.");
  } else if (color === 'black' && condition === 'new') {
    suggestions.push("Perfect for evening wear — match with red or grey.");
  } else {
    suggestions.push("Try neutral pants, white shirts, or muted tones.");
  }

  return NextResponse.json({ suggestions });
}
