MVC         

## 1.Collections/ Modal 
- User
- GirlImages
- Comment

## 2. Controler
CRUD 
    - Create 
    - Read = get Items with Active == true
    - Update
    - Delete - never really delete items = set Active to false

## 3. Route /RESTful 
Modern day : 
    - Backend rendering is not popular 
    - Backend return data instead of HTML 
        - node: JSON 
        - C#/Java: XML  
    - API : RESTful services 

    URI: /api/girl-images/:id/like 
    POST -> /api/girl-image/ = create a new image 
    GET -> /api/girl-image/?page = create a new image 
req.query.page

    PUT -> /api/girl-image/ = update image 
    DELETE -> /api/girl-image/ = delete image 

### 4. Cooked Data 


. Collections / Model

##1. Users

+ Avatar
+ Username
+ Password
+ Email
+ Active

##2. Images

+ ImageUrl
+ Title
+ Description
+ CreatedAt
+ CreatedBy
+ View
+ Like
+ Active
+ Comment
+ CreatedBy
+ Content


2. Controller

CRUD

Create
Read - Get items with Active == true
Update
Delete - Never really delete item: delete action = set Active to false
3. Route / RESTful

Modern day:

Backend rendering is not popular
Backend return data instead of HTML
node: JSON
API: RESTful
URI are all nouns
Type of Action is determined by request method
URI: /api/images/ POST -> /api/images/ = create new girlImage GET -> /api/images/?page = read all Images

GET -> /api/images/:id = read one girlImage req.params.id 

PUT -> /api/images/:id = update one girlImage 

DELETE -> /api/images/:id = delete one girlImage

POST -> /api/images/:id/like = like image DELETE -> /api/images/:id/like = unlike image

POST -> /api/images/:id/comment = comment image DELETE -> /api/images/:id/comment/:commentid = delete comment

URI: /api/users/

4. Cooked Data

/api/images/

_id
ImageUrl
Title
Description
CreatedAt
CreatedBy
View
Like
/api/images/:id

_id
ImageUrl
Title
Description
CreatedAt
CreatedBy
View
Like
Comment
CreatedBy
Content