import { getColorName } from "./colorsController";
import { Request, Response } from "express";

describe("test suite for colors controller", () => {
  let resultCatcher: any;
  const mockRequest = {
    params: { id: "ffffff" },
  } as any as Request;

  const mockResponse = {
    send: (a: any) => {
      resultCatcher = a;
    },
  } as any as Response;

  test("controller return correct value", async () => {
    await getColorName(mockRequest, mockResponse);
    expect(resultCatcher).toStrictEqual({
      name: "White",
    });
  });
});