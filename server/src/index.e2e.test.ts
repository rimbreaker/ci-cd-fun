import { app } from "./index";
import request from "supertest";

describe("e2e test suite", () => {
  test("it should GET a proper color value", async () => {
    const res = await request(app).get("/api/color/ffffff");

    expect(res.status).toBe(200);
    expect(res.body.name).toBe("White");
  });
});
