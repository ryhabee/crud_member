const memberService = require("../services/memberServices");
 

 
exports.addMember = async (req, res) => {
  try {
    const member = await memberService.addMember(req.body);
    res.json({ data: member, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
