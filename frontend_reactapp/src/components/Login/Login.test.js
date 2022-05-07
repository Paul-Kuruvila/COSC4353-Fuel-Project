import {cleanup, render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import Login from "./Login";


afterEach(() => {
    cleanup();
});

describe("Test login form", () => {

    // test('render login form', async () => {
    //     render(<Login/>);
    //     const buttlist = await screen.findAllByRole("button");
    //     expect(buttlist).toHaveLength(3);
    // });
    test('login button signs in user', async  () => {
        render(<Login/>);
        const button = await screen.getByTestId("button"); 
        expect(button).toBeInTheDocument();
    });
    test('login button functions properly', async  () => {
        render(<Login/>);
        const button = await screen.findAllByRole("button"); 
        expect(button).toHaveLength(1);
    });
    test('Login button displays properly', async  () => {
        const {getByTestId} = render(<Login label = "Login"></Login>)
        expect(getByTestId("button")).toHaveTextContent("Login")
    });

});
