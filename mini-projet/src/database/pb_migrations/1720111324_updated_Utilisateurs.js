/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b1rxw08o92if7wq")

  collection.name = "Utilisateur"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b1rxw08o92if7wq")

  collection.name = "Utilisateurs"

  return dao.saveCollection(collection)
})
