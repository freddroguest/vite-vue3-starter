require "test_helper"

class ProcessingsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @processing = processings(:one)
  end

  test "should get index" do
    get processings_url, as: :json
    assert_response :success
  end

  test "should create processing" do
    assert_difference("Processing.count") do
      post processings_url, params: { processing: { end_at: @processing.end_at, pipeline: @processing.pipeline, project_id: @processing.project_id, start_at: @processing.start_at, status: @processing.status } }, as: :json
    end

    assert_response :created
  end

  test "should show processing" do
    get processing_url(@processing), as: :json
    assert_response :success
  end

  test "should update processing" do
    patch processing_url(@processing), params: { processing: { end_at: @processing.end_at, pipeline: @processing.pipeline, project_id: @processing.project_id, start_at: @processing.start_at, status: @processing.status } }, as: :json
    assert_response :success
  end

  test "should destroy processing" do
    assert_difference("Processing.count", -1) do
      delete processing_url(@processing), as: :json
    end

    assert_response :no_content
  end
end
