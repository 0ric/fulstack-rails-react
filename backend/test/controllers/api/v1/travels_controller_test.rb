require "test_helper"

class Api::V1::TravelsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_v1_travels_index_url
    assert_response :success
  end

  test "should get show" do
    get api_v1_travels_show_url
    assert_response :success
  end

  test "should get create" do
    get api_v1_travels_create_url
    assert_response :success
  end

  test "should get update" do
    get api_v1_travels_update_url
    assert_response :success
  end

  test "should get destroy" do
    get api_v1_travels_destroy_url
    assert_response :success
  end
end
