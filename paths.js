/*

  2016/10/14 - dphayes


*/

// paths provide the routes between two locations

/*
each hallway (defined in locations.js) is an object whose key is the hallway id

that object is an array of objects, with the ending hallway and the points (in the form of stairway ids) 
between the beginning and ending hallways

(may make more sense to store this as keys rather than array objects - faster lookup)

*/

var paths={};
paths.AB = []; 
paths.AB.push({end:"AB", locations:""});
paths.AB.push({end:"BC", locations:""});
paths.AB.push({end:"CD", locations:""});
paths.AB.push({end:"DG", locations:"D"});
paths.AB.push({end:"GH", locations:"D"});
paths.AB.push({end:"HJ", locations:"D"});
paths.AB.push({end:"JK", locations:"D,J"});
paths.AB.push({end:"HZ", locations:"A,O"});
paths.AB.push({end:"ZO", locations:"A,O"});
paths.AB.push({end:"OM", locations:"A"});
paths.AB.push({end:"MN", locations:"A,M"});
paths.AB.push({end:"OA", locations:"A"});
paths.BC = []; 
paths.BC.push({end:"AB", locations:""});
paths.BC.push({end:"BC", locations:""});
paths.BC.push({end:"CD", locations:""});
paths.BC.push({end:"DG", locations:"D"});
paths.BC.push({end:"GH", locations:"D"});
paths.BC.push({end:"HJ", locations:"D"});
paths.BC.push({end:"JK", locations:"D,J"});
paths.BC.push({end:"HZ", locations:"A,O"});
paths.BC.push({end:"ZO", locations:"A,O"});
paths.BC.push({end:"OM", locations:"A"});
paths.BC.push({end:"MN", locations:"A,M"});
paths.BC.push({end:"OA", locations:"A"});
paths.CD = []; 
paths.CD.push({end:"AB", locations:""});
paths.CD.push({end:"BC", locations:""});
paths.CD.push({end:"CD", locations:""});
paths.CD.push({end:"DG", locations:"D"});
paths.CD.push({end:"GH", locations:"D"});
paths.CD.push({end:"HJ", locations:"D"});
paths.CD.push({end:"JK", locations:"D,J"});
paths.CD.push({end:"HZ", locations:"D,H"});
paths.CD.push({end:"ZO", locations:"A,O"});
paths.CD.push({end:"OM", locations:"A"});
paths.CD.push({end:"MN", locations:"A,M"});
paths.CD.push({end:"OA", locations:"A"});
paths.DG = []; 
paths.DG.push({end:"AB", locations:"D"});
paths.DG.push({end:"BC", locations:"D"});
paths.DG.push({end:"CD", locations:"D"});
paths.DG.push({end:"DG", locations:""});
paths.DG.push({end:"GH", locations:""});
paths.DG.push({end:"HJ", locations:""});
paths.DG.push({end:"JK", locations:"J"});
paths.DG.push({end:"HZ", locations:"H"});
paths.DG.push({end:"ZO", locations:"H"});
paths.DG.push({end:"OM", locations:"H,O"});
paths.DG.push({end:"MN", locations:"H,O,M"});
paths.DG.push({end:"OA", locations:"D,A"});
paths.GH = []; 
paths.GH.push({end:"AB", locations:"D"});
paths.GH.push({end:"BC", locations:"D"});
paths.GH.push({end:"CD", locations:"D"});
paths.GH.push({end:"DG", locations:""});
paths.GH.push({end:"GH", locations:""});
paths.GH.push({end:"HJ", locations:""});
paths.GH.push({end:"JK", locations:"J"});
paths.GH.push({end:"HZ", locations:"H"});
paths.GH.push({end:"ZO", locations:"H"});
paths.GH.push({end:"OM", locations:"H,O"});
paths.GH.push({end:"MN", locations:"H,O,M"});
paths.HJ = []; 
paths.HJ.push({end:"AB", locations:"D"});
paths.HJ.push({end:"BC", locations:"D"});
paths.HJ.push({end:"CD", locations:"D"});
paths.HJ.push({end:"DG", locations:""});
paths.HJ.push({end:"GH", locations:""});
paths.HJ.push({end:"HJ", locations:""});
paths.HJ.push({end:"JK", locations:"J"});
paths.HJ.push({end:"HZ", locations:"H"});
paths.HJ.push({end:"ZO", locations:"H"});
paths.HJ.push({end:"OM", locations:"H,O"});
paths.HJ.push({end:"MN", locations:"H,O,M"});
paths.HJ.push({end:"OA", locations:"H,O"});
paths.GH.push({end:"OA", locations:"H,O"});
paths.JK = []; 
paths.JK.push({end:"AB", locations:"J,D"});
paths.JK.push({end:"BC", locations:"J,D"});
paths.JK.push({end:"CD", locations:"J,D"});
paths.JK.push({end:"DG", locations:"J"});
paths.JK.push({end:"GH", locations:"J"});
paths.JK.push({end:"HJ", locations:"J"});
paths.JK.push({end:"JK", locations:""});
paths.JK.push({end:"HZ", locations:"J,H"});
paths.JK.push({end:"ZO", locations:"J,H"});
paths.JK.push({end:"OM", locations:"J,H,O"});
paths.JK.push({end:"MN", locations:"J,H,O"});
paths.JK.push({end:"OA", locations:"J,H,O"});
paths.HZ = []; 
paths.HZ.push({end:"AB", locations:"H,D"});
paths.HZ.push({end:"BC", locations:"H,D"});
paths.HZ.push({end:"CD", locations:"H,D"});
paths.HZ.push({end:"DG", locations:"H"});
paths.HZ.push({end:"GH", locations:"H"});
paths.HZ.push({end:"HJ", locations:"H"});
paths.HZ.push({end:"JK", locations:"H,J"});
paths.HZ.push({end:"HZ", locations:""});
paths.HZ.push({end:"ZO", locations:""});
paths.HZ.push({end:"OM", locations:"O"});
paths.HZ.push({end:"MN", locations:"O,M"});
paths.HZ.push({end:"OA", locations:"O"});
paths.ZO = []; 
paths.ZO.push({end:"AB", locations:"O,A"});
paths.ZO.push({end:"BC", locations:"O,A"});
paths.ZO.push({end:"CD", locations:"H,D"});
paths.ZO.push({end:"DG", locations:"H"});
paths.ZO.push({end:"GH", locations:"H"});
paths.ZO.push({end:"HJ", locations:"H"});
paths.ZO.push({end:"JK", locations:"H,J"});
paths.ZO.push({end:"HZ", locations:""});
paths.ZO.push({end:"ZO", locations:""});
paths.ZO.push({end:"OM", locations:""});
paths.ZO.push({end:"MN", locations:"O,M"});
paths.ZO.push({end:"OA", locations:"O"});
paths.OM = []; 
paths.OM.push({end:"AB", locations:"A"});
paths.OM.push({end:"BC", locations:"A"});
paths.OM.push({end:"CD", locations:"A"});
paths.OM.push({end:"DG", locations:"O,H"});
paths.OM.push({end:"GH", locations:"O,H"});
paths.OM.push({end:"HJ", locations:"O,H"});
paths.OM.push({end:"JK", locations:"O,H,J"});
paths.OM.push({end:"HZ", locations:"O"});
paths.OM.push({end:"ZO", locations:"O"});
paths.OM.push({end:"OM", locations:""});
paths.OM.push({end:"MN", locations:"M"});
paths.OM.push({end:"OA", locations:""});
paths.MN = []; 
paths.MN.push({end:"AB", locations:"M,A"});
paths.MN.push({end:"BC", locations:"M,A"});
paths.MN.push({end:"CD", locations:"M,A"});
paths.MN.push({end:"DG", locations:"M,O,H"});
paths.MN.push({end:"GH", locations:"M,O,H"});
paths.MN.push({end:"HJ", locations:"M,O,H"});
paths.MN.push({end:"JK", locations:"M,O,H,J"});
paths.MN.push({end:"HZ", locations:"M,O"});
paths.MN.push({end:"ZO", locations:"M,O"});
paths.MN.push({end:"OM", locations:"M"});
paths.MN.push({end:"MN", locations:""});
paths.MN.push({end:"OA", locations:"M"});
paths.OA = []; 
paths.OA.push({end:"AB", locations:"A"});
paths.OA.push({end:"BC", locations:"A"});
paths.OA.push({end:"CD", locations:"A"});
paths.OA.push({end:"DG", locations:"A,D"});
paths.OA.push({end:"GH", locations:"O,H"});
paths.OA.push({end:"HJ", locations:"O,H"});
paths.OA.push({end:"JK", locations:"O,H,J"});
paths.OA.push({end:"HZ", locations:"O"});
paths.OA.push({end:"ZO", locations:"O"});
paths.OA.push({end:"OM", locations:""});
paths.OA.push({end:"MN", locations:"M"});
paths.OA.push({end:"OA", locations:""});

paths.BA = paths.AB;
paths.CB = paths.BC;
paths.DC = paths.CD;
paths.GD = paths.DG;
paths.HG = paths.GH;
paths.JH = paths.HJ;
paths.KJ = paths.JK;
paths.ZH = paths.HZ;
paths.OZ = paths.ZO;
paths.MO = paths.OM;
paths.NM = paths.MN;
paths.AO = paths.OA;
