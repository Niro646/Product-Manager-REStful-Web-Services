# Product-Manager-REStful-Web-Services

An MVC Rest API built using Node.js, Express.js & MongoDB.
A scalable REST API developed in Node.Js to facilitate CRUD(create, read, update, delete) operations and utility operations on products, categories.

<h2>🛠️ Tools I used:</h2>

<div>
  <img src="https://github.com/devicons/devicon/blob/master/icons/javascript/javascript-original.svg" title="JavaScript" alt="JavaScript" width="70" height="70"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/nodejs/nodejs-original-wordmark.svg" title="Node.js" alt="nodejs" width="70" height="70"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/express/express-original.svg" title="Express.js" alt="expressjs" width="70" height="70"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/mongodb/mongodb-plain-wordmark.svg" title="Mongodb" alt="Mongodb" width="70" height="70"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/npm/npm-original-wordmark.svg" title="npm" alt="npm" width="70" height="70"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/gulp/gulp-plain.svg" title="gulp" alt="gulp" width="70" height="70"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/nodemon/nodemon-original.svg" title="nodemon" alt="nodemon" width="70" height="70"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/postman/postman-original.svg" title="postman" alt="postman" width="70" height="70"/>&nbsp;
  
</div>

> [!NOTE]  
> Highlights information that users should take into account, even when skimming.

# Table of Contents
    Create a Category
    Get all categories
    Get Category by ID
    Update a Category by ID
    Delete a Category by ID
    Route Not Found
    Additional Endpoints




# Table of Contents

- [Create a Category](#create-a-category)
- [Get all Categories](#Get-all-categories)
- [Get Category by ID](#Get-category-by-id)
- [Update a Category by ID](#Update_a_Category_by_ID)
- [Delete a Category by ID](#Delete-a-Category-by-ID)

- [Create a Product](#create-a-product)
- [Get all Products](#Get-all-Products)
- [Get Product by ID](#Get-product-by-id)
- [Update a Product by ID](#Update-a-Product-by-ID)



# Create a Category
 Adding a new category
 
       POST localhost:6000/api/category/add
        

# Get all Categories
 Getting all existing categories information from the DB

       GET localhost:6000/api/category/get

# Get Category by ID
 Getting a specific category by searching the DB for it using a ID

       GET localhost:6000/api/category/get/65e84ce45565cc186a856583

# Update a Category by ID
 Updating a specific Category's content by using ID

       PUT localhost:6000/api/category/update/65e84ce45565cc186a856583

# Delete a Category by ID
 Deleting a  specific Category from the DB

       DELETE localhost:6000/api/category/delete/65e84ce45565cc186a856583

# Create a Product
 Creating a new Product

       POST localhost:6000/api/product/add
> [!NOTE]
> possible raw data for you to enter in the Body section of Request:
> {
    "name":"mass effect 1",
    "unitPrice":"50",
    "categoryId":"65e85df05565cc186a856586"
}

# Get all Products
 Getting all existing Products information from the DB and presenting them to the user

       GET localhost:6000/api/product/get

# Get Product by ID
 Getting a specific Product by searching the DB for it using a ID

       GET localhost:6000/api/product/get/65e8679468b15f9ed414a70d

# Update a Product by ID
 Updating a specific Product's content by using ID

       PUT localhost:6000/api/product/update/65e8679468b15f9ed414a70d
> [!NOTE]
> possible Body of Request for you to update to if you followed the previous example note:
> {
        "_id": "65e8679468b15f9ed414a70d",
        "name": "mass effect 2",
        "unitPrice": 100,
        "categoryId": "65e85df05565cc186a856586"
}
       
                                              





# download files and the run in vscode terminal (cmd terminal) "nodemon" command, basiclly just write nodemon in the cmd teminal

