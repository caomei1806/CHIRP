## **CH!RP**

#### Karolina Grochal

## CHECK **LAST** README SEGMENT

## Run project

### Terminal 1

```
$ npm i
$ npm start
```

### Terminal 2

```
$ json-server --watch db.json --port 3001
```

## Description

CH!RP - social media/ photo video sharing app

## Functionality

### Account </main>

#### 1. Create account

#### 2. Sign in **use e.g. user2@gmail.com** _any password could be typped (doesn't check)_

### Posts </main>

#### 1. Add post (**Create+** link)

#### 2. Show feed page (**Home** link)

### Like </main>

#### 1. Like/dislike post (click **♡**)

### Comment </main>

#### 1. Add comment

#### 2. Delete own comment (click **...** button and then **bin icon**)

## Routes

domainUrl - run locally localhost:3000 </main>
databaseServerUrl - run locally localhost:3001 </main>

### User routes

##### http://domainUrl/sign-up

##### http://domainUrl/sign-in

Requests the

##### http://databaseServerUrl/users

As result is given **User** type object with attributes: **id, email, password**

### Post routes

##### http://domainUrl/post-add

##### http://domainUrl/posts

Requests the

##### http://databaseServerUrl/posts

As result is given **Post** type object or array of objects with attributes: **id, imageUrl, caption, postedAt, ownerId**

##### /post-add

Makes request to **cloudinary** (cloud media storage) API to store posted pictures

## Json-server request routes

##### http://databaseServerUrl/users

Requests route for: **signIn, signUp, getUser** functionality

##### http://databaseServerUrl/posts

Requests route for: **post, getPosts** functionality

##### http://databaseServerUrl/likes

Requests route for: **like, checkIfLiked, dislike** functionality

##### http://databaseServerUrl/comments

Requests route for: **addComment, getComment, getComments, deleteComment** functionality

## Unfinished functionality

Search not yet in use :**version: 0.1.0**
When e.g. signing In doesn't redirect (react router v6.10) :**version: 0.1.0**
Input error handling not yet added :**version: 0.1.0**
Component functionalities need to extracted to reusable functions :**version: 0.1.0**
Like button isn't coloured if previously liked :**version: 0.1.0**
Comment icon should be linked to addComment input :**version: 0.1.0**
