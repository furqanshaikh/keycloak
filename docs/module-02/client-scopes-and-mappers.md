# Client Scopes and Protocol Mappers


## Client Scopes


Client scopes define **reusable token content**.


### Types


- Default scopes (always applied)
- Optional scopes (requested by client)


Examples:


- profile
- email
- roles
- custom-api-scope


---


## Protocol Mappers


Protocol mappers control **what appears inside tokens**.


Common mappers:


- User attribute mapper
- Group membership mapper
- Realm role mapper
- Client role mapper


---


## Best Practices


- Keep tokens small
- Avoid exposing sensitive attributes
- Use scopes instead of custom claims where possible
- Separate user identity from authorization data