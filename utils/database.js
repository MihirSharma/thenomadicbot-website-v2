const mongoose = require("mongoose");

let isConnected = false;

export const connectToDb = async () => {
	try {
		await mongoose.connect("mongodb://127.0.0.1:27017/theNomadicBot");
		return true;
	} catch (e) {
		return { errored: true, error: e };
	}
};
