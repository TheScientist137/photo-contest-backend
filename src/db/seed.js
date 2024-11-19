const { ImageModel, CaptionModel } = require('./models');

const seedDataBase = async () => {
 try {
  const image1 = await ImageModel.create({
   url: 'https://example.com/image1',
   title: 'Title image 1'
  });

  const image2 = await ImageModel.create({
   url: 'https://example.com/image2',
   title: 'Title image 2'
  });

  await CaptionModel.create({
   text: 'Caption image 1',
   imageId: image1.id
  });

  await CaptionModel.create({
   text: 'Another caption for image 1',
   imageId: image1.id
  });

  await CaptionModel.create({
   text: 'Caption for image 2',
   imageId: image2.id
  });

 } catch (error) {
    console.error('Error populating database', error);
 }
}

module.exports = { seedDataBase };