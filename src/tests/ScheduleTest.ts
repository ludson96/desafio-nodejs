import chai from 'chai';
import chaiHttp from 'chai-http';
import sinon from 'sinon';
import { app } from '../app';
import { allSchedulesMock, createdScheduleMock, messageMock, scheduleMock } from './mocks/scheduleMock';
import ScheduleModel from '../models/ScheduleModel';
import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('ScheduleController', function () {
  let chaiHttpResponse: Response;

  afterEach(sinon.restore);

  it('deveria retornar todos os agendamentos', async () => {
    sinon
      .stub(ScheduleModel, 'findAll')
      .resolves(allSchedulesMock as ScheduleModel[]);

    chaiHttpResponse = await chai
      .request(app)
      .get('/schedule');

    expect(chaiHttpResponse.status).to.equal(200);
    expect(chaiHttpResponse.body).to.be.an('array');
  });

  it('deveria criar um novo agendamento', async () => {
    sinon
      .stub(ScheduleModel, 'create')
      .resolves(createdScheduleMock.scheduleCreated as ScheduleModel);

    chaiHttpResponse = await chai
      .request(app)
      .post('/schedule')
      .send({ email: createdScheduleMock.scheduleCreated.email });

    expect(chaiHttpResponse.status).to.equal(201);
    expect(chaiHttpResponse.body.message).to.deep.equal('Service scheduled successfully');
    expect(new Date(chaiHttpResponse.body.scheduleCreated.scheduleDateTime)).to.deep.equal(createdScheduleMock.scheduleCreated.scheduleDateTime);
    expect(chaiHttpResponse.body.scheduleCreated).to.have.property('id', createdScheduleMock.scheduleCreated.id);
    expect(chaiHttpResponse.body.scheduleCreated).to.have.property('email', createdScheduleMock.scheduleCreated.email);
  });

  it('deveria deletar um agendamento', async () => {
    sinon
    .stub(ScheduleModel, 'findByPk')
    .resolves(scheduleMock as ScheduleModel);

    chaiHttpResponse = await chai
      .request(app)
      .delete('/schedule/1');

    expect(chaiHttpResponse.status).to.equal(200);
    expect(chaiHttpResponse.body.message).to.deep.equal('Scheduling canceled successfully');
  });
});