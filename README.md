# African Marketplace

Sauti Africa empowers small business owners, particularly women, to improve their business and economic opportunities to grow out of poverty.

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)

## Deployment

Deployed at:

```
  https://bw-african-marketplace-501.herokuapp.com/
```

## API Reference

[Owners](#owners)  
[Items](#items)  
[Authentication](#authentication)

### Owners

#### Get all owners - WIP

```http
  GET /api/owners
```

Returns:

```json
{
  "data": {}
}
```

#### Get owner by owner_id - WIP

```http
  GET /api/owners/:owner_id
```

| Parameter  | Type     | Description                        |
| :--------- | :------- | :--------------------------------- |
| `owner_id` | `string` | **Required**. Id of owner to fetch |

Returns:

```json
{
  "data": {}
}
```

#### Add owner - WIP

```http
  POST /api/owners
```

| Parameter   | Type     | Description                     |
| :---------- | :------- | :------------------------------ |
| `name`      | `string` | **Required**. Name of owner     |
| `password`  | `string` | **Required**. Password of owner |
| `image_url` | `string` | Image of owner                  |

Returns:

```json
{
  "data": {}
}
```

#### Edit owner by owner_id - WIP

```http
  PUT /api/owners/:owner_id
```

| Parameter   | Type     | Description                       |
| :---------- | :------- | :-------------------------------- |
| `owner_id`  | `string` | **Required**. Id of owner to edit |
| `name`      | `string` | **Required**. Name of owner       |
| `password`  | `string` | **Required**. Password of owner   |
| `image_url` | `string` | Image of owner                    |

Returns:

```json
{
  "data": {}
}
```

### Items

#### Get all items - WIP

```http
  GET /api/items
```

Returns:

```json
{
  "data": {}
}
```

#### Get item by item_id - WIP

```http
  GET /api/items/:item_id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `item_id` | `string` | **Required**. Id of item to fetch |

Returns:

```json
{
  "data": {}
}
```

#### Get all items for owner_id - WIP

```http
  GET /api/owners/:owner_id/items
```

| Parameter  | Type     | Description                        |
| :--------- | :------- | :--------------------------------- |
| `owner_id` | `string` | **Required**. Id of owner to fetch |

Returns:

```json
{
  "data": {}
}
```

#### Get item by item_id for owner_id - WIP

```http
  GET /api/owners/:owner_id/items/:item_id
```

| Parameter  | Type     | Description                        |
| :--------- | :------- | :--------------------------------- |
| `owner_id` | `string` | **Required**. Id of owner to fetch |
| `item_id`  | `string` | **Required**. Id of item to fetch  |

Returns:

```json
{
  "data": {}
}
```

#### Add item - WIP

```http
  POST /api/items
```

| Parameter     | Type     | Description                       |
| :------------ | :------- | :-------------------------------- |
| `item_name`   | `string` | **Required**. Name of item        |
| `location`    | `string` | **Required**. Location of owner   |
| `description` | `string` | **Required**. Description of item |
| `price`       | `string` | **Required**. Price of item       |

Returns:

```json
{
  "data": {}
}
```

#### Edit owner by owner_id - WIP

```http
  PUT /api/items
```

| Parameter     | Type     | Description                       |
| :------------ | :------- | :-------------------------------- |
| `item_name`   | `string` | **Required**. Name of item        |
| `location`    | `string` | **Required**. Location of owner   |
| `description` | `string` | **Required**. Description of item |
| `price`       | `string` | **Required**. Price of item       |

Returns:

```json
{
  "data": {}
}
```
