# Items

---

### `GET /api/items` - _WIP_

_Returns an array containing all items in the database._

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

### `GET /api/items/:item_id` - _WIP_

_Returns an array containing all items in the database._

Parameters:

```json
item_id: integer
```

Request Body:

```json
null
```

Returns:

```json
{
  "data": {
    "item_id": "integer",
    "description": "string",
    "location": "string",
    "creator": {
      "user_id": "integer",
      "username": "string"
    }
  }
}
```

---

### `POST /api/items` - _WIP_

_Adds request body to database as a new item and returns the new item._

Parameters:

```json
null
```

Request Body:

```json
{
  "item_name": "string - required",
  "description": "string - required",
  "location": "string - required",
  "price": "float - required"
}
```

Returns:

```json
{
  "data": {
    "item_id": "integer",
    "item_name": "string",
    "description": "string",
    "location": "string",
    "price": "float"
  }
}
```

---

### `PUT /api/items/:item_id` - _WIP_

_Replaces item in database by item_id with request body to and returns the updated item._

Parameters:

```json
item_id: integer
```

Request Body:

```json
{
  "item_name": "string - required",
  "description": "string - required",
  "location": "string - required",
  "price": "float - required"
}
```

Returns:

```json
{
  "data": {
    "item_id": "integer",
    "item_name": "string",
    "description": "string",
    "location": "string",
    "price": "float"
  }
}
```

---

### `DELETE /api/items/:item_id` - _WIP_

_Removes item from database using item_id and returns the item_id of the deleted item._

Parameters:

```json
item_id: integer
```

Request Body:

```json
null
```

Returns:

```json
{
  "data": {
    "item_id": "integer"
  }
}
```
