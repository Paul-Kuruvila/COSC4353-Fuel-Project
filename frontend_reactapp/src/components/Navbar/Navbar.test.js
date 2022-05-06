import {cleanup, render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import Navbar from "./Navbar";


afterEach(() => {
    cleanup();
});

describe("Test Navbar form", () => {

    // test('render login form', async () => {
    //     render(<Login/>);
    //     const buttlist = await screen.findAllByRole("button");
    //     expect(buttlist).toHaveLength(3);
    // });
    test('Navbar button saves user information', async  () => {
        render(<Navbar/>);
        const text = await screen.getByTestId("text"); 
        expect(text).toBeInTheDocument();
    });
    test('Navbar button functions properly', async  () => {
        render(<Navbar/>);
        const text = screen.getByTestId("text"); 
        expect(text).toHaveTextContent("Fuel.io"); 
    });
    
});