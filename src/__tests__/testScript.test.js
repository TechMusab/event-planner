const { describe, it, expect } = require('@jest/globals');
const request = require("supertest");
const app = require("../server");

describe("Event API Tests", () => {
    it("should create a new event", async () => {
        const res = await request(app)
            .post("/events")
            .send({ name: "Meeting", description: "Project discussion", date: "2025-03-15", category: "Work" });
        expect(res.statusCode).toBe(201);
        expect(res.body).toHaveProperty("id");
    });

    it("should fetch all events", async () => {
        const res = await request(app).get("/events");
        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    });
});
