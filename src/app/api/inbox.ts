export async function POST(request: Request) {

  // Get the request body
  const body = await request.json()

  console.log('Request body: ', body)

  // Return a success message
  return new Response("OK", { status: 200 })

}