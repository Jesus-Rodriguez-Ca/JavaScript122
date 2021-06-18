const assert = require("chai").assert;
const expect = require("chai").expect;
const dataModule = require("../data");




describe("Should delete item of the game we want from the game list", function () {
  describe("#deleteItem()", function () {
    it("When pasing a game name that we want to delete, the game should be removed from the list and the array lenght reduced", function () {
      let temp = dataModule.deleteItem("Zelda");
      let item = dataModule.getItem();
      
      let test = dataModule.getItem("Zelda");
      //   console.log(temp[0].name)

      assert.lengthOf(test, 0);
      assert.lengthOf(dataModule.games, 4);
    });   
    it("if the game does not exist, it fails to delete", function () {
      //let temp = 
      dataModule.deleteItem("Zelda");      
      let test = dataModule.getItem("Zelda");
      expect(test).to.be.undefined;

    });   

  });
});


