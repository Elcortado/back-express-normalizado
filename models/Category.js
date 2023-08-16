import { Schema, model, Types} from 'mongoose';

let collection = 'categories';

let schema = new Schema ({
    name : {type: String, required: true},
    color : {type: String, required: false}
    
}, {
    timestamps:true
});

let Category = model (collection, schema);

export default Category
