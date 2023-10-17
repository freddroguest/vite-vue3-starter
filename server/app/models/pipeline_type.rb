class PipelineType < ApplicationRecord
    has_one_attached :image

    def image_url base_url=""
        if self.image.attached?
            self.image.service_url
        else
            base_url + '/images/pipeline_type_missing.png'
        end
    end
end
