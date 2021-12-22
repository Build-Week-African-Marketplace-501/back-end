# Users

### `GET /api/users` - _WIP_

_Returns an array of all users in the database._

Parameters:

```json

```

Request Body:

```json

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

_Returns the user in the database with a specific user_id._

Parameters:

```json
user_id: integer
```

Request Body:

```json

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

_Returns the items in the database with a specific user_id._

Parameters:

```json
user_id: integer
```

Request Body:

```json

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

---

### `PUT /api/users/:user_id` - _WIP_

_Replaces user in database by user_id with request body and returns the updated user._

Parameters:

```json
user_id: integer
```

Request Body:

```json
{
  "username": "string - required",
  "password": "string - required"
}
```

Returns:

```json
{
  "data": {
    "user_id": "integer",
    "username": "string"
  }
}
```
