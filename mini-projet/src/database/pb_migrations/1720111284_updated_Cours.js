/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fk4vaxqyrimea5m")

  // remove
  collection.schema.removeField("cs5qb5up")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fk4vaxqyrimea5m")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cs5qb5up",
    "name": "listeSujet",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "wh6k9ocxldscr4t",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
})
