library(randomForest);
modelFolder<-'/Users/jc/Desktop/rmodels/';
modelFileNamesNoPath<-c('trainedModelKnicksBatch0Sub0.Rdata','trainedModelKnicksBatch0Sub10.Rdata','trainedModelKnicksBatch0Sub1.Rdata','trainedModelKnicksBatch0Sub2.Rdata','trainedModelKnicksBatch0Sub3.Rdata','trainedModelKnicksBatch0Sub4.Rdata','trainedModelKnicksBatch0Sub5.Rdata','trainedModelKnicksBatch0Sub6.Rdata','trainedModelKnicksBatch0Sub7.Rdata','trainedModelKnicksBatch0Sub8.Rdata','trainedModelKnicksBatch0Sub9.Rdata','trainedModelKnicksBatch1Sub0.Rdata','trainedModelKnicksBatch1Sub10.Rdata','trainedModelKnicksBatch1Sub11.Rdata','trainedModelKnicksBatch1Sub1.Rdata','trainedModelKnicksBatch1Sub2.Rdata','trainedModelKnicksBatch1Sub3.Rdata','trainedModelKnicksBatch1Sub4.Rdata','trainedModelKnicksBatch1Sub5.Rdata','trainedModelKnicksBatch1Sub6.Rdata','trainedModelKnicksBatch1Sub7.Rdata','trainedModelKnicksBatch1Sub8.Rdata','trainedModelKnicksBatch1Sub9.Rdata','trainedModelKnicksBatch2Sub0.Rdata','trainedModelKnicksBatch2Sub10.Rdata','trainedModelKnicksBatch2Sub1.Rdata','trainedModelKnicksBatch2Sub2.Rdata','trainedModelKnicksBatch2Sub3.Rdata','trainedModelKnicksBatch2Sub4.Rdata','trainedModelKnicksBatch2Sub5.Rdata','trainedModelKnicksBatch2Sub6.Rdata','trainedModelKnicksBatch2Sub7.Rdata','trainedModelKnicksBatch2Sub8.Rdata','trainedModelKnicksBatch2Sub9.Rdata','trainedModelKnicksBatch3Sub0.Rdata','trainedModelKnicksBatch3Sub10.Rdata','trainedModelKnicksBatch3Sub1.Rdata','trainedModelKnicksBatch3Sub2.Rdata','trainedModelKnicksBatch3Sub3.Rdata','trainedModelKnicksBatch3Sub4.Rdata','trainedModelKnicksBatch3Sub5.Rdata','trainedModelKnicksBatch3Sub6.Rdata','trainedModelKnicksBatch3Sub7.Rdata','trainedModelKnicksBatch3Sub8.Rdata','trainedModelKnicksBatch3Sub9.Rdata','trainedModelKnicksBatch4Sub0.Rdata','trainedModelKnicksBatch4Sub1.Rdata','trainedModelKnicksBatch4Sub2.Rdata','trainedModelKnicksBatch4Sub3.Rdata','trainedModelKnicksBatch4Sub4.Rdata','trainedModelKnicksBatch4Sub5.Rdata');
modelFileNames<-NULL;for(name in modelFileNamesNoPath){modelFileNames<-c(modelFileNames,paste(modelFolder,name,sep=''));}
models<-list();
numberOfModelBatches<-5;
sampleModelNames<-sort(sample(modelFileNames,numberOfModelBatches,replace=FALSE));
for(nombre in sampleModelNames){load(nombre);models[[length(models)+1]]<-RF;rm(RF);}
returnPrediction<-function(X)
{	f<-function(RF){return(as.matrix(predict(RF,X)))};
	if(dim(X)[1]>1){return(rowMeans(as.matrix(as.data.frame(vapply(models,f,array(dim=c(dim(X)[1],1),c(0)))))));}else{return(mean(rowMeans(as.matrix(as.data.frame(vapply(models,f,array(dim=c(dim(X)[1],1),c(0))))))))}
}	
predictThroughLoop<-function(X)
{	Yp<-array(dim=c(dim(X)[1]),c(0));
	for(model in models){Yp<-Yp+predict(model,X);}
	Yp<-Yp/length(models);
}

