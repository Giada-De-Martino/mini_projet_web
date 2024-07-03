/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wh6k9ocxldscr4t")

  collection.name = "sujet"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wh6k9ocxldscr4t")

  collection.name = "Sujet"

  return dao.saveCollection(collection)
})
