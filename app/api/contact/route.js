import { connectToDb } from "@/utils/database";
import Contact from "@/models/contact.model";

export const POST = async (req, res) => {
	const { name, email, message } = await req.json();
	let DbConnection = await connectToDb();
	if (DbConnection.errored) {
		return new Response("Something went wrong!!!");
	}

	let createContact = await Contact.create({ name, email, message });

	return new Response(createContact);
};
