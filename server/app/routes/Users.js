const express = require('express');
const router = express.Router();
const bodyParser = require("body-parser");
const Data = require('../../app/config/data');

router.get("/getData", (req, res) => {
    Data.find({},(err, data) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true, data: data });
    });
});

router.post("/putData", (req, res) => {
    let data = new Data();
    const { id, message } = req.body;

    if ((!id && id !=== 0) || !message) {
        return res.json({
            success: false,
            error: "INVALID INPUTS"
        });
    }
    data.message = message;
    data.id = id;
    data.save(err => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true });
    });
});

router.post("/updateData", (req, res) => {
    const { id, update } = req.body;
    Data.findOneAndUpdate({_id: id},{_message:update}, err => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true });
    });
});

router.delete("/deleteData", (req, res) => {
    const id  = req.body;
    Data.findOneAndRemove({_id: id}, err => {
        if (err) return res.send(err);
        return res.json({ success: true });
    });
});

export default router;
