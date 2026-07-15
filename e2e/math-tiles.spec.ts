import { test, expect } from "@playwright/test";

test("starting a session navigates from the Start screen to an exercise", async ({
  page,
}) => {
  await page.goto("/");

  await page.getByRole("button", { name: "Start" }).click();

  await expect(page.locator("h1.text-3xl")).toBeVisible();
});

test("answering the Higher exercise shows correct/incorrect feedback", async ({
  page,
}) => {
  await page.goto("/#/higher");

  await expect(
    page.getByRole("heading", { name: "Pick the higher number" }),
  ).toBeVisible();
  await expect(page.locator(".status-text")).toHaveText("What do you think?");

  const buttons = page.locator(".question__button");
  const [a, b] = await buttons.allTextContents();
  const higher = Number(a) > Number(b) ? buttons.first() : buttons.last();

  await higher.click();

  await expect(page.locator(".status-text")).toContainText("Correct!");
});

test("the menu opens and navigates between exercises", async ({ page }) => {
  await page.goto("/#/higher");

  await page.getByRole("button", { name: "Menu" }).click();
  await page.getByRole("link", { name: "Add" }).click();

  await expect(
    page.getByRole("heading", { name: "How much is", level: 1 }),
  ).toBeVisible();
});
