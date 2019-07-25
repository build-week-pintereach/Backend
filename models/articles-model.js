const db = require("../data/dbConfig");

module.exports = {
	find,
	findById,
	insert,
	update,
	remove
};

function find() {
	return db("articles");
}

function findById(id) {
	return db("articles").where({ id });
}

// function getArticleList(user_id) {
//   return db("articles").where({ user_id });
// }

// function insert(article) {
// 	return db("articles")
// 		.insert(article)
// 		.returning("id");
// }

function insert(article) {
	return db("articles")
		.insert(article)
		.then(ids => ({ id: ids[0] }));
}

function update(id, article) {
	return db("articles")
		.where({ id })
		.update(article);
}

function remove(id) {
	return db("articles")
		.where({ id })
		.del();
}
