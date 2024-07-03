/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "wh6k9ocxldscr4t",
    "created": "2024-07-03 09:58:55.755Z",
    "updated": "2024-07-03 09:58:55.755Z",
    "name": "Sujet",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ajdfuw0v",
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
  const collection = dao.findCollectionByNameOrId("wh6k9ocxldscr4t");

  return dao.deleteCollection(collection);
})
