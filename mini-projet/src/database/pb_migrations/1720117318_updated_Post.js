/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("eij30kkey12v440")

  // remove
  collection.schema.removeField("dwibw84j")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("eij30kkey12v440")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dwibw84j",
    "name": "dateCreation",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
})
