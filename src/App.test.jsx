import { render, screen, waitForElementToBeRemoved, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { API, PAGINATION } from "./constants";
import { App } from "./App";
import { rest, server } from "./test/server";

/**
 * Sending only 11 row items in the response for these tests.
 * Refer to the `src/test/server/handlers.js` for mock response.
 */

const user = userEvent.setup();

test("`Loading...` appears while the data is being fetched", () => {
  render(<App />);
  const loadingText = screen.getByRole("status");
  expect(loadingText).toHaveTextContent(/^Loading...$/);
});

test("shows error message if API request fails", async () => {
  // Mock the API to return 500 Internal Server Error
  server.use(
    rest.get(API.GET_PROJECTS, (_, res, ctx) => {
      return res(ctx.status(500));
    })
  );

  render(<App />);
  // Wait for `Loading...` to disappear
  await waitForElementToBeRemoved(() => screen.getByText(/loading.../i));
  // Error message should be displayed
  const errorMessage = screen.getByText(/^Unable to fetch data.$/);
  expect(errorMessage).toBeInTheDocument();
});

test("Show `No data found.` if API returns []", async () => {
  // Send empty array
  server.use(
    rest.get(API.GET_PROJECTS, (_, res, ctx) => {
      return res(ctx.status(200), ctx.json([]));
    })
  );

  render(<App />);
  // Wait for `Loading...` to disappear
  await waitForElementToBeRemoved(() => screen.getByText(/loading.../i));
  // Error message should be displayed
  const errorMessage = screen.getByText(/^No data found.$/);
  expect(errorMessage).toBeInTheDocument();
});

test("Table renders with 5 rows once the API responds with data", async () => {
  render(<App />);
  await waitForElementToBeRemoved(() => screen.getByRole("status"));
  const tableBody = screen.getAllByRole("rowgroup")[1];
  const rows = within(tableBody).getAllByRole("row");
  expect(rows).toHaveLength(5);
});

test("Table row count changes on page size change", async () => {
  render(<App />);
  await waitForElementToBeRemoved(() => screen.getByRole("status"));

  // Default row size is 5
  const tableBody = screen.getAllByRole("rowgroup")[1];
  const rows = within(tableBody).getAllByRole("row");
  expect(rows).toHaveLength(5);

  //Change page size to 10, row count should change to 10
  const pageSizeSelector = screen.getByRole("combobox");
  const pageSize = String(PAGINATION.SIZER[1]);
  await user.selectOptions(pageSizeSelector, pageSize);

  const tableBodyAfterSizeChange = screen.getAllByRole("rowgroup")[1];
  const rowsAfterSizeChange = within(tableBodyAfterSizeChange).getAllByRole("row");
  expect(rowsAfterSizeChange).toHaveLength(10);
});

test("`Previous` and `Next` buttons should be disabled on the first and last page respectively", async () => {
  render(<App />);
  await waitForElementToBeRemoved(() => screen.getByRole("status"));

  // pagination buttons
  const prevButton = screen.getByRole("button", { name: /previous/i });
  const nextButton = screen.getByRole("button", { name: /next/i });

  //Previous button should be disabled on the first page
  expect(prevButton).toBeDisabled();

  //Go to the last page by clicking the Next button 2 times (total 3 pages)
  await user.click(nextButton);
  await user.click(nextButton);

  //Next button should be disabled on the last page
  expect(nextButton).toBeDisabled();
});

test("Pagination buttons are disabled if row count <= page size", async () => {
  render(<App />);
  await waitForElementToBeRemoved(() => screen.getByRole("status"));

  // pagination & page size selector buttons
  const prevButton = screen.getByRole("button", { name: /previous/i });
  const nextButton = screen.getByRole("button", { name: /next/i });
  const pageSizeSelector = screen.getByRole("combobox");

  // change page size to 50
  const pageSize = String(PAGINATION.SIZER[2]);
  await user.selectOptions(pageSizeSelector, pageSize);

  // Previous and Next buttons should be disabled because
  // row count is 11 and page size is 50
  expect(prevButton).toBeDisabled();
  expect(nextButton).toBeDisabled();
});
