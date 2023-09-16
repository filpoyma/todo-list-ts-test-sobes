import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";
import "@testing-library/jest-dom/extend-expect";
import Main from "./screens/Main";
import { initialState, reducer } from "./store/reducer";

const renderWithRedux = (component: React.JSX.Element) => {
  const store = createStore(reducer, initialState);
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};

describe("Redux store created from the reducer", () => {
  describe("WHEN this is passed to Main", () => {
    beforeEach(() => {
      renderWithRedux(<Main />);
    });
    test("THEN three todos are shown", () => {
      expect(screen.getByText("Тестовое задание")).toBeInTheDocument();
      expect(screen.getByText("Прекрасный код")).toBeInTheDocument();
      expect(screen.getByText("Покрытие тестами")).toBeInTheDocument();
    });
    test("And '2 Item Left' are shown", () => {
      expect(screen.getByText("2 items left")).toBeInTheDocument();
    });
    test("And '1 Item Left' are shown wheh check any todo as completed", () => {
      fireEvent.click(screen.getAllByTestId("checkbox")[0]);
      expect(screen.getByText("1 items left")).toBeInTheDocument();
    });
  });

  describe("AND when a new todo is added", () => {
    beforeEach(() => {
      renderWithRedux(<Main />);
      fireEvent.change(screen.getByTestId("input"), {
        target: { value: "My first test todo" },
      });
      fireEvent.submit(screen.getByTestId("input-form"));
    });

    test("THEN the todo is visible", () => {
      expect(screen.getByText("My first test todo")).toBeInTheDocument();
    });

    describe("AND when completed todos are selected", () => {
      beforeEach(() => {
        fireEvent.click(screen.getByTestId("completed-button"));
      });

      test("THEN the todo is not visible", () => {
        expect(
          screen.queryByText("My first test todo")
        ).not.toBeInTheDocument();
      });
    });

    describe("AND when incomplete todos are selected", () => {
      beforeEach(() => {
        fireEvent.click(screen.getByTestId("active-button"));
      });

      test("THEN the todo is visible", () => {
        expect(screen.getByText("My first test todo")).toBeInTheDocument();
      });
    });

    describe("AND when a further todo is added", () => {
      beforeEach(() => {
        fireEvent.change(screen.getByTestId("input"), {
          target: { value: "My second test todo" },
        });
        fireEvent.submit(screen.getByTestId("input-form"));
        fireEvent.click(screen.getByTestId("all-button"));
      });

      test("THEN first and second todos are visible", () => {
        expect(screen.getByText("My first test todo")).toBeInTheDocument();
        expect(screen.getByText("My second test todo")).toBeInTheDocument();
      });

      describe("AND when the second todo is mark as completed", () => {
        beforeEach(() => {
          fireEvent.click(screen.getAllByTestId("checkbox")[4]);
        });

        test("THEN second todos are still visible", () => {
          expect(screen.getByText("My second test todo")).toBeInTheDocument();
        });

        describe("AND when completed button are pressed", () => {
          beforeEach(() => {
            fireEvent.click(screen.getByTestId("completed-button"));
          });

          test("THEN only the second todo is visible", () => {
            expect(screen.getByText("My second test todo")).toBeInTheDocument();
            expect(
              screen.queryByText("My first test todo")
            ).not.toBeInTheDocument();
          });

          describe("AND when Clear completed button pressed", () => {
            beforeEach(() => {
              fireEvent.click(screen.getByTestId("clear-completed-button"));
            });

            test("THEN only active todo is visible", () => {
              expect(
                screen.getByText("My first test todo")
              ).toBeInTheDocument();
              expect(
                screen.queryByText("My second test todo")
              ).not.toBeInTheDocument();
              expect(screen.getByText("Тестовое задание")).toBeInTheDocument();
              expect(screen.getByText("Покрытие тестами")).toBeInTheDocument();
            });
          });
        });
      });
    });
  });
});
