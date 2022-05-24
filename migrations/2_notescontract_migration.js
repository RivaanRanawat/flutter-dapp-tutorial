const NotesContract = artifacts.require("NotesContract");

module.exports = function (deployer) {
  deployer.deploy(NotesContract);
};
