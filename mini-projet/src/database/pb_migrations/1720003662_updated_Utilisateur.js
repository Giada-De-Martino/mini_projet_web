/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5e9c6ncy1qn94kq")

  collection.name = "utilisateur"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5e9c6ncy1qn94kq")

  collection.name = "Utilisateur"

  return dao.saveCollection(collection)
})
