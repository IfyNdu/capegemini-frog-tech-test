import * as mongoddb from "./mongodb";
import mongoose from "mongoose";


jest.mock("mongoose", () => {
  return {
    connect: jest.fn(uri => ({ uri })),
    set: jest.fn()
  }
});

describe("mongodb", () => {

  it("initialises successfully", async () => {

    let testUri = "test/uri";
    const db = await mongoddb.init(testUri);

    expect(db).toBeTruthy();
  });

  it("errors on initiliasation", async () => {
    expect.assertions(1);

    jest
      .spyOn(mongoose, "connect")
      .mockRejectedValueOnce({ name: "error" })

    try {
      let testUri = "test/uri";
      await mongoddb.init(testUri);

    } catch (e) {
      expect(e.name).toBe("error");
    }
  });
});
