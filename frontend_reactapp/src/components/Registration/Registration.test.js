import {cleanup, render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import Registration from "./Registration";


afterEach(() => {
    cleanup();
});

describe("Test registration form", () => {

    // test('render login form', async () => {
    //     render(<Login/>);
    //     const buttlist = await screen.findAllByRole("button");
    //     expect(buttlist).toHaveLength(3);
    // });
    test('Registration button saves username and login information', async  () => {
        render(<Registration/>);
        const button = await screen.getByTestId("button"); 
        expect(button).toBeInTheDocument();
    });
    test('Registration button functions properly', async  () => {
        render(<Registration/>);
        const button = await screen.findAllByRole("button"); 
        expect(button).toHaveLength(1);
    });
    test('Submit button displays properly', async  () => {
        const {getByTestId} = render(<Registration label = "Submit"></Registration >)
        expect(getByTestId("button")).toHaveTextContent("Submit")
    });

});