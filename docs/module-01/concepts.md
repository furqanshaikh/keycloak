# Keycloak Core Concepts


## OAuth 2.0 Overview


OAuth 2.0 enables delegated authorization.


### Core Roles


- Resource Owner (User)
- Client (Application)
- Authorization Server (Keycloak)
- Resource Server (API)


### Common Flows


| Flow | Use Case |
|----|----|
| Authorization Code + PKCE | Web, SPA |
| Client Credentials | Service-to-service |
| Device Flow | CLI / Smart devices |


## OpenID Connect (OIDC)


OIDC adds authentication on top of OAuth 2.0.


### Token Types


| Token | Purpose |
|----|----|
| ID Token | User identity |
| Access Token | API access |
| Refresh Token | Token renewal |


### JWT Claims


- iss (issuer)
- sub (subject)
- aud (audience)
- exp (expiry)
- roles / scope


## Keycloak Architecture


### Core Components


- Realm
- Client
- User
- Role
- Group


### Realm Model


- One Keycloak instance → many realms
- Realms are isolated security boundaries


### Client Types


| Type | Usage |
|----|----|
| Public | SPA / Mobile |
| Confidential | Backend apps |
| Bearer-only | APIs |


### Extensibility (SPI)


Keycloak supports extensions using SPIs:


- Authentication SPI
- User Storage SPI
- Event Listener SPI
- Protocol Mapper SPI