# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

  Your answer: first you will need to generate a migration with the action name. Next would be a $ rails db:migrate. After the migration you will add the column by using $ add_column :table_name :column_name :datatype the foreign key would by on the Student model

  Researched answer: The first step would be to $ rails generate migration action_name_here next would be to $ rails db:migrate. after that you would add_column with the column name as an id and datatype as an integer. the foreign key would be on the Student model.



2. Which RESTful routes must always be passed params? Why?

  Your answer: In my experience the only routes that must be passed params are the ones that would do a specific action on the information such as edit, update, and destroy. 

  Researched answer: The RESTful routes that must always be passed params are edit, update, delete and show because those are calling on specific information in the database and performing methods on each



3. Name three rails generator commands. What is created by each?

  Your answer: The three rails generate commands are model, resouce and controller. In my experience rails generate model will generate a model. Using rails generate controller will create a controller file that will allow you to create methods in. Finally the resource command is used to create a controller and views. It will also link them.

  Researched answer: The three rails generate commands are model, resource and controller. When generating the model it takes the name of the model the name of each column and the data type of each column. When generating a controller you are making a way to interact between the user, views and the model. The resouce generator will create a controller, migration, model and all the routes.



4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET"    location: /students 
get '/students' => 'student#index'
name of the controller is student and the method is index 
this is routing the index method between the server and client which will show the user all the intems in that model.

action: "POST"   location: /students       
get '/students' => 'student#create
name of the controller is student and the method is create 
this is routing the create method between the server and client which allows you to add information to the database

action: "GET"    location: /students/new
get '/students/new' => 'student#new'
name of the controller is student and the method is new 
this is routing the new method between the server and client displaying information to the user

action: "GET"    location: /students/2  
'/students/:id' => 'student#show'
name of the controller is student and the method is show
this is routing the show method between the server and client and will show one item

action: "GET"    location: /students/2/edit    
edit '/students/:id/edit' => 'student#edit'
name of the controller is student and the method is edit 
this is routing the edit method between the server and client and will allow you to edit information in the database

action: "PATCH"  location: /students/2      
patch '/students/:id' => 'student#update
name of the controller is student and the method is update 
this is routing the update method between the server and client and will allow you to modify information in the database

action: "DELETE" location: /students/2      
delete '/students/:id(.:format)' => 'student#destroy'
name of the controller is student and the method is delete 
this is routing the delete method between the server and client and will allow you to delete information in the database 


5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

1) As a user, I can see all the To do list titles listed on the home page of the application.

2) As a user, I can click on the title of a To do list and be routed to a page where I see the title and content of the to do list I selected.

3) As a user, I can navigate from the show page back to the home page.

4) As a user, I see a form where I can create a new to do list.

5) As a user, I can click a button that will take me from the home page to a page where I can create a to do list.

6) As a user, I can navigate from the form back to the home page.

7) As a user, I can click a button that will submit my to do list to the database.

8) As a user, when I submit my to do list, I am redirected to the home page.

9) As a user, I can delete my to do list 

10) As a user, I can update my to do list