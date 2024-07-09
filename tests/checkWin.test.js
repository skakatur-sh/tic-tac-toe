const { checkWin } = require("../src/App");

test('No win possible ', () => {
    expect(checkWin(
        ["X", "X", "O", 
        "O", "X", "X", 
        "X", "O", "O"]
        )
    ).toBe(null);
});