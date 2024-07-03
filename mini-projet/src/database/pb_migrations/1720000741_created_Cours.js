/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "fk4vaxqyrimea5m",
    "created": "2024-07-03 09:59:01.780Z",
    "updated": "2024-07-03 09:59:01.780Z",
    "name": "Cours",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "fbtohsu3",
        "name": "titre",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
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
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("fk4vaxqyrimea5m");

  return dao.deleteCollection(collection);
})
