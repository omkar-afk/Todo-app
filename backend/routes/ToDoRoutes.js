const { Router } = require("express");
const {
  getToDos,
  saveToDo,
  updateToDo,
  deleteToDo,
} = require("../controller/ToDoController");
const {save_user, check_user} = require("../controller/authentication_cont")

const router = Router();
const jwt_auth = require("../middlewares/jwt_auth")

router.post("/check_user", check_user);
router.post("/save_user", save_user);
router.get("/get",jwt_auth, getToDos);
router.post("/save",jwt_auth, saveToDo);
router.put("/update/:id",jwt_auth, updateToDo);
router.delete("/delete/:id",jwt_auth, deleteToDo);

module.exports = router;
