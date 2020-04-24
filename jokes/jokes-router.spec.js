const jokesRouter = require("./jokes-router");
const request = require("supertest");

describe("auth-router.js",()=>{
    describe("GET /",()=>{
        it("should return stat code 200",()=>{
            request(jokesRouter).get("/").expect(200);
        })
    })
    describe("GET /",()=>{
        it("expect JSON type of answer",()=>{
            request(jokesRouter).get("/").then(res=>{
                expect(res.type).toMatch(/JSON/);
            })
        })
    })
})