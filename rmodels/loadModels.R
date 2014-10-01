library(randomForest);
modelFolder<-'/Users/jc/Desktop/rmodels/';
modelFileNamesNoPath<-c('trainedModelKnicksVersion2Sub10.Rdata','trainedModelKnicksVersion2Sub11.Rdata','trainedModelKnicksVersion2Sub12.Rdata','trainedModelKnicksVersion2Sub13.Rdata','trainedModelKnicksVersion2Sub14.Rdata','trainedModelKnicksVersion2Sub15.Rdata','trainedModelKnicksVersion2Sub16.Rdata','trainedModelKnicksVersion2Sub17.Rdata','trainedModelKnicksVersion2Sub18.Rdata','trainedModelKnicksVersion2Sub19.Rdata','trainedModelKnicksVersion2Sub1.Rdata','trainedModelKnicksVersion2Sub20.Rdata','trainedModelKnicksVersion2Sub21.Rdata','trainedModelKnicksVersion2Sub22.Rdata','trainedModelKnicksVersion2Sub23.Rdata','trainedModelKnicksVersion2Sub24.Rdata','trainedModelKnicksVersion2Sub25.Rdata','trainedModelKnicksVersion2Sub26.Rdata','trainedModelKnicksVersion2Sub27.Rdata','trainedModelKnicksVersion2Sub28.Rdata','trainedModelKnicksVersion2Sub29.Rdata','trainedModelKnicksVersion2Sub2.Rdata','trainedModelKnicksVersion2Sub30.Rdata','trainedModelKnicksVersion2Sub3.Rdata','trainedModelKnicksVersion2Sub4.Rdata','trainedModelKnicksVersion2Sub5.Rdata','trainedModelKnicksVersion2Sub6.Rdata','trainedModelKnicksVersion2Sub7.Rdata','trainedModelKnicksVersion2Sub8.Rdata','trainedModelKnicksVersion2Sub9.Rdata');
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

