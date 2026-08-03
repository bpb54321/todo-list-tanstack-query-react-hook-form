import { render } from "@testing-library/react";
import { composeStories, setProjectAnnotations } from "@storybook/react";
import { page } from "vitest/browser";
import { expect, test } from "vitest";
import preview from "../../../.storybook/preview";
import * as stories from "./TodoList.stories";

setProjectAnnotations(preview);

const { FullList } = composeStories(stories);

test("TodoList full list matches visual baseline", async () => {
  render(<FullList />);
  await document.fonts.ready;
  await expect
    .element(page.getByTestId("todo-list-container"))
    .toBeInTheDocument();

  await expect(page.getByTestId("todo-list-container")).toMatchScreenshot(
    "todo-list-full",
  );
});
