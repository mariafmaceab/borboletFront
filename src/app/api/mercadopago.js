import MercadoPagoConfig from "mercadopago"

export const mercadopagoClient = new MercadoPagoConfig({
    accessToken: process.env.NEXT_PUBLIC_MP_ACCESS_TOKEN
})
