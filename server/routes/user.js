const { isTransporter, isManufacturer, auth } = require("../middleware/auth");
const {
  manufacturerController,
  fetchAllManufacturedata,
  fetchAllTransporterreply,
} = require("../controllers/manufacturer");
const {
  transporterController,
  fetchAllTransporter,
  fetchAllManufacturerreply,
} = require("../controllers/transporter");
const {
  UserSignupController,
  UserLogginController,
} = require("../controllers/Authentications.js");

const router = require("express").Router();

router.post("/signup", UserSignupController);
router.post("/login", UserLogginController);
//testing protected routes for single middleware
router.get("/test", auth, (req, res) => {
  res.json({
    success: true,
    message: "Welcome to the Protected route for TESTS",
  });
});
//protected Route

router.post("/transporter", auth, isTransporter, transporterController);

router.post("/manufacturer", auth, manufacturerController);

router.get("/fetchAllManufacturer", fetchAllManufacturedata);
router.get("/fetchAllTransporter", fetchAllTransporter);
router.get("/Alltransporter", fetchAllTransporterreply);
router.get("/allmanufacturer", fetchAllManufacturerreply);
module.exports = router;
