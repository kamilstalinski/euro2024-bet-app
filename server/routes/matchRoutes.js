import express from "express";
import cors from "cors";
const router = express.Router();
import { getMatches } from "../controllers/matchesController.js";

router.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  }),
);

router.get("/matchesData", getMatches);

export { router as MatchesRouter };
