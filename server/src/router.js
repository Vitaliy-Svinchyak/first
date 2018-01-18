import { Router } from "express";

import UserController from "./controllers/user";
import AuthController from "./controllers/auth";

export default function setRoutes(opts) {
  const router = new Router();
  const { passport } = opts;

  const userController = UserController(opts);
  const authController = AuthController(opts);

  router.post("/api/users/", userController.create);
  router.post(
    "/api/auth/local",
    passport.authenticate("local"),
    authController.authSuccess,
    authController.authFailure
  );

  //
  // api which require authentication
  //
  router.use("/api", passport.authenticate("jwt"));

  router.get("/api/user", userController.user);

  return router;
}
