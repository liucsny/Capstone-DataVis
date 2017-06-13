var loanChartCanvas=function(p){

var timer=0;
var loanChart=[];
var t;
var gap=-5300;
var img;

p.preload=function() {
	t = p.loadTable("lib/data/news.csv", "csv", "header");
	img = p.loadImage("lib/data/bg4.png");
}

p.setup=function(){
	myCanvas = p.createCanvas(1170, 600);
    for(var i=0;i<19;i++){
	    p.append(loanChart,new p.loanChart(t,0,0,1100,500, p.map(i,0,26,0.9,1),p.random(20)));
    }

	loanChart[0].circle.mouseOver(function(){
		loanChart[0].isOver=true;
	});
	loanChart[1].circle.mouseOver(function(){
		loanChart[1].isOver=true;
	});
	loanChart[2].circle.mouseOver(function(){
		loanChart[2].isOver=true;
	});
	loanChart[3].circle.mouseOver(function(){
		loanChart[3].isOver=true;
	});
	loanChart[4].circle.mouseOver(function(){
		loanChart[4].isOver=true;
	});
	loanChart[5].circle.mouseOver(function(){
		loanChart[5].isOver=true;
	});
	loanChart[6].circle.mouseOver(function(){
		loanChart[6].isOver=true;
	});
	loanChart[7].circle.mouseOver(function(){
		loanChart[7].isOver=true;
	});
	loanChart[8].circle.mouseOver(function(){
		loanChart[8].isOver=true;
	});
	loanChart[9].circle.mouseOver(function(){
		loanChart[9].isOver=true;
	});
	loanChart[10].circle.mouseOver(function(){
		loanChart[10].isOver=true;
	});
	loanChart[11].circle.mouseOver(function(){
		loanChart[11].isOver=true;
	});
	loanChart[12].circle.mouseOver(function(){
		loanChart[12].isOver=true;
	});
	loanChart[13].circle.mouseOver(function(){
		loanChart[13].isOver=true;
	});
	loanChart[14].circle.mouseOver(function(){
		loanChart[14].isOver=true;
	});
	loanChart[15].circle.mouseOver(function(){
		loanChart[15].isOver=true;
	});
	loanChart[16].circle.mouseOver(function(){
		loanChart[16].isOver=true;
	});
	loanChart[17].circle.mouseOver(function(){
		loanChart[17].isOver=true;
	});
	loanChart[18].circle.mouseOver(function(){
		loanChart[18].isOver=true;
	});






	loanChart[0].circle.mouseOut(function(){
		loanChart[0].isOver=false;
	});
	loanChart[1].circle.mouseOut(function(){
		loanChart[1].isOver=false;
	});
	loanChart[2].circle.mouseOut(function(){
		loanChart[2].isOver=false;
	});
	loanChart[3].circle.mouseOut(function(){
		loanChart[3].isOver=false;
	});
	loanChart[4].circle.mouseOut(function(){
		loanChart[4].isOver=false;
	});
	loanChart[5].circle.mouseOut(function(){
		loanChart[5].isOver=false;
	});
	loanChart[6].circle.mouseOut(function(){
		loanChart[6].isOver=false;
	});
	loanChart[7].circle.mouseOut(function(){
		loanChart[7].isOver=false;
	});
	loanChart[8].circle.mouseOut(function(){
		loanChart[8].isOver=false;
	});
	loanChart[9].circle.mouseOut(function(){
		loanChart[9].isOver=false;
	});
	loanChart[10].circle.mouseOut(function(){
		loanChart[10].isOver=false;
	});
	loanChart[11].circle.mouseOut(function(){
		loanChart[11].isOver=false;
	});
	loanChart[12].circle.mouseOut(function(){
		loanChart[12].isOver=false;
	});
	loanChart[13].circle.mouseOut(function(){
		loanChart[13].isOver=false;
	});
	loanChart[14].circle.mouseOut(function(){
		loanChart[14].isOver=false;
	});
	loanChart[15].circle.mouseOut(function(){
		loanChart[15].isOver=false;
	});
	loanChart[16].circle.mouseOut(function(){
		loanChart[16].isOver=false;
	});
	loanChart[17].circle.mouseOut(function(){
		loanChart[17].isOver=false;
	});
	loanChart[18].circle.mouseOut(function(){
		loanChart[18].isOver=false;
	});

}

p.draw=function(){
	// p.print(document.body.scrollTop);
	p.background(255);
    p.image(img, 0, 80,1080,480);

	if(document.body.scrollTop+gap>14500){
		for(var i=0;i<19;i++){
	    	loanChart[i].update(i+1,7,6,4,5,4,1);
	    }
	}else{
		for(var i=0;i<19;i++){
	    	loanChart[i].update(i+1,8,8,4,4,0);
	    }
	}


	if(((document.body.scrollTop+gap-14500)*(document.body.scrollTop+gap-14500))<0){
		timer=0;
	}

    for(var i=0;i<19;i++){
    	loanChart[i].display(timer);
    }

    timer++;
    // p.print(timer);
}


p.loanChart=function(t,x,y,w,h,s,clock){
	this.type;
	this.isOver=false;

	this.table=t;
	this.pos_x=x;
	this.pos_y=y;
	this.width=w;
	this.height=h;

	this.r_l_o=0;
	this.r_s_o=0;
	this.x_s_o=0;
	this.y_s_o=0;
	this.x_l_o=0;
	this.y_l_o=0;

	this.r_l_c=0;
	this.r_s_c=0;
	this.x_s_c=0;
	this.y_s_c=0;
	this.x_l_c=0;
	this.y_l_c=0;
	this.t;
	this.h_o=0;
	this.h_c=0;

	this.s=s;

	this.clock=clock;

	this.core_o=0;
	this.core_c=0;


	this.circle = p.createDiv("");
	this.circle.style("border-radius","50%");
	this.circle.style("width",p.str(this.r_l_o)+"px");
	this.circle.style("height",p.str(this.r_l_o)+"px");
	// this.circle.style("transparency", "#526BFF");

	this.display=function(t){
		// p.print(timer);
		if(t>this.clock){
		// 	p.print("      ",this.timer);

			this.r_l_o = p.lerp(this.r_l_c, this.r_l_o, 0.8*this.s);
			this.r_s_o = p.lerp(this.r_s_c, this.r_s_o, 0.75*this.s);
			this.x_l_o = p.lerp(this.x_l_c, this.x_l_o, 0.75*this.s);
			this.y_l_o = p.lerp(this.y_l_c, this.y_l_o, 0.75*this.s);
			this.x_s_o = p.lerp(this.x_s_c, this.x_s_o, 0.75*this.s);
			this.y_s_o = p.lerp(this.y_s_c, this.y_s_o, 0.75*this.s);
			this.h_o = p.lerp(this.h_c, this.h_o, 0.75*this.s);
			this.core_o = p.lerp(this.core_c, this.core_o, 0.75*this.s);
		}


			// p.noFill();
			// p.stroke(255);
			// p.bezier(this.x_l_o,this.y_l_o,this.x_l_o,this.y_l_o+this.h_o/3*2 ,this.x_s_o,this.y_s_o-this.h_o/2,this.x_s_o,this.y_s_o);

			p.noFill();
			if(this.isOver) {
				p.stroke(0,0,0,200);
			}else{
				p.stroke(0,0,0,100);
			}
			p.bezier(this.x_l_o,this.y_l_o,this.x_l_o,this.y_l_o+this.h_o/3*2 ,this.x_s_o,this.y_s_o-this.h_o/2,this.x_s_o,this.y_s_o);

			if(this.isOver) {
				if(this.table.getNum(this.type,1)==0){
					p.fill(255,97,169,100);
				}else{
					p.fill(73,206,206,150);	
				}

			}else{
				if(this.table.getNum(this.type,1)==0){
					p.fill(255,97,169,50);
				}else{
					p.fill(73,206,206,100);
				}

			}

			p.noStroke();
			p.ellipse(this.x_l_o,this.y_l_o,this.r_l_o,this.r_l_o);


			if(this.isOver) {
				p.fill(0,200,0,100);
			}else{
				p.fill(0,0,0,50);
			}
			p.ellipse(this.x_s_o,this.y_s_o,this.r_s_o,this.r_s_o);

			p.fill(0,0,0);
			p.ellipse(this.x_l_o,this.y_l_o,this.core_o,this.core_o);

			
			this.circle.position(this.x_l_o-this.r_l_o/2+15,this.y_l_o-this.r_l_o/2);
			this.circle.style("width",p.str(this.r_l_o)+"px");
			this.circle.style("height",p.str(this.r_l_o)+"px");

			// var col=p.color(100,0,250,100);
			// this.circle.style("background-color", "#FF0000");

		}


			// var a=p.createDiv('this is some text');

		// }

	this.update=function(type,debt,ori,t_loan,t_repay,core){
		// this.timer=t;
		this.type=type;
		this.core_c=core;
		this.r_l_c=p.sqrt(p.map(this.table.getNum(type,debt),0,700000,0,15000));
		this.r_s_c=p.sqrt(p.map(this.table.getNum(type,ori),0,700000,0,15000));
		this.t=p.map(this.table.getNum(type,t_loan),0,10,0,300);
		this.h_c = p.map(this.table.getNum(type,t_repay)-this.table.getNum(type,t_loan),0,10,0,250);

		this.x_s_c=this.pos_x+this.t-250;
		this.y_s_c=this.pos_y+this.height;

		this.x_l_c=this.pos_x+this.h_c+this.t-250;
		this.y_l_c=this.pos_y+this.height-this.h_c;


		// p.print(this.x_s_o);
	}
}



}
var p5_loanChart = new p5(loanChartCanvas, 'p5_loan');


