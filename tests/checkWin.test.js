const { checkWin } = require("../src/App");

describe("No Win Possible", () => {
  test("Board Full ", () => {
    expect(checkWin(["X", "X", "O", "O", "X", "X", "X", "O", "O"])).toBe(null);
  });

  test("Board Partial ", () => {
    expect(checkWin(["X", "X", null, "O", null, "X", "X", "O", "O"])).toBe(
      null
    );
  });
});

describe("Win Possible", () => {
    test("Board Partial ", () => {
      expect(checkWin(["X", "O", "X", "O", "X", "O", null, null, "X"])).toBe("X");
    });
  
    test("Board Full ", () => {
      expect(checkWin(["O", "O", "O", "X", "O", "X", "X", "O", "X"])).toBe("O");
    });
  });
