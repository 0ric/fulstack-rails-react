class TravelSerializer
  include JSONAPI::Serializer
  attributes :id, :desc, :price, :nome, :data
end
