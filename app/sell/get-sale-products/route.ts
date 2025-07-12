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

export async function GET() {
  try {
    await connectToDB();
    const products = await Product.find().sort({ createdAt: -1 });
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch' }, { status: 500 });
  }
}
