// Init board
var brd = JXG.JSXGraph.initBoard('box', { axis: true, boundingbox: [-5, 5, 5, -5] });
// brd.setTickLabelsVisible(false);
// yAxis.setTickLabelsVisible(false);
$('#box_licenseText,#box_jxgBoard1L3,#box_jxgBoard1L16,.JXGtext,#box_navigationbar').hide();

// Create points
var p,
    p1,
    p2,
    li2;
var arrofPoints = [];
brd.on('mousedown', function (e) {
    var coords = new JXG.Coords(JXG.COORDS_BY_SCREEN, brd.getMousePosition(e), brd);
    p = coords.usrCoords.slice(1);
    //p1 = brd.create('point', mearge(p[0], p[1], 0.5),{fixed:true});
   // arrofPoints.push({ x: p1.X(), y: p1.Y() });
    brd.on('mousemove', function (e) {
        brd.removeObject(li2);
        //brd.removeObject(p2);
        var coords = new JXG.Coords(JXG.COORDS_BY_SCREEN, brd.getMousePosition(e), brd);
        li2 = brd.create('line', [p, coords.usrCoords.slice(1)],{ fixed:true,straightFirst: false, straightLast: false, strokeWidth: 2 });

    }, this);

}, this);

brd.on('mouseup', function (e) {
    var coords = new JXG.Coords(JXG.COORDS_BY_SCREEN, brd.getMousePosition(e), brd);
    p1= coords.usrCoords.slice(1);
   var point1= mearge(p[0],p[1],0.5);
   var point2=  mearge(p1[0],p1[1],0.5);
    brd.removeObject(li2);
    li2 = brd.create('line', [point1, point2], { straightFirst: false, straightLast: false, strokeWidth: 2, fixed:true });
    brd.off('mousemove');
    li2 = "";
    p2 = "";
}, this);


function mearge(X, Y, range) {
    var ar = [];
    for (var i = 0; i < arrofPoints.length; i++) {
        if (Math.abs(arrofPoints[i].x - X) < range && Math.abs(arrofPoints[i].y - Y) < range) {
            console.log(arrofPoints[i].x + '  ' + arrofPoints[i].y);
            ar = [arrofPoints[i].x, arrofPoints[i].y];            
            return ar;
        }
    }
    console.log(X+ '  ' + Y);
    ar = [X, Y];
    p2 = brd.create('point', ar,{fixed:true});
    arrofPoints.push({ x: p2.X(), y: p2.Y() })
    return ar;
}



//li = brd.create('line', [[0,1], [-1,0]], { fixed:true,straightFirst: false, straightLast: false, strokeWidth: 2 });