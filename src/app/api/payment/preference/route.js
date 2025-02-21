import { Preference } from 'mercadopago';
import { mercadopagoClient } from '../../mercadopago';

const paymentPreference = new Preference(mercadopagoClient)

export async function POST(request) {
    try {
        let products = await request.json()
        let preference = {
            "items": products.map((product) => {
                return {
                    "id": product.id,
                    "title": product.name,
                    "quantity": product.quantity,
                    "unit_price": product.price
                }
            }),
            "back_urls": {
                "success": process.env.NEXT_PUBLIC_MP_SUCCESS_URL,
                "pending": process.env.NEXT_PUBLIC_MP_PENDING_URL,
                "failure": process.env.NEXT_PUBLIC_MP_FAILURE_URL,
            },
            "notification_url": process.env.NEXT_PUBLIC_MP_NOTIFICATION_URL,
        }

        const response = await paymentPreference.create({ body: preference });

        return Response.json({ preference_id: response.id, redirect: response.init_point });
    } catch (error) {
        console.error("Error creating payment preference:", error);
        return Response.json({ error: "Failed to create preference" }, { status: 500 });
    }
}