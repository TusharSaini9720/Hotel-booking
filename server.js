const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const app = require('./app');

const DB = 'mongodb+srv://itsaini9720:FSepyBZLDR7Z5MdK@cluster0.ufkakvl.mongodb.net/Hotels?retryWrites=true&w=majority'
  //    .replace(
  //   '<PASSWORD>',
  //   process.env.DATABASE_PASSWORD
  // );
  
  mongoose.connect(DB, {
      useNewUrlParser: true,
      //  useCreateIndex: true,
      //  useFindAndModify: false
    })
    .then(() => console.log('DB connection successful..'));
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
