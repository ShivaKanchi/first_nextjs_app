export async function GET(req) {
  const users = [
    { id: 1, name: "abc1" },
    { id: 2, name: "abc2" },
    { id: 3, name: "abc3" },
  ];

  return new Response(JSON.stringify(users));
}
