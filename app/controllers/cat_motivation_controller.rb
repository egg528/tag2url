# frozen_string_literal: true

class CatMotivationController < ApplicationController
  layout "default"

  def index
    @hello_world_props = { name: "우석" }
  end
end
