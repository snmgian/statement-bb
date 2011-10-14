class BbController < ApplicationController

  LAST_SLIDE = 19

  def index
  end

  def slide
    number = params[:number].to_i

    if number > LAST_SLIDE
      render :text => "no", :status => 404 and return
    end

    if number == -1
      number = LAST_SLIDE
    end
    render :template => "bb/slide_#{number}", :layout => false
  end
end
