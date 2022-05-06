import {cleanup, render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import FuelQuote from "./FuelQuote";


afterEach(() => {
    cleanup();
});

describe("Test fuel quote form", () => {

    // test('render login form', async () => {
    //     render(<Login/>);
    //     const buttlist = await screen.findAllByRole("button");
    //     expect(buttlist).toHaveLength(3);
    // });
    test('FuelQuote button submits form', async  () => {
        render(<FuelQuote/>);
        const button = await screen.getByTestId("button"); 
        expect(button).toBeInTheDocument();
    });
    test('FuelQuote button functions properly', async  () => {
        render(<FuelQuote/>);
        const button = await screen.findAllByRole("button"); 
        expect(button).toHaveLength(2);
    });
    test('FuelQuoteHistory button sends them to fuel quote records', async  () => {
        render(<FuelQuote/>);
        const button = await screen.getByTestId("button"); 
        expect(button).toBeInTheDocument();
    });

});
