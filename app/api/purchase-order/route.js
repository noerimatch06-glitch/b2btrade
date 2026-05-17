import { prisma } from "@/lib/prisma";

export async function POST(req) {
  try {
    const body = await req.json();

    const newPO = await prisma.purchaseorder.create({
      data: {
        poNumber: body.poNumber,
        sender: body.sender,
        poRecipient: body.poRecipient,
        deliveryLocation: body.deliveryLocation,
        status: body.status,
        paymentTerm: body.paymentTerm,
        poDate: body.poDate,
        deliveryDate: body.deliveryDate,
        totalPpn: Number(body.totalPpn) || 0,
        totalOrder: Number(body.totalOrder) || 0,
        totalQty: Number(body.totalQty) || 0,
        totalDiscount: Number(body.totalDiscount) || 0,
        expiredDate: body.expiredDate,
      },
    });

    console.log("SUCCESS SAVE:", newPO);

    return Response.json({
      success: true,
      message: "PO Saved Successfully",
      data: newPO,
    });
  } catch (error) {
    console.log("ERROR SAVE:", error);

    return Response.json({
      success: false,
      message: "Save Failed",
    });
  }
}
