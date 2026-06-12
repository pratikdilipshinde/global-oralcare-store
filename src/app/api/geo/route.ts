export const runtime = "edge";

export async function GET(request: Request) {
  const country =
    request.headers.get("x-vercel-ip-country") ||
    request.headers.get("cf-ipcountry") ||
    "US";

  return Response.json({
    country,
  });
}