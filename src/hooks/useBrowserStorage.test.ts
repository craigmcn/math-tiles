import { renderHook, act } from "@testing-library/react";
import { useLocalStorage, useSessionStorage } from "./useBrowserStorage";

describe("useLocalStorage", () => {
  beforeEach(() => localStorage.clear());

  it("returns the initial value when storage is empty", () => {
    const { result } = renderHook(() => useLocalStorage("key", false));
    expect(result.current[0]).toBe(false);
  });

  it("persists a new value to localStorage", () => {
    const { result } = renderHook(() => useLocalStorage("key", false));
    act(() => result.current[1](true));
    expect(result.current[0]).toBe(true);
    expect(JSON.parse(localStorage.getItem("key")!)).toBe(true);
  });

  it("reads an existing value from localStorage", () => {
    localStorage.setItem("key", JSON.stringify("hello"));
    const { result } = renderHook(() => useLocalStorage("key", ""));
    expect(result.current[0]).toBe("hello");
  });
});

describe("useSessionStorage", () => {
  beforeEach(() => sessionStorage.clear());

  it("returns the initial value when storage is empty", () => {
    const { result } = renderHook(() => useSessionStorage("key", 42));
    expect(result.current[0]).toBe(42);
  });

  it("persists a new value to sessionStorage", () => {
    const { result } = renderHook(() => useSessionStorage("key", 0));
    act(() => result.current[1](99));
    expect(result.current[0]).toBe(99);
    expect(JSON.parse(sessionStorage.getItem("key")!)).toBe(99);
  });
});
