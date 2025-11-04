

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const { method } = request;

    // D1 binding: env.DB
    const db = env.DB;

    // /progress/save (POST): { user_id, progress }
    if (url.pathname === "/progress/save" && method === "POST") {
      const { user_id, progress } = await request.json();
      if (!user_id || progress == null) {
        return new Response("Missing user_id or progress", { status: 400 });
      }
      await db.prepare(
        "INSERT INTO progress (user_id, progress) VALUES (?, ?) ON CONFLICT(user_id) DO UPDATE SET progress=excluded.progress"
      ).bind(user_id, progress).run();
      return new Response(JSON.stringify({ ok: true }), { headers: { "Content-Type": "application/json" } });
    }

    // /progress/get?user_id=xxx (GET)
    if (url.pathname === "/progress/get" && method === "GET") {
      const user_id = url.searchParams.get("user_id");
      if (!user_id) {
        return new Response("Missing user_id", { status: 400 });
      }
      const { results } = await db.prepare(
        "SELECT progress FROM progress WHERE user_id = ?"
      ).bind(user_id).all();
      const progress = results[0]?.progress ?? null;
      return new Response(JSON.stringify({ user_id, progress }), { headers: { "Content-Type": "application/json" } });
    }

    // Default: 404
    return new Response("Not found", { status: 404 });
  },
};

// D1 binding in wrangler.toml:
// [[d1_databases]]
// binding = "DB"
// database_name = "appdata"
// database_id = "b67e7c2c-c523-475e-b8a2-56fea2aef372"

// SQL to create table:
// CREATE TABLE IF NOT EXISTS progress (user_id TEXT PRIMARY KEY, progress TEXT);