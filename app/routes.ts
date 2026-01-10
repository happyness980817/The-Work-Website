import {
  type RouteConfig,
  index,
  route,
  prefix,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/about", "routes/about.tsx"),
  ...prefix("/counselors", [
    index("routes/roles/client/counselors/index.tsx"),
    route("/search", "routes/roles/client/counselors/search.tsx"),
    route(
      "/:counselorId/profile",
      "routes/roles/client/counselors/counselor-profile.tsx"
    ),
    route("/:counselorId", "routes/roles/client/counselors/$counselorId.tsx"),
  ]),
  ...prefix("/client", [
    index("routes/roles/client/index.tsx"),
    route("/dm", "routes/roles/client/dm.tsx"),
    route("/message", "routes/roles/client/message.tsx"),
    ...prefix("/chats", [
      route("/list", "routes/roles/client/chats/list.tsx"),
      route("/:chatId", "routes/roles/client/chats/chat.tsx"),
    ]),
  ]),
  ...prefix("/counselor", [
    index("routes/roles/counselor/index.tsx"),
    route("/message", "routes/roles/counselor/message.tsx"),
    ...prefix("/chats", [
      route("/list", "routes/roles/counselor/chats/list.tsx"),
      route("/:chatId", "routes/roles/counselor/chats/chat.tsx"),
    ]),
  ]),
  ...prefix("/admin", [
    index("routes/roles/admin/index.tsx"),
    route("/message", "routes/roles/admin/message.tsx"),
    ...prefix("/chats", [
      route("/list", "routes/roles/admin/chats/list.tsx"),
      route("/:chatId", "routes/roles/admin/chats/chat.tsx"),
    ]),
  ]),
  ...prefix("/auth/counselor", [
    index("routes/auth/counselor/index.tsx"),
    route("/join", "routes/auth/counselor/join.tsx"),
    route("/login", "routes/auth/counselor/login.tsx"),
  ]),
  ...prefix("/auth/client", [
    index("routes/auth/client/index.tsx"),
    route("/join", "routes/auth/client/join.tsx"),
    route("/login", "routes/auth/client/login.tsx"),
  ]),
  ...prefix("/auth/admin", [
    index("routes/auth/admin/index.tsx"),
    route("/join", "routes/auth/admin/join.tsx"),
    route("/login", "routes/auth/admin/login.tsx"),
  ]),
] satisfies RouteConfig;
