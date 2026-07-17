# OWASP Juice Shop Challenges

This repository documents two OWASP Juice Shop challenges completed as part of a practical DevSecOps learning project. It includes reproducible exploitation steps, security impact analysis, remediation recommendations, and video demonstrations.

> ⚠️ **Disclaimer:**  
> This repository is intended strictly for educational purposes.  
> All activities demonstrated here were conducted in a controlled environment on intentionally vulnerable applications.  
> Do not use these techniques against systems you do not own or have explicit permission to test.

---

## 📘 Table of Contents

- [Project Overview](#-project-overview)
- [Repository Structure](#-repository-structure)
- [Quickstart](#-quickstart)
- [Environment and Tools](#️-environment-and-tools)
- [Challenges Completed](#-challenges-completed)
- [Security Lessons](#️-security-lessons)

---

## 📋 Project Overview

This repository documents selected OWASP Juice Shop challenges completed as part of a practical DevSecOps learning project.

The focus of this project is to:

- demonstrate practical exploitation of web application vulnerabilities
- document each challenge in a clear and reproducible way
- explain the technical cause of each vulnerability
- show the possible security impact
- describe suitable mitigation strategies

Each challenge includes:

- a detailed technical write-up
- the exact exploitation steps
- the manipulated request
- a successful verification
- a video demonstration
- recommended remediation measures

---

## 📁 Repository Structure

```text
juice-shop-meister/
├── README.md
├── .gitignore
└── challenges/
    ├── forged-review/
    │   └── README.md
    └── change-benders-password/
        └── README.md
```

---

## 🚀 Quickstart

This repository contains documentation and video demonstrations for two OWASP Juice Shop challenges.

To review the project:

1. Open one of the challenge folders inside `challenges/`.
2. Read the individual challenge documentation.
3. Use the video links to watch the complete demonstrations.
4. Run OWASP Juice Shop locally to reproduce the documented steps in a controlled environment.

---

## 🛠️ Environment and Tools

The challenges were completed in the following local training environment:

- Kali Linux
- OWASP Juice Shop
- Firefox
- Firefox Developer Tools
- Network tab
- Edit and Resend
- Visual Studio Code
- Git
- GitHub
- ScreenPal

---

## ✅ Challenges Completed

The following challenges are included in this repository:

---

### 1. Forged Review

- **Category:** Broken Access Control → Horizontal Privilege Escalation
- **Target:** Product review functionality
- **Manipulated field:** `author`
- **Impersonated user:** `admin@juice-sh.op`
- **Status:** Solved
- **Summary:** A product review is submitted on behalf of another user by modifying the client-controlled `author` field in the request body.

Example manipulated request body:

```json
{
  "message": "Forged review test",
  "author": "admin@juice-sh.op"
}
```

The vulnerability exists because the backend trusts identity information sent by the client instead of deriving the user identity from the authenticated session.

- 📄 [Forged Review challenge](https://github.com/StevanAleksandrov/juice-shop-meister/blob/main/challenges/forged-review/README.md)
- 🎥 [Watch Video Demo](https://go.screenpal.com/watch/cOi6qdnUvuF)
---

### 2. Change Bender's Password

- **Category:** Broken Authentication
- **Target user:** `bender@juice-sh.op`
- **New password:** `slurmCl4ssic`
- **Vulnerable parameter:** `current`
- **Status:** Solved
- **Summary:** Bender's password is changed without knowing the current password by removing the `current` parameter from the password-change request.

Original request:

```http
GET /rest/user/change-password?current=test&new=test123&repeat=test123
```

Manipulated request:

```http
GET /rest/user/change-password?new=slurmCl4ssic&repeat=slurmCl4ssic
```

The vulnerability exists because the backend processes the password change even when the current password is not supplied or verified.

The result is confirmed by logging in normally with:

```text
Email: bender@juice-sh.op
Password: slurmCl4ssic
```

- 📄 [Change Bender's Password challenge](https://github.com/StevanAleksandrov/juice-shop-meister/blob/main/challenges/change-benders-password/README.md)
- 🎥 [Watch Video Demo](https://go.screenpal.com/watch/cOiXQHnUwXw)

---

## 🛡️ Security Lessons

The completed challenges demonstrate several important security principles:

- never trust identity information supplied by the client
- derive the user identity from the authenticated session or token
- enforce authorization checks on the server side
- always verify the current password before allowing a password change
- reject incomplete or manipulated requests
- do not use `GET` requests for sensitive state-changing operations
- validate all security-critical data on the backend
- log and monitor suspicious authentication and account-change attempts