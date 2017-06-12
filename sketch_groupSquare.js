var bubbleCanvas=function(p){
var t;
var bs_510,bs_610,bs_710,bs_810,bs_910,bs_1010,bs_1111;
var g_a=[[],[],[],[],[],[],[]];
var g_b=[[],[],[],[],[],[],[]];
var g_c=[[],[],[],[],[],[],[]];
var g_d=[];
var timeimg;
var timeline;
var timeline2;
var gap=300;

var data=[213,197,166,217,210,267,730];
p.preload=function() {
	timeimg=p.loadImage("lib/img/time.png");
	timeline=p.loadImage("lib/img/timeline.png");
	timeline2=p.loadImage("lib/img/timeline2.png");
}


p.setup=function(){
	myCanvas = p.createCanvas(1170, 2600);
	bs_510 = new p.ballSys(0,40,data[0]);
	bs_610 = new p.ballSys(data[0],40,data[1]);
	bs_710 = new p.ballSys(data[0]+data[1],40,data[2]);
	bs_810 = new p.ballSys(data[0]+data[1]+data[2],40,data[3]);
	bs_910 = new p.ballSys(data[0]+data[1]+data[2]+data[3],40,data[4]);
	bs_1010 = new p.ballSys(data[0]+data[1]+data[2]+data[3]+data[4],40,data[5]);
	bs_1111 = new p.ballSys(data[0]+data[1]+data[2]+data[3]+data[4]+data[5],40,data[6]);

	myP = p.createP('平日销售量（7件）');
	myP.position(310,2160);

	myP11 = p.createP('双十一销量（730件）');
	myP11.position(680,2330);


	p.iniGroup();

}

p.draw=function(){
	// p.print(document.body.scrollTop);
	p.background(255);

	bs_510.run();
	bs_610.run();
	bs_710.run();
	bs_810.run();
	bs_910.run();
	bs_1010.run();
	bs_1111.run();

	if (document.body.scrollTop<2000+gap){
		// p.ellipse(100,100,100,100);
		bs_510.move(g_a[0],200,78,85);
		bs_610.move(g_a[1],200,78,85);
		bs_710.move(g_a[2],200,78,85);
		bs_810.move(g_a[3],200,78,85);
		bs_910.move(g_a[4],200,78,85);
		bs_1010.move(g_a[5],200,78,85);
		bs_1111.move(g_a[6],200,78,85);
	}

	if ((document.body.scrollTop>2000+gap)&(document.body.scrollTop<2300+gap)){
	    p.image(timeimg, 40, 90,timeimg.width/1.7,timeimg.height/1.7);
		// p.ellipse(100,100,100,100);
		bs_510.move(g_a[0],10,58,82);
		bs_610.move(g_a[1],40,58,82);
		bs_710.move(g_a[2],130,58,82);
		bs_810.move(g_a[3],170,58,82);
		bs_910.move(g_a[4],200,58,82);
		bs_1010.move(g_a[5],235,48,82);
		bs_1111.move(g_a[6],235,48,82);
	}


	if ((document.body.scrollTop>2300+gap)&(document.body.scrollTop<3000+gap)){
		p.image(timeline, 42, 670,timeline.width/1.8,timeline.height/1.8);
		bs_510.move(g_b[0],10,58,82);
		bs_610.move(g_b[1],40,58,82);
		bs_710.move(g_b[2],130,58,82);
		bs_810.move(g_b[3],170,58,82);
		bs_910.move(g_b[4],200,58,82);
		bs_1010.move(g_b[5],235,48,82);
		bs_1111.move(g_b[6],235,48,82);
	}

	if ((document.body.scrollTop>3000+gap)&(document.body.scrollTop<3600+gap)){
		p.image(timeline2, 72, 1270,timeline2.width/1.8,timeline2.height/1.8);
		bs_510.move(g_c[0],10,58,82);
		bs_610.move(g_c[1],40,58,82);
		bs_710.move(g_c[2],130,58,82);
		bs_810.move(g_c[3],170,58,82);
		bs_910.move(g_c[4],200,58,82);
		bs_1010.move(g_c[5],235,48,82);
		bs_1111.move(g_c[6],265,68,82);
	}

	if (document.body.scrollTop>3600+gap){
		bs_1111.move(g_d,265,68,82);
	}
	p.push();
	p.rectMode(p.CENTER);
	p.noStroke();
	p.colorMode(p.HSB,100);
	p.fill(0,0,0,40);
	for (var i = 0; i < 3; i++) {
		p.rect(i*12+320,2110,10,10);
	}
	for (var i = 0; i < 3; i++) {
		p.rect(i*12+320,2122,10,10);
	}
	p.rect(320,2134,10,10);
	p.pop();
}

p.ballSys=function(off,w,n){
	this.b=[];

	this.offset=off;
	this.num=n;
	this.w=w;
	this.color;

	// p.print("hi");

	for (var i = this.offset; i < this.num+this.offset; i++) {
		// b.push(new p.ball((i%40*12+10),(Math.floor(i/40)*12)+10));
		this.b.push(new p.ball(   (i%this.w*12+10)   ,   (Math.floor(i/this.w)*12+10)   ,  p.map(i,0,1600,0.8,1)  ));
		// p.print("hi");
	}




	this.run=function(){

		for (var i = 0; i < this.num; i++) {
		// b[i].update(p.createVector(p.mouseX,p.mouseY));
			this.b[i].display();
		}
	}

	this.move=function(tar,c,a,b){
		for (var i = 0; i < this.num; i++) {
			this.b[i].update(tar[i],c,a,b);
			// b[i].display();
		}
	}
}


p.ball=function(x,y,s){

	this.pos_c = p.createVector(x,y);
	this.pos_o = p.createVector(x,y);
	this.c=0;
	this.a=0;
	this.b=0;
	this.s=s;
	// this.i=-s*100;


	this.display=function(){
		// p.print("hello");
		// if(this.i>10){
		this.pos_o = p5.Vector.lerp(this.pos_c, this.pos_o, 0.75*this.s);
		// }

		// this.i+=1;
		// p.print(this.i);
		p.push();
		p.rectMode(p.CENTER);
		p.colorMode(p.HSB,360,100,100);
		p.fill(this.c,this.a,this.b,90);
		p.noStroke();
		p.rect(this.pos_o.x,this.pos_o.y,10,10);
		p.pop();
	}


	// this.managei=function(){
	// 	if(this.i<0){
	// 		return 0;
	// 	}else{
	// 		return this.i;
	// 	}
	// }

	this.update=function(pos,c,a,b){
		// this.pos_o=this.pos_c.copy();
		this.pos_c=pos;
		this.c=c;
		this.a=a;
		this.b=b;
		// this.i=-s*100;

	}

}


p.iniGroup=function(){
	for (var i = 0; i < data[0]; i++) {
		g_a[0].push(p.createVector(((i)%40*12+100),(Math.floor((i)/40)*12)+100));
	}

	for (var i = 0; i < data[1]; i++) {
		g_a[1].push(p.createVector(((i+data[0])%40*12+100),(Math.floor((i+data[0])/40)*12)+100));
	}
	for (var i = 0; i < data[2]; i++) {
		g_a[2].push(p.createVector(((i+data[0]+data[1])%40*12+100),(Math.floor((i+data[0]+data[1])/40)*12)+100));
	}
	for (var i = 0; i < data[3]; i++) {
		g_a[3].push(p.createVector(((i+data[0]+data[1]+data[2])%40*12+100),(Math.floor((i+data[0]+data[1]+data[2])/40)*12)+100));
	}
	for (var i = 0; i < data[4]; i++) {
		g_a[4].push(p.createVector(((i+data[0]+data[1]+data[2]+data[3])%40*12+100),(Math.floor((i+data[0]+data[1]+data[2]+data[3])/40)*12)+100));
	}
	for (var i = 0; i < data[5]; i++) {
		g_a[5].push(p.createVector(((i+data[0]+data[1]+data[2]+data[3]+data[4])%40*12+100),(Math.floor((i+data[0]+data[1]+data[2]+data[3]+data[4])/40)*12)+100));
	}
	for (var i = 0; i < data[6]; i++) {
		g_a[6].push(p.createVector(((i+data[0]+data[1]+data[2]+data[3]+data[4]+data[5])%40*12+100),(Math.floor((i+data[0]+data[1]+data[2]+data[3]+data[4]+data[5])/40)*12)+100));
	}

	//======================

	for (var i = 0; i < data[0]; i++) {
		g_b[0].push(p.createVector((i%15*12+20),(Math.floor(i/15)*12)+700));
	}

	for (var i = 0; i < data[1]; i++) {
		g_b[1].push(p.createVector((i%15*12+210),(Math.floor(i/15)*12)+700));
	}
	for (var i = 0; i < data[2]; i++) {
		g_b[2].push(p.createVector((i%15*12+400),(Math.floor(i/15)*12)+700));
	}
	for (var i = 0; i < data[3]; i++) {
		g_b[3].push(p.createVector((i%15*12+590),(Math.floor(i/15)*12)+700));
	}
	for (var i = 0; i < data[4]; i++) {
		g_b[4].push(p.createVector((i%15*12+780),(Math.floor(i/15)*12)+700));
	}
	for (var i = 0; i < data[5]; i++) {
		g_b[5].push(p.createVector((i%15*12+970),(Math.floor(i/15)*12)+700));
	}
	for (var i = 0; i < data[6]; i++) {
		g_b[6].push(p.createVector(((i+data[5])%15*12+970),(Math.floor((i+data[5])/15)*12)+700));
	}

	//======================

	for (var i = 0; i < data[0]; i++) {
		g_c[0].push(p.createVector((i%15*12+60),(Math.floor(i/15)*12)+1300));
	}

	for (var i = 0; i < data[1]; i++) {
		g_c[1].push(p.createVector(((i+data[0]-3)%15*12+60),(Math.floor((i+data[0]-3)/15)*12)+1320));
	}
	for (var i = 0; i < data[2]; i++) {
		g_c[2].push(p.createVector(((i+data[0]+data[1]-5)%15*12+60),(Math.floor((i+data[0]+data[1]-5)/15)*12)+1340));
	}
	for (var i = 0; i < data[3]; i++) {
		g_c[3].push(p.createVector((i%15*12+230+70),(Math.floor(i/15)*12)+1300));
	}
	for (var i = 0; i < data[4]; i++) {
		g_c[4].push(p.createVector(((i+data[3]-7)%15*12+230+70),(Math.floor((i+data[3]-7)/15)*12)+1320));
	}
	for (var i = 0; i < data[5]; i++) {
		g_c[5].push(p.createVector((i%15*12+780),(Math.floor(i/15)*12)+1300));
	}
	for (var i = 0; i < data[6]; i++) {
		g_c[6].push(p.createVector((i%15*12+970),(Math.floor(i/15)*12)+1300));
	}
	// ===================

	for (var i = 0; i < data[6]; i++) {
		g_d.push(p.createVector((i%28*12+570),(Math.floor(i/28)*12)+2000));
	}
	//======================

}


}

var p5_bubbleChart = new p5(bubbleCanvas, 'p5_groupSquare');


