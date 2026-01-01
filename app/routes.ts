import {
  type RouteConfig,
  index,
  route,
  prefix,
} from "@react-router/dev/routes";

export default [
  index("routes/index.tsx"),
  route("/message", "routes/message.tsx"),
  ...prefix("/counselors", [
    index("routes/counselor/counselors.tsx"),
    route("/:counselorId/profile", "routes/counselor/counselor-profile.tsx"),
    route("/:counselorId", "routes/counselor/$counselorId.tsx"),
  ]),
  ...prefix("/user", [
    ...prefix("/chats", [route("/:chatId", "routes/user/chats/chat.tsx")]),
  ]),
  ...prefix("/auth/counselor", [
    index("routes/auth/counselor/index.tsx"),
    route("/join", "routes/auth/counselor/join.tsx"),
    route("/login", "routes/auth/counselor/login.tsx"),
  ]),
  ...prefix("/auth/user", [
    index("routes/auth/user/index.tsx"),
    route("/join", "routes/auth/user/join.tsx"),
    route("/login", "routes/auth/user/login.tsx"),
  ]),
] satisfies RouteConfig;
