/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wh6k9ocxldscr4t")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yakzgvt5",
    "name": "coursId",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "fk4vaxqyrimea5m",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wh6k9ocxldscr4t")

  // remove
  collection.schema.removeField("yakzgvt5")

  return dao.saveCollection(collection)
})
