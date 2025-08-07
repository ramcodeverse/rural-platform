const router = require('express').Router();

router.get('/', (req, res) => {
    res.json([
        { title: "Local farmers market expands with government support." },
        { title: "New water purification system installed in village." }
    ]);
});

module.exports = router;