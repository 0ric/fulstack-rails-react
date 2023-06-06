class TravelSerializer
  include JSONAPI::Serializer
  attributes :id, :desc, :price, :nome, :data, :image_url, :created_at, :updated_at
end
