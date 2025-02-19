import { mercadopagoClient } from "../../../mercadopago"
import { Preference, Payment } from "mercadopago"

const preferenceClient = new Preference(mercadopagoClient)
const paymentClient = new Payment(mercadopagoClient)

export async function GET(request) {
    const url = new URL(request.url);
    const params = url.searchParams;
    const preference = params.get("preference_id")
    const status = params.get("status")
    const paymentId = params.get("payment_id")

    if(!status || !preference || !paymentId) {
        console.log("Invalid params when trying to access shipment page", status, preference)
        return Response.json({ok: false})
    }

    if (status && preference && paymentId) {
        const preferenceDetail = await preferenceClient.get({preferenceId: preference})
        if(preferenceDetail.api_response.status === 200) {
            const paymentDetail = await paymentClient.get({id: paymentId})
            if (paymentDetail.id == paymentId) {
                return Response.json({ok: true})
            }
        }
    }

    return Response.json({ok: false})
}