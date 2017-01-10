class PrepsController < ApplicationController
  before_action :authorize_user, except: [:show]
  before_action :authenticate_user!, except: [:show]

  def index
    @preps = Preps.all
  end

  def show
    @prep = Prep.find(params[:id])
  end

  def new
    @prep = Prep.new
  end

  def create
    @prep = Prep.new(prep_params)

    if @prep.save
      flash[:notice] = "Prep was saved successfully."
      redirect_to @prep
    else
      flash[:notice] = "There was an error saving the prep."
    end
  end

  def edit
  end

  private

  def prep_params
    params.require(:prep).permit(:letters)
  end

  def authorize_user
    unless current_user.admin?
      flash[:alert] = "You must be an admin to do that."
      redirect_to root_path
    end
  end
end
