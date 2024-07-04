/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fk4vaxqyrimea5m")

  collection.updateRule = "auteurId = @request.auth.id"
  collection.deleteRule = "auteurId = @request.auth.id"

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pr6aoxk7",
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
  const collection = dao.findCollectionByNameOrId("fk4vaxqyrimea5m")

  collection.updateRule = "autheurId = @request.auth.id"
  collection.deleteRule = "autheurId = @request.auth.id"

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pr6aoxk7",
    "name": "autheurId",
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
})
