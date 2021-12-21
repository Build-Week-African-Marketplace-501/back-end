# Users

### `GET /api/users` - _WIP_

_Returns an array of all users in the database._

Parameters:

```json
null
```

Request Body:

```json
null
```

Returns:

```json
{
  "data": [
    {
      "user_id": "integer",
      "username": "string",
      "image_url": "string | null"
    },
    {
      "user_id": "integer",
      "username": "string",
      "image_url": "string | null"
    }
    // ...
  ]
}
```

---

### `GET /api/users/:user_id` - _WIP_

Parameters:

```json
user_id: integer
```

Request Body:

```json
null
```

Returns:

```json
{
  "data": {
    "user_id": "integer",
    "username": "string",
    "image_url": "string | null",
    "items_listed": [
      { "item_id": "integer", "item_name": "string" },
      { "item_id": "integer", "item_name": "string" }
      // ...
    ]
  }
}
```

---

### `GET /api/users/:user_id/items` - _WIP_

Parameters:

```json
user_id: integer
```

Request Body:

```json
null
```

Returns:

```json
{
  "data": [
    {
      "item_id": "integer",
      "description": "string",
      "location": "string"
    },
    {
      "item_id": "integer",
      "description": "string",
      "location": "string"
    }
    // ...
  ]
}
```
