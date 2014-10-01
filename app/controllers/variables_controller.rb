class VariablesController < ApplicationController

  def index

    @variables = Variable.first
    # @location = @data.each {|x| x[:locations].split(";")[0].split(",")[2]}

  end

    def r
      
      shotClock = params[:input][0]
      ballX = params[:input][1]
      ballY = params[:input][2]
      offensive0X = params[:input][3]
      offensive0Y = params[:input][4]
      offensive1X = params[:input][5]
      offensive1Y = params[:input][6]
      offensive2X = params[:input][7]
      offensive2Y = params[:input][8]
      offensive3X = params[:input][9]
      offensive3Y = params[:input][10]
      offensive4X = params[:input][11]
      offensive4Y = params[:input][12]
      defensive0X = params[:input][13]
      defensive0Y = params[:input][14]
      defensive1X = params[:input][15]
      defensive1Y = params[:input][16]
      defensive2X = params[:input][17]
      defensive2Y = params[:input][18]
      defensive3X = params[:input][19]
      defensive3Y = params[:input][20]
      defensive4X = params[:input][21]
      defensive4Y = params[:input][22]
  
      predictionString = "x<-c(#{shotClock}, #{ballX}, #{ballY}, #{offensive0X}, #{offensive0Y}, #{offensive1X}, #{offensive1Y}, #{offensive2X}, #{offensive2Y}, #{offensive3X}, #{offensive3Y}, #{offensive4X}, #{offensive4Y}, #{defensive0X}, #{defensive0Y}, #{defensive1X}, #{defensive1Y}, #{defensive2X}, #{defensive2Y}, #{defensive3X}, #{defensive3Y}, #{defensive4X}, #{defensive4Y});names(x)<-c('shotClock', 'ballX', 'ballY', 'offensive0X', 'offensive0Y', 'offensive1X', 'offensive1Y', 'offensive2X', 'offensive2Y', 'offensive3X', 'offensive3Y', 'offensive4X', 'offensive4Y', 'defensive0X', 'defensive0Y', 'defensive1X', 'defensive1Y', 'defensive2X', 'defensive2Y', 'defensive3X', 'defensive3Y', 'defensive4X', 'defensive4Y');y<-predictThroughLoop(t(as.matrix(x)));"

      R.eval predictionString
      R.eval 'y'

      return_int = predictedPoints=R.pull 'as.vector(y)'
      
      respond_to do |format|
        format.html {}
        format.json { render json: return_int.round(2) } 

      end
    end

    def r_no_shotclock

    end

    def r_shot

    end

    def r_pass

    end


end