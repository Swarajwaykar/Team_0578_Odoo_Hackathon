import { connectToDB } from '@/lib/mongodb';
import mongoose from 'mongoose';
import { NextResponse } from 'next/server';

const ProductSchema = new mongoose.Schema({
  title: String,
  price: Number,
  category: String,
  color: String,
  condition: String,
}, { timestamps: true });

const Product = mongoose.models.Product || mongoose.model('Product', ProductSchema);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    await connectToDB();
    const product = await Product.create(body);
    return NextResponse.json(product);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to save product' }, { status: 500 });
  }
}
