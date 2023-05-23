class Travel < ApplicationRecord
    has_one_attached :image

    def image_url
        Rails.application.url_helpers.url_for(image) if image.attached?
    end
end

