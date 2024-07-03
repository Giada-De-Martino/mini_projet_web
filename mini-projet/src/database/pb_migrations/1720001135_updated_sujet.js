/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wh6k9ocxldscr4t")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tr1svy9j",
    "name": "nbPost",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "7blabq6d",
    "name": "dateDernierMessage",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wh6k9ocxldscr4t")

  // remove
  collection.schema.removeField("tr1svy9j")

  // remove
  collection.schema.removeField("7blabq6d")

  // remove
  collection.schema.removeField("fmgsb8c9")

  return dao.saveCollection(collection)
})
