const authRouter = require("./auth-router");
const request = require("supertest");

describe("auth-router.js",()=>{
    describe("POST /login",()=>{
        it("should return stat code 201",()=>{
            request(authRouter).post("/login").expect(201);
        })
    })
    describe("POST /register",()=>{
        it("should return stat code 201",()=>{
            request(authRouter).post("/register").expect(201);
        })
    })
})