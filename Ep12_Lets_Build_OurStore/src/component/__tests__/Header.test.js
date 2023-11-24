import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../store/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should render login button inside header component", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  // many way to find the element :-
  // const loginBtn = screen.getByRole("button");
  // const loginBtn = screen.getByText("Login");
  // if multipule button and find spesefic button names as Login
  const loginBtn = screen.getByRole("button", { name: "Login" });

  expect(loginBtn).toBeInTheDocument();
});

it("Should render Cart inside header component text with 0", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  // const cartWith0 = screen.getByAltText("cartLogo");
  const cartWith0 = screen.getByText("0");

  expect(cartWith0).toBeInTheDocument();
});

// change login button's setIsLogin() to make this test case pass
// it("Should Change my Login button to Logout button on Click", () => {
//   render(
//     <BrowserRouter>
//       <Provider store={appStore}>
//         <Header />
//       </Provider>
//     </BrowserRouter>
//   );

//   const loginButton = screen.getByRole("button", { name: "Login" });

//   fireEvent.click(loginButton);

//   const logoutButton = screen.getByRole("button", { name: "Logout" });

//   expect(logoutButton).toBeInTheDocument();
// });
