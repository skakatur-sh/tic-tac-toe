/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen, fireEvent } from '@testing-library/react'

import { Board } from "../src/App"
import { checkWin } from "../src/App";

test("All Squares Clicked Test", () => {
    render(<Board />)

    const unclickedSquares = screen.getAllByRole('button');
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