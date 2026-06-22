import { capsule, endpoint, text } from "lakebed/server";

export default capsule({
  name: "theoideadump",
  schema: {},
  queries: {},
  mutations: {},
  endpoints: {
    status: endpoint({ method: "GET", path: "/api/status" }, () => text("ok")),
  },
});
