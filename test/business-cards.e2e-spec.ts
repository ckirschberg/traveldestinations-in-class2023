import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { TestModule } from './../src/test.module';
import { CreateBusinessCardDto } from './../src/business-cards/dto/create-business-card.dto';

describe('BusinessCardsController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [TestModule], // Which initialiser to use?
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    await app.init();
  });

  describe('/business-cards (POST)', () => {
    it('should create a new valid business card', async () => {
        // Arrange
        const bc = new CreateBusinessCardDto('Christian Kirschberg', 'kirs@cphbusiness.dk');
        
        // ACT
        const response = await request(app.getHttpServer())
            .post('/business-cards')
            .send(bc)
            .expect(201);

        const createdBusinessCard = response.body;

        // ASSERT (expect)
        expect(createdBusinessCard.name).toEqual(bc.name);
        expect(createdBusinessCard._id).toBeDefined();
        expect(createdBusinessCard.email).toEqual(bc.email);
    });

    it('should not create a new invalid business card with no name', async () => {
        // Arrange
        const bc = new CreateBusinessCardDto('', 'kirs@cphbusiness.dk');

        // ACT
        const response = await request(app.getHttpServer())
            .post('/business-cards')
            .send(bc)
            .expect(400);

        const errorResponse = response.body;

        // console.log(errorResponse);

        // ASSERT (expect)
        expect(errorResponse.message[0]).toEqual('name should not be empty');
        expect(errorResponse.error).toEqual('Bad Request');
    });
    it('should not create a new invalid business card with no email', async () => {
        // Arrange
        const bc = new CreateBusinessCardDto('Christian Kirschberg', '');

        // ACT
        const response = await request(app.getHttpServer())
            .post('/business-cards')
            .send(bc)
            .expect(400);

        const errorResponse = response.body;

        // console.log(errorResponse);

        // ASSERT (expect)
        expect(errorResponse.message[0]).toEqual('email should not be empty');
        expect(errorResponse.error).toEqual('Bad Request');
    });
});
});
