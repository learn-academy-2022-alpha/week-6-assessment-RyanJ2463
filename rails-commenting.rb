# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) Blogpost is the child class from applicationcontroller and is using the the index method to show all content 
class BlogPostsController < ApplicationController
  def index
    # ---2) saving all the content in a instance variable 
    @posts = BlogPost.all
  end

  # ---3) the show will find one item by the id (params[:id]) and show all the information in it.
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) new is method to make new blog post and add it to the database.
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) the create will submit the new data to the database. the valid will check if there is any errors on the information. the if will just send the user to another page if valid or not
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  def edit
    # ---6) edit will let you edit a certain post when you access the id
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) after a user edits they will be able to update the new information to the database using update. again checking if the information is valid 
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8) Destroy is deleting the blog post with the specific id that was pick. the if statement is saying where the user is brought after destroying the blog post. Or if it wasnt destroyed it will 
      redirect_to blog_post_path(@post)
    end
  end

  # ---9) private makes it so the items below can only be called on internally. Its built in protection that rails has provided.
  private
  def blog_post_params
    # ---10) this is making it so the only information that can be shown is the blog post's title and content
    params.require(:blog_post).permit(:title, :content)
  end
end
