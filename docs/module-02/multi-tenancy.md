# Multi-Tenancy Strategies in Keycloak


## Realm-per-Tenant Model


Each customer has:


- Separate realm
- Isolated users and clients


Pros:


- Strong isolation
- Simpler mental model


Cons:


- Operational overhead


---


## Shared Realm Model


- One realm
- Tenant identified via attributes


Pros:


- Easier operations
- Centralized management


Cons:


- Complex authorization


---


## Organizations Feature (Modern Approach)


Organizations enable:


- Hierarchical tenants
- Delegated admin
- Cleaner separation


Recommended for modern SaaS platforms.