const memberService = require("../services/memberServices");
 

exports.getAllMembers = async (req, res) => {
  try {
    const members = await memberService.getAllMembers();
    res.json({ data: members, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}; 
exports.addMember = async (req, res) => {
  try {
    const member = await memberService.addMember(req.body);
    res.json({ data: member, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.getMemberById = async (req, res) => {
  try {
    const member = await memberService.getMemberById(req.params.id);
    res.json({ data: member, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  } } ;
  exports.getMemberByEmail = async (req, res) => {
    try {
      const member = await memberService.getMemberById(req.params.email);
      res.json({ data: member, status: "success" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    } } ;
    exports.getMemberByEmail = async (req, res) => {
      try {
        const member = await memberService.getMemberByEmail(req.params.email);
        res.json({ data: member, status: "success" });
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
    };
    