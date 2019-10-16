# Appointment Booking Tool

## Overview

You have been tasked with building an API for an appointment booking tool. The front end already exists\*\* with the features listed below. Your job is to build an API that will facilitate all of these user stories that currently exist on the front end.

## Technologies Involved

> \* = optional

- NodeJS
- ExpressJS (and commonly used middleware)
- KnexJS
- TypeScript\*
- Joi\*

## Requirements

All of the following MUST contain explanations using comments:

- Endpoints
- Queries

Example:

```js
// Get all users
knex('users').then(users => res.json(users))
```

## Feature List

### Base Goals

- As a registered user, I can create an appointment
- As a registered user, I can see all of my current and past appointments
- As a registered user, I can update an existing appointment
- As a registered user, I can mark an appointment as completed
- As a registered user, I can delete an existing appointment

### Stretch Goals

- As a unregistered user, I can create an account
- As a registered user, I can log in with my email and password
- As a registered user, I can send a appointment invite to another registered user

### Nightmare Mode

- BUILD THE CLIENT!
