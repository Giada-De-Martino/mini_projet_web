/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fk4vaxqyrimea5m")

  collection.name = "cours"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fk4vaxqyrimea5m")

  collection.name = "Cours"

  return dao.saveCollection(collection)
})
