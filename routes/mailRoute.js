const { Router } = require("express");
const router = Router();
const { send, deliver, sync } = require("../controllers/mailController");

router.post("/mail", sync);
router.post("/mail/send", send);
router.post("/mail/deliver", deliver);

module.exports = router;
