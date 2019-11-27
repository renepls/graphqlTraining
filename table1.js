import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const table1 = new Schema({
    name: String,
    lastname: String
});
export default mongoose.model('table1', table1);