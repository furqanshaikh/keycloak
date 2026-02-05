# Realm Configuration Fundamentals


## Realm Settings Overview


Realm settings define **global security behavior** for all applications within the realm.


Key areas include:


- Login and user registration
- Tokens and sessions
- Email and localization
- Security defenses


---


## Security Defenses


### Brute Force Detection


Protects against password guessing attacks.


Typical enterprise settings:


- Permanent lockout: Disabled
- Max login failures: 5
- Wait increment: 60 seconds
- Max wait: 15 minutes


### Other Defenses


- X-Frame-Options (Clickjacking)
- Content Security Policy (CSP)
- SSL requirements


---


## Token and Session Settings


### Token Lifetimes


| Token | Recommended |
|-----|-------------|
| Access Token | 5–15 minutes |
| Refresh Token | 30–60 minutes |
| Offline Token | As required |


### Sessions


- SSO Session Idle
- SSO Session Max
- Client Session settings


---


## Email Configuration


Email is required for:


- Password reset
- Account verification
- MFA recovery


Configure:


- SMTP host
- Port
- TLS/SSL
- From address