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
                "success": "https://a292-2800-e2-5480-e2c-f45c-763b-ecfe-802e.ngrok-free.app/shipment",
                "pending": "https://a292-2800-e2-5480-e2c-f45c-763b-ecfe-802e.ngrok-free.app/pending",
                "failure": "https://a292-2800-e2-5480-e2c-f45c-763b-ecfe-802e.ngrok-free.app/failure"
            },
            "notification_url": "https://a292-2800-e2-5480-e2c-f45c-763b-ecfe-802e.ngrok-free.app/api/payment/webhook",
        }

        const response = await paymentPreference.create({ body: preference });

        return Response.json({ preference_id: response.id, redirect: response.init_point });
    } catch (error) {
        console.error("Error creating payment preference:", error);
        return Response.json({ error: "Failed to create preference" }, { status: 500 });
    }
}