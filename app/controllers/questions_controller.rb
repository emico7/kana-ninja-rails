class QuestionsController < ApplicationController
  before_action :authenticate_user!, except: [:show]
  before_action :authorize_user, except: [:show]

  def index
    @questions = Question.all
  end

  def show
    @question = Question.find(params[:id])
  end

  def new
    @question = Question.new
  end

  def create
    @question = Question.new(question_params)

    if @question.save
      flash[:notice] = "Question was saved successfully."
      redirect_to @question
    else
      flash[:notice] = "There was an error saving the question."
    end
  end

  private

  def question_params
    params.require(:question).permit(:image_file_name, :audio_file_name, :answer, :letters, :translation)
  end

  def authorize_user
    unless current_user.admin?
      flash[:alert] = "You must be an admin to do that."
      redirect_to root_path
    end
  end
end
