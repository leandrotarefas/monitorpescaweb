import { Schema as _Schema, model } from 'mongoose';

const Schema = _Schema;
const DataSchema = new Schema({
    _id: { type: String },
    dateTime: {
        type: Date,
        default: Date.now
    },
    data: {
        type: Object
    }
});

const StockModel = model('Stock', DataSchema);

export default StockModel;
