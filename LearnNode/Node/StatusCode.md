# Status Code:

| Code | Meaning               | When to Use                          |
| ---- | --------------------- | ------------------------------------ |
| 200  | OK                    | Successful GET/PUT/DELETE            |
| 201  | Created               | Successful POST request              |
| 204  | No Content            | DELETE success with no response body |
| 400  | Bad Request           | Client error (e.g., missing data)    |
| 401  | Unauthorized          | No valid auth token                  |
| 403  | Forbidden             | Authenticated but not allowed        |
| 404  | Not Found             | Resource does not exist              |
| 500  | Internal Server Error | Unexpected server error              |
