import { model, models, Schema } from "mongoose";

const ContactSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	message: {
		type: String,
		required: true,
	},
});

const Contact = models.Contact || model("Contact", ContactSchema);

export default Contact;
