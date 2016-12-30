class QuestionsController < ApplicationController

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
    @question = Question.build(question_params)

    if @question.save
      flash[:notice] = "Question was saved successfully."
      redirect_to @question
    else
      flash[:notice] = "There was an error saving the question."
    end
  end

  private

  def question_params
    params.require(:question).permit(:image_file_name, :audio_file_name, :answer)
  end

end
