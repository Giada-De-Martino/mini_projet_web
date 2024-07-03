/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5e9c6ncy1qn94kq")

  collection.name = "Utilisateur"

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sb1tglpc",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "doeqowkc",
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5e9c6ncy1qn94kq")

  collection.name = "utilisateur"

  // remove
  collection.schema.removeField("sb1tglpc")

  // remove
  collection.schema.removeField("doeqowkc")

  return dao.saveCollection(collection)
})
