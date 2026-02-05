# Client Configuration Patterns


## Client Authentication Types


| Client Type | Authentication |
|------------|---------------|
| Public | None |
| Confidential | Client secret / mTLS |
| Bearer-only | N/A |


## Service Accounts


Used for:


- Service-to-service authentication
- Background jobs
- Automation scripts


Best practices:


- Assign minimal roles
- Use client credentials flow


---


## Redirect URIs and Web Origins


- Always restrict redirect URIs
- Avoid wildcards in production
- Separate dev and prod clients


---


## Client Templates (Conceptual)


Use consistent patterns for:


- Web apps
- SPAs
- APIs
- Microservices


This improves governance and reduces misconfiguration risk.