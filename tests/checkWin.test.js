const { checkWin } = require("../src/checkWin");

// import { checkWin } from "../src/checkWin";

test('No win possible ', () => {
    expect(checkWin(
        ["X", "X", "O", 
        "O", "X", "X", 
        "X", "O", "O"]
        )
    ).toBe(null);
});