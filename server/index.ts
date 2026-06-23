import { capsule, endpoint, mutation, query, string, table, text } from "lakebed/server";

export default capsule({
  name: "theoideadump",
  schema: {
    votes: table({
      projectId: string(),
      userId: string(),
      value: string(),
    }),
  },
  queries: {
    voteCounts: query((ctx) => {
      const all = ctx.db.votes.all();
      const map: Record<string, { totalVotes: number; userVote: number }> = {};
      for (const v of all) {
        if (!map[v.projectId]) map[v.projectId] = { totalVotes: 0, userVote: 0 };
        map[v.projectId].totalVotes += parseInt(v.value);
        if (v.userId === ctx.auth.userId) {
          map[v.projectId].userVote = parseInt(v.value);
        }
      }
      return map;
    }),
  },
  mutations: {
    vote: mutation((ctx, projectId: string, value: number) => {
      const all = ctx.db.votes.where("projectId", projectId).all();
      const existing = all.find((v) => v.userId === ctx.auth.userId);
      if (existing) {
        if (parseInt(existing.value) === value) {
          ctx.db.votes.delete(existing.id);
        } else {
          ctx.db.votes.update(existing.id, { value: String(value) });
        }
      } else {
        ctx.db.votes.insert({
          projectId,
          userId: ctx.auth.userId,
          value: String(value),
        });
      }
    }),
  },
  endpoints: {
    status: endpoint({ method: "GET", path: "/api/status" }, () => text("ok")),
  },
});
