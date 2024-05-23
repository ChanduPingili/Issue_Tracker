const org = require('../model/org.model');

async function createOrg(req, res){
  try {
    const neworg = new org(req.body);
    await org.save();
    res.status(201).json({message:`org added successfully:${neworg}`});
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

async function getOrg(req, res){
  try {
    const orgbyid = await org.findById(req.params.id);
    if (!orgbyid) {
      return res.status(404).json({ message: 'org not found' });
    }
    res.json(orgbyid);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

async function updateOrg(req, res){
  try {
    const org = await org.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!org) {
      return res.status(404).json({ message: "org not found" });
    }
    res.json(org);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

async function deleteOrg(req, res){
  try {
    const org = await org.findByIdAndDelete(req.params.id);
    if (!org) {
      return res.status(404).json({ message: "org not found" });
    }
    res.json({ message: "org deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {createOrg , updateOrg , getOrg , deleteOrg}