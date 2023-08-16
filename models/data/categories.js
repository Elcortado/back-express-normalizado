import 'dotenv/config.js';
import '../../config/database.js';
import Category from '../Category.js';

let  categories = [
    {
        name: "Resistencia",
        color: "tatata"
       
    }, {
        name: " jajajaj",
        color: "jejjej"
      
    }

]

Category.insertMany(categories);