/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "5e9c6ncy1qn94kq",
    "created": "2024-07-03 10:03:46.860Z",
    "updated": "2024-07-03 10:03:46.860Z",
    "name": "utilisateur",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "bad5tuka",
        "name": "username",
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
        "id": "2h3mbbrq",
        "name": "password",
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
  const collection = dao.findCollectionByNameOrId("5e9c6ncy1qn94kq");

  return dao.deleteCollection(collection);
})
