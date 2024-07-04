/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wh6k9ocxldscr4t")

  // remove
  collection.schema.removeField("fmgsb8c9")

  // remove
  collection.schema.removeField("bthzjtvj")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "uwlix2ry",
    "name": "auteurId",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "b1rxw08o92if7wq",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fmgsb8c9",
    "name": "auteurId",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "5e9c6ncy1qn94kq",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

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

  // remove
  collection.schema.removeField("uwlix2ry")

  return dao.saveCollection(collection)
})
