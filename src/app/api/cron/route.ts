import { mongoClient } from "@/config/mongo"

export async function GET(request: Request) {
  //   const body = await request.json()

  //   console.log('body', body)

  //   const { startDate, endDate, orderCode, shopIds, orderStatus } = body

  const main = mongoClient.db('main')
  const walletTransactionsCollection = main.collection('wallet_transactions')

  await walletTransactionsCollection.insertOne({
    created_at: new Date().toISOString(),
    title: 'LOJA DO EDU',
    refresh_token: '47446d70745a4f7853456a5745534258',
    access_token: '53544f4f5859664258534c7a62425872',
    userId: 'user_2ZrNNkCUbqwwqlyap9TRTTQ2peB',
    expires_in: {
      $date: '2023-12-18T14:10:30.000Z',
    },
    imported_at: {
      $date: '2024-01-02T14:48:15.486Z',
    },
    shop_id: 721441982,
  })

  console.log('ROUTE: finished mongo query')

  return new Response('Cron executed', {
    headers: { 'Content-Type': 'application/json' },
    status: 200,
    statusText: 'OK',
  })
}
