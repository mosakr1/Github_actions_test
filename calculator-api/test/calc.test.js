const request = require("supertest");
const app = require("../index"); // لكن عشان app بيعمل listen، هنعدل كده

// نعدل index.js عشان نصدر app بدل ما يشغل السيرفر على طول
// هنضيف في index.js:
// module.exports = app;

describe("Calculator API", () => {
  it("should add two numbers", async () => {
    const res = await request(app).get("/add?a=2&b=3");
    expect(res.body.result).toBe(5);
  });

  it("should subtract two numbers", async () => {
    const res = await request(app).get("/sub?a=7&b=4");
    expect(res.body.result).toBe(3);
  });
});
