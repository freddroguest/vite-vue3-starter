require "test_helper"

class PipelineTypesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @pipeline_type = pipeline_types(:one)
  end

  test "should get index" do
    get pipeline_types_url, as: :json
    assert_response :success
  end

  test "should create pipeline_type" do
    assert_difference("PipelineType.count") do
      post pipeline_types_url, params: { pipeline_type: { description: @pipeline_type.description, title: @pipeline_type.title } }, as: :json
    end

    assert_response :created
  end

  test "should show pipeline_type" do
    get pipeline_type_url(@pipeline_type), as: :json
    assert_response :success
  end

  test "should update pipeline_type" do
    patch pipeline_type_url(@pipeline_type), params: { pipeline_type: { description: @pipeline_type.description, title: @pipeline_type.title } }, as: :json
    assert_response :success
  end

  test "should destroy pipeline_type" do
    assert_difference("PipelineType.count", -1) do
      delete pipeline_type_url(@pipeline_type), as: :json
    end

    assert_response :no_content
  end
end
