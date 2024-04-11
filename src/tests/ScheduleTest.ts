import chai from 'chai';
import chaiHttp from 'chai-http';
import sinon from 'sinon';
import { app } from '../app';
import { allSchedulesMock, createdScheduleMock, messageMock, scheduleMock } from './mocks/scheduleMock';
import ScheduleModel from '../models/ScheduleModel';
import { Response } from 'superagent';
import HttpError from '../utils/HttpError';
import { StatusCodes } from 'http-status-codes';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testando rota /schedule', function () {
  describe('Deveria retornar todos os agendamentos', function () {
    let chaiHttpResponse: Response;

    afterEach(sinon.restore);

    it('com sucesso', async () => {
      sinon
        .stub(ScheduleModel, 'findAll')
        .resolves(allSchedulesMock as ScheduleModel[]);

      chaiHttpResponse = await chai
        .request(app)
        .get('/schedule');

      expect(chaiHttpResponse.status).to.equal(200);
      expect(chaiHttpResponse.body).to.be.an('array');
    });
  });

  describe('Deveria criar um agendamento', function () {
    let chaiHttpResponse: Response;

    afterEach(sinon.restore);

    it('com sucesso', async () => {
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

    it('erro ao passar nenhum e-mail', async () => {
      chaiHttpResponse = await chai
        .request(app)
        .post('/schedule')
        .send();

      expect(chaiHttpResponse.status).to.equal(400);
      expect(chaiHttpResponse.body.error).to.deep.equal('Email is required');
    });

    it('erro ao passar um e-mail apenas com espaços vazios', async () => {
      chaiHttpResponse = await chai
        .request(app)
        .post('/schedule')
        .send({ email: ' '});

      expect(chaiHttpResponse.status).to.equal(400);
      expect(chaiHttpResponse.body.error).to.deep.equal('Email cannot be an empty string');
    });

    it('erro ao passar um e-mail com o formato invalido', async () => {
      chaiHttpResponse = await chai
        .request(app)
        .post('/schedule')
        .send({ email: 'teste.com'});

      expect(chaiHttpResponse.status).to.equal(400);
      expect(chaiHttpResponse.body.error).to.deep.equal('Invalid email format');
    });
  });

  describe('Deveria deletar um agendamento', function () {
    let chaiHttpResponse: Response;

    afterEach(sinon.restore);

    it('com sucesso', async () => {
      const scheduleStub = sinon.stub(ScheduleModel, 'findByPk').resolves(scheduleMock as ScheduleModel);
      const deleteStub = sinon.stub(ScheduleModel, 'destroy').resolves();

      chaiHttpResponse = await chai
        .request(app)
        .delete('/schedule/1');

      expect(chaiHttpResponse.status).to.equal(200);
      expect(chaiHttpResponse.body.message).to.deep.equal('Scheduling canceled successfully');

      sinon.assert.calledOnce(scheduleStub);
      sinon.assert.calledOnce(deleteStub);
    });

    it('erro ao informar um id inexistente', async () => {
      sinon
        .stub(ScheduleModel, 'findByPk')
        .resolves();

        const id = 999;

      chaiHttpResponse = await chai
        .request(app)
        .delete(`/schedule/${id}`);

      expect(chaiHttpResponse.status).to.equal(404);
      expect(chaiHttpResponse.body).to.deep.equal(`Schedule not found with ID: ${id}`);
    });

    it('erro ao não informar um numero de id na rota', async () => {
      chaiHttpResponse = await chai
        .request(app)
        .delete('/schedule/abc');

      expect(chaiHttpResponse.status).to.equal(400);
      expect(chaiHttpResponse.body.error).to.deep.equal('ID must be a number');
    });
  });
});