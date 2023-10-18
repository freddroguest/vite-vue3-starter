class ProcessingsController < ApplicationController
  before_action :set_processing, only: %i[ show update destroy ]

  # GET /processings
  def index
    @processings = Processing.all

    render json: @processings
  end

  # GET /processings/1
  def show
    render json: @processing
  end

  # POST /processings
  def create
    @processing = Processing.new(processing_params)

    if @processing.save
      render json: @processing, status: :created, location: @processing
    else
      render json: @processing.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /processings/1
  def update
    if @processing.update(processing_params)
      render json: @processing
    else
      render json: @processing.errors, status: :unprocessable_entity
    end
  end

  # DELETE /processings/1
  def destroy
    @processing.destroy!
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_processing
      @processing = Processing.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def processing_params
      params.require(:processing).permit(:start_at, :end_at, :project_id, :status, :pipeline)
    end
end
