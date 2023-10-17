class PipelineTypesController < ApplicationController
  before_action :set_pipeline_type, only: %i[ show update destroy ]

  # GET /pipeline_types
  def index
    @pipeline_types = PipelineType.all

    render json: @pipeline_types
  end

  # GET /pipeline_types/1
  def show
    render json: @pipeline_type
  end

  # POST /pipeline_types
  def create
    @pipeline_type = PipelineType.new(pipeline_type_params)

    if @pipeline_type.save
      render json: @pipeline_type, status: :created, location: @pipeline_type
    else
      render json: @pipeline_type.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /pipeline_types/1
  def update
    if @pipeline_type.update(pipeline_type_params)
      render json: @pipeline_type
    else
      render json: @pipeline_type.errors, status: :unprocessable_entity
    end
  end

  # DELETE /pipeline_types/1
  def destroy
    @pipeline_type.destroy!
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_pipeline_type
      @pipeline_type = PipelineType.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def pipeline_type_params
      params.require(:pipeline_type).permit(:title, :description)
    end
end
