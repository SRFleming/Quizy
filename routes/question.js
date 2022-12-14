import express from "express";
import passport from "passport";
import {
  accessCreateQuestion,
  createQuestion,
  deleteQuestion,
  getAllQuestions,
  updateQuestion,
} from "../controllers/questionController.js";

const router = express.Router();

router.get(
  "/quiz/:quizId",
  passport.authenticate("jwt", { session: false }),
  getAllQuestions
);
router.get(
  "/createquestion",
  passport.authenticate("jwt", { session: false }),
  accessCreateQuestion
);
router.post(
  "/createquestion",
  passport.authenticate("jwt", { session: false }),
  createQuestion
);
router.delete(
  "/quiz/:quizId/:questionId",
  passport.authenticate("jwt", { session: false }),
  deleteQuestion
);
router.patch(
  "/quiz/:quizId/:questionId",
  passport.authenticate("jwt", { session: false }),
  updateQuestion
);

export default router;
