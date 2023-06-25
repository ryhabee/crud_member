const Member = require("../models/member");
const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app");
chai.should();
 
chai.use(chaiHttp);
describe("Member" , () => {
    beforeEach( (done) =>{
        Member.deleteMany({})
        .then(() => {
          done();
        })
        .catch((err) => {
          console.error(err);
          done(err);
        });
    }) ; 
    describe("/POST member", () => {
        it("it should new POST a new member", (done) => {
          let member = {
            id: 1,
              firstName: 'rihab',
              lastName: 'belarbi',
              email: 'rihab@example.com',
              password: 'password123',
              joinDate:  new Date('2022-01-22'),
              birthday: new Date('2002-01-22')
          };
          chai
            .request(app)
            .post("/api/members")
            .send(member)
            .end((err, res) => {
              res.should.have.status(200);
              res.body.data.should.be.a("object");
              res.body.status.should.be.eql("success");
              done();
            });
        });
      });





});
