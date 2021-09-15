import request from "supertest";
import { app } from "../../app";

describe('Create User Controller', () => {
    it('should be able to create a new user', async() => {
     const response = await   request(app)
        .post("/users")
        .send({
            name: "testIntegration",
            email: "testIntegration@gmail.com",
            password: "123456"
        });
        console.log("USEEEE", response);
    })
})