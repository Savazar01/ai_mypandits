import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;
    const userId = formData.get("userId") as string;
    
    if (!file || !userId) {
      return NextResponse.json({ error: "File and userId are required" }, { status: 400 });
    }

    const text = await file.text();
    const lines = text.split("\n").map(l => l.trim()).filter(l => l.length > 0);
    
    const items = [];
    
    // Skip header row if first line contains 'name', 'item', or 'category'
    const startIdx = (lines[0].toLowerCase().includes("name") || lines[0].toLowerCase().includes("item") || lines[0].toLowerCase().includes("category")) ? 1 : 0;

    for (let i = startIdx; i < lines.length; i++) {
        // Safe CSV split that ignores commas inside quotes
        const columns = lines[i].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/).map(c => c.trim().replace(/^"|"$/g, ''));
        
        // Expected format: Category, Goods/Service Name, Price Unit, Description, Currency, Price (6 columns)
        if (columns.length >= 3) {
            const category = columns[0] || "General";
            const name = columns[1];
            const priceUnit = columns.length > 2 ? columns[2] : null;
            const description = columns.length > 3 ? columns[3] : null;
            const currency = columns.length > 4 ? columns[4] : null;
            const priceValue = columns.length > 5 ? columns[5] : "0";
            const price = parseFloat(priceValue) || 0;

            if (name) {
                items.push({
                    userId,
                    category,
                    name,
                    price,
                    priceUnit,
                    description,
                    currency,
                });
            }
        }
    }

    if (items.length > 0) {
      await prisma.catalogItem.createMany({
          data: items
      });
    }

    return NextResponse.json({ success: true, count: items.length });
  } catch (error) {
    console.error("Catalog upload error:", error);
    return NextResponse.json({ error: "Failed to process catalog" }, { status: 500 });
  }
}
