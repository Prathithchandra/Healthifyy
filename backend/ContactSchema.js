
import mongoose from 'mongoose';
const ContactSchema=new mongoose.Schema({

email: String,
subject: String,
message:String

});
const Conatctmodel=mongoose.model('ContactModel',ContactSchema);
export default Conatctmodel;