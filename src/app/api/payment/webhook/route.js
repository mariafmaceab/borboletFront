import { Payment } from "mercadopago";
import { NextResponse } from "next/server";
import { mercadopagoClient } from "../../mercadopago";

const paymentClient = new Payment(mercadopagoClient)

export async function POST(request) {
    try {
        const url = new URL(request.url);
        const params = url.searchParams;

        const eventType = params.get("type");
        const paymentId = params.get("data.id");

        console.log("Webhook Event Type:", eventType);
        console.log("Payment ID:", paymentId);

        if (eventType === "payment" && paymentId) {
            const payment = await paymentClient.get({id: paymentId});
            console.log(`Se recibió el pago ${paymentId} por el producto ${payment.description}`)
        }

        return NextResponse.json({ status: "success" });
    } catch (error) {
        console.error("Webhook Error:", error);
        return NextResponse.json({ error: "Webhook processing failed" }, { status: 500 });
    }
}