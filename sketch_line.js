
var lineChartCanvas=function(p){


var line_p;
var line_f;

var t;

var gender='女';
var age='18~25岁';
var img_1;
var img_2;

p.preload=function() {
	t = p.loadTable("lib/data/all.csv", "csv", "header");
	img_1 = p.loadImage("lib/data/bg1.png");
	img_2 = p.loadImage("lib/data/bg2.png");

}

p.setup=function(){
	p.textAlign(p.CENTER);

	myCanvas = p.createCanvas(1170, 600);

    p.background(255,255,255);

    line_p=new p.Lchart(t,50,28,1030,510);
    line_f=new p.Lchart(t,50,28,1030,510);


    // myDiv = p.createDiv('this is some text');

	myP1 = p.createP("我想了解 <strong style='text-decoration:underline;''>性别:</strong>");
	myP1.position(110,16);
	myP1.addClass('line_title');

	myP2 = p.createP("<strong style='text-decoration:underline;''>年龄:</strong>");
	myP2.position(280,16);
	myP2.addClass('line_title');

	myP3 = p.createP("人群的数据");
	myP3.position(420,16);
	myP3.addClass('line_title');

	sel = p.createSelect();
	sel.class("gender")
	sel.position(220, 10);
	sel.option('女');
	sel.option('男');
	sel.changed(p.mySelectEvent_g);

	sel_a = p.createSelect();
	sel_a.class("gender")
	sel_a.position(320, 10);
	sel_a.option('18~25岁');
	sel_a.option('25～30岁');
	sel_a.option('30～35岁');
	sel_a.option('35～40岁');
	sel_a.option('40～50岁');
	sel_a.option('大于50岁');
	sel_a.changed(p.mySelectEvent_g);



}

p.mySelectEvent_g=function(){
	gender = sel.value();
	age = sel_a.value();
	// p.print(gender,"   ",age);
}

p.draw=function(){
	// p.print(gender,"   ",age);
	p.background(255);
	// p.print(t);



	
	// line.update(1);
	if(gender=='女'){
		p.image(img_1, 100, 80,950,490);
	}else{
		p.image(img_2, 100, 80,950,490);
	}

	line_p.display(1.5);
	line_f.display(1);

	if((gender=='女')&(age=='18~25岁')){
		line_p.update(0,"#FFA4A4");
		line_f.update(1,"#918686");
	}else if((gender=='女')&(age=='25～30岁')){
		line_p.update(2,"#FFA4A4");
		line_f.update(3,"#918686");
	}else if((gender=='女')&(age=='30～35岁')){
		line_p.update(4,"#FFA4A4");
		line_f.update(5,"#918686");
	}else if((gender=='女')&(age=='35～40岁')){
		line_p.update(6,"#FFA4A4");
		line_f.update(7,"#918686");
	}else if((gender=='女')&(age=='40～50岁')){
		line_p.update(8,"#FFA4A4");
		line_f.update(9,"#918686");
	}else if((gender=='女')&(age=='大于50岁')){
		line_p.update(10,"#FFA4A4");
		line_f.update(11,"#918686");
	}else if((gender=='男')&(age=='18~25岁')){
		line_p.update(12,"#64E2E8");
		line_f.update(13,"#868B91");
	}else if((gender=='男')&(age=='25～30岁')){
		line_p.update(14,"#64E2E8");
		line_f.update(15,"#868B91");
	}else if((gender=='男')&(age=='30～35岁')){
		line_p.update(16,"#64E2E8");
		line_f.update(17,"#868B91");
	}else if((gender=='男')&(age=='35～40岁')){
		line_p.update(18,"#64E2E8");
		line_f.update(19,"#868B91");
	}else if((gender=='男')&(age=='40～50岁')){
		line_p.update(20,"#64E2E8");
		line_f.update(21,"#868B91");
	}else{
		line_p.update(22,"#64E2E8");
		line_f.update(23,"#868B91");
	}


	p.noStroke();
	p.fill(255);
	p.rect(800,0,800,80);

	p.strokeWeight(1.5);
	p.stroke("#DDDDDD");
	p.noFill();
	p.rect(70,65,1030,530);

	p.stroke("#D6D6D6");
	p.line(100,560,1080,560);

	p.noStroke();
	p.fill(155);
	p.text("5.11",90,578);

	p.noStroke();
	p.fill(155);
	p.text("11.11",1060,578);
}



p.Lchart=function(t,pos_x,pos_y,width,height){
	this.c="#000000";
	this.range=185;
	this.scale=0.21;
	this.table=t;
	this.x=pos_x;
	this.y=pos_y;
	this.w=width;
	this.h=height;
	this.l=width/200;	
	this.vex_c=[];
	this.vex_o=[];
	this.type=-1;

	for (var j =0 ; j <= this.range; j++) {
		this.vex_o.push(p.createVector(this.x+j*this.l,p.map(0, 0, this.scale, this.h, 0)));
	}
	for (var j =0 ; j <= this.range; j++) {
		this.vex_c.push(this.vex_o[j]);
	}

	this.display=function(weight){
		p.stroke(this.c);
		p.strokeWeight(weight);
		p.noFill();
		// this.pos_o = p5.Vector.lerp(this.pos_c, this.pos_o, 0.75*this.s);
		p.beginShape();
		for (var j =0 ; j <= this.range; j++) {
			this.vex_o[j] = p5.Vector.lerp(this.vex_c[j], this.vex_o[j], 0.78);
			p.curveVertex(this.vex_o[j].x+this.x,this.vex_o[j].y+this.y,2,2);
		}
		p.endShape();
	}

	this.update=function(t,color){

		if(this.type == t){
		}else{
			this.c=color;
			this.type=t;
			for (var j =0 ; j <= this.range; j++) {
				var point_x=this.x+j*this.l;
				var point_y=this.y+this.floatMap(this.table.getNum(t, j));
				this.vex_c[j]=p.createVector(point_x,point_y);

				// p.print(p.map(this.table.getNum(t, j), 0, this.scale, this.h, 0));
			}
		}
	}

	this.floatMap=function(v) {
	    var r = p.map(v, 0, this.scale, this.h, 0);
	    if (r>0) {
	      return r;
	    } else {
	      return -100;
	    }
	}	
}



}
var p5_lineChart = new p5(lineChartCanvas, 'p5_line');











