import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { TestModule } from './../src/test.module';
import { CreateBusinessCardDto } from './../src/business-cards/dto/create-business-card.dto';
import { BusinessCardsService } from './../src/business-cards/business-cards.service';

describe('BusinessCardsController (e2e)', () => {
  let app: INestApplication;
  let bcService: BusinessCardsService;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [TestModule], // Which initialiser to use?
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    bcService = moduleFixture.get(BusinessCardsService);

    await app.init();
    await bcService.removeAll();
  });

  describe('/business-cards (POST)', () => {
    it('... should create a new valid business card', async () => {
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
    describe('/business-cards (GET)', () => {
        it('should return all business cards', async () => {
        });
    });

    describe('/business-cards/:id (DELETE)', () => {
        it('should delete a specific business card', async () => {
            //Arrange
            const getResponseBefore = await request(app.getHttpServer())
                                .get('/business-cards')
            const numberOfBusinessCardsBefore = getResponseBefore.body.length;

            const bc1 = new CreateBusinessCardDto('Christian Kirschberg', 'kirs@cphbusiness.dk');
            const bc2 = new CreateBusinessCardDto('Jorge', 'jorge@cphbusiness.dk');

            const createdBc1 = await bcService.create(bc1);
            const createdBc2 = await bcService.create(bc2);
        
            // ACT
            const response = await request(app.getHttpServer())
                                    .delete('/business-cards/' + createdBc1._id)
                                    .expect(200);

            const getResponse = await request(app.getHttpServer())
                                .get('/business-cards')

            expect(getResponse.body.length).toEqual(numberOfBusinessCardsBefore + 1);
            expect(getResponse.body[getResponse.body.length-1]._id.toString()).toEqual(createdBc2._id.toString());

        });
    });

    describe('/business-cards/:id (PUT)', () => {
        it('should update a specific business card', async () => {
        
        // ARRANGE
        // 1: Create a bc obj
        // 2: save it throught the service to db
        // 3: Create a new user obj. with the same id but different firstname
        
        // ACT
        // 4: PUT the new user obj. to the server from no. 3.

        // ASSERT
        // 5: Use findOne from service to get the user obj. with the id from no. 1.
        // 6: expect the firstname to be the same as the firstname from no. 3.
        
        const bc1 = new CreateBusinessCardDto('Christian Kirschberg', 'kirs@cphbusiness.dk');
        const createdBc1 = await bcService.create(bc1);
        createdBc1.name = 'George';

        // console.log(createdBc1);

        const response = await request(app.getHttpServer())
                        .put('/business-cards/' + createdBc1._id.toString())
                        .send(createdBc1)
                        .expect(200);

        // console.log(response.body);
            const findOneResponse = await bcService.findOne(createdBc1._id.toString());
            expect(findOneResponse.name).toEqual(createdBc1.name);
        });
        
        // it('should...', async () => {
        // });
    });
});
