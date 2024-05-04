
# Como exportar as tabelas do mongo
mongoexport --uri=mongodb+srv://lab77:<____PASSWORD___>@lab77.ccvx7.mongodb.net/<___DATABASE___> --jsonArray --collection=users  --out=users.json
mongodump --uri=mongodb+srv://lab77:<____PASSWORD___>@lab77.ccvx7.mongodb.net/<___DATABASE___> --out=seed

mongorestore --uri mongodb+srv://lab77:<PASSWORD>@lab77.ccvx7.mongodb.net ./seed

# exportar a base local para salvar o estado
mongodump --uri=mongodb://lab77:lab77@localhost:27030/dev-lab77 --out=seed
