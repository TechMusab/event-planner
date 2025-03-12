const { describe, it, expect, afterAll } = require("@jest/globals");
const request = require("supertest");
const { app, server } = require("../server"); // Import both app and server

describe("Event API Tests", () => {
    it("should create a new event", async () => {
        const response = await request(app)
            .post("/events")
            .send({ name: "Tech Conference", date: "2025-06-15", category: "Technology" });

        expect(response.status).toBe(201);
        expect(response.body.name).toBe("Tech Conference");
    });

    it("should fetch all events", async () => {
        const response = await request(app).get("/events");
        expect(response.status).toBe(200);
        expect(response.body.length).toBeGreaterThan(0);
    });

    // ✅ Ensure the server is closed after all tests
    afterAll((done) => {
        server.close(done);
    });
});
