/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("eij30kkey12v440")

  // remove
  collection.schema.removeField("gitopzbl")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "adazie8q",
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
  const collection = dao.findCollectionByNameOrId("eij30kkey12v440")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gitopzbl",
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

  // remove
  collection.schema.removeField("adazie8q")

  return dao.saveCollection(collection)
})
