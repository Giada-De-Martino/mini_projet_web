/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wh6k9ocxldscr4t")

  collection.name = "Sujet"

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bthzjtvj",
    "name": "listePost",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "eij30kkey12v440",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wh6k9ocxldscr4t")

  collection.name = "sujet"

  // remove
  collection.schema.removeField("bthzjtvj")

  return dao.saveCollection(collection)
})
