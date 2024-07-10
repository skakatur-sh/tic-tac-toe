/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, fireEvent } from '@testing-library/react'

import { Board } from "../src/App"
import { checkWin } from "../src/App";


test("Alternate Square Clicking Test", () => {
    render(<Board/>);

    const unclickedSquares = document.getElementsByClassName("square");
    let squareValues = [];
    expect(unclickedSquares.length).toBe(9);

    for (let i = 0; i < unclickedSquares.length; i++) {
        // console.log(i);

        let button = unclickedSquares[i];
        fireEvent.click(button);
        squareValues[i] = button.innerHTML;

        if (i > 6) {
            //should be a win on the bottom left -> top right diagonal
            expect(checkWin(squareValues)).toBeTruthy();
            
            //since win, future buttons shouldn't update anymore
            expect(button.innerHTML).toBeFalsy();
        }

        else {
            //0 and even turns are X
            if (i % 2 == 0) {
                expect(button.innerHTML).toBe("X");
            }

            //odd turns are Y
            else {
                expect(button.innerHTML).toBe("O");
            }
        }
    }

});

test("Speedrun Test", () => {
    render(<Board/>)

    const unclickedSquares = document.getElementsByClassName("square");
    let squareValues = [];
    expect(unclickedSquares.length).toBe(9);

    let button = unclickedSquares[0];
    fireEvent.click(button);
    expect(button.innerHTML).toBe("X");
    squareValues[0] = button.innerHTML;

    button = unclickedSquares[4];
    fireEvent.click(button);
    expect(button.innerHTML).toBe("O");
    squareValues[4] = button.innerHTML;

    button = unclickedSquares[1];
    fireEvent.click(button);
    expect(button.innerHTML).toBe("X");
    squareValues[1] = button.innerHTML;

    button = unclickedSquares[5];
    fireEvent.click(button);
    expect(button.innerHTML).toBe("O");
    squareValues[5] = button.innerHTML;

    button = unclickedSquares[2];
    fireEvent.click(button);
    expect(button.innerHTML).toBe("X");
    squareValues[2] = button.innerHTML;

    button = unclickedSquares[6];
    fireEvent.click(button);
    expect(button.innerHTML).toBe(""); //win, so shouldn't activate!

    expect(checkWin(squareValues)).toBe("X"); //X won!

});