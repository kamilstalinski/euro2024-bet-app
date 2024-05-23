import mongoose from "mongoose";

const MatchSchema = new mongoose.Schema({
  matchId: { type: Number, required: true, unique: true },
  homeTeam: { type: String, required: true },
  awayTeam: { type: String, required: true },
  group: { type: String, required: true },
  homeScore: { type: Number, default: 0 },
  awayScore: { type: Number, default: 0 },
});

const MatchModel = mongoose.model("Match", MatchSchema);

export { MatchModel as Match };
