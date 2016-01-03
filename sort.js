
function CArray(numElements){
	this.dataStore=[];
	this.pos=0;
	this.numElements=numElements;
	this.insert=insert;
	this.toString=toString;
	this.clear=clear;
	this.setData=setData;
	this.swap=swap;
	this.bubbleSort=bubbleSort;
	this.choseSort=choseSort;
	this.insertSort=insertSort;
	for(var i=0;i<numElements;++i){
		this.dataStore[i]=i;
	}
}

function setData(){
	for(var i=0;i<this.numElements;++i){
		this.dataStore[i]=Math.floor(Math.random()*(this.numElements+1));
	}
}

function clear(){
	for (var i = 0; i < this.dataStore.length; i++) {
		this.dataStore[i]=0;
	}
}

function toString(){
	var restr='';
	for(var i=0;i<this.dataStore.length;++i){
		restr+=this.dataStore[i]+'';
		if (i>0& i%10==0) {
			restr+='\n';
		}
	}
	return restr;
}

function swap(arr,index1,index2){
	var temp=arr[index1];
	arr[index1]=arr[index2];
	arr[index2]=temp;
}

function bubbleSort(){
	var numElements=this.dataStore.length;
	vat temp;
	for(var outer=numElements;outer>=2;--outer){
		for(var inner=0; inner<=outer-1;inner++){
			if(this.dataStore[inner]>this.dataStore[inner+1]){
				swap(this.dataStore,inner,inner+1);
			}
		}
	}
}

function choseSort(){
	var min,temp;
	for(var outer=0;outer<this.dataStore.length-2;++outer){
		min=outer;
		for(var inner=outer+1;inner<this.dataStore.length-1;++inner){
			if (this.dataStore[inner]<this.dataStore[min]) {
				min=inner;
			}
			swap(this.dataStore,inner,min);
		}
	}
}

function insertSort(){
	var temp,inner;
	for(var outer=1;outer<=this.dataStore.length-1;++outer){
		temp=this.dataStore[outer];
		inner=outer;
		while(inner>0 && this.dataStore[inner-1]>=temp){
			this.dataStore[inner]=this.dataStore[inner-1];
			--inner;
		}
		this.dataStore[inner]=temp;
	}
}