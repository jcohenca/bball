 def initiate_r

      file = File.open("rmodels/loadModels.R", "rb")
      contents = file.read
      R.eval contents  

  end

  initiate_r