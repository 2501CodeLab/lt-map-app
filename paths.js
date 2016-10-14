/*

  2016/10/14 - dphayes


*/

// paths provide the routes between two locations

/*
each hallway (defined in locations.js) is an object whose key is the hallway id

that object contains keys for each destination hallway;  the value of the that destination ky
is the set of points (as indicated by stairway ids) from the origin hallway to the destination

*/

var paths={};
paths.AB = {};
paths.AB.AB.locations="";
paths.AB.BC.locations="";
paths.AB.CD.locations="";
paths.AB.DG.locations="D";
paths.AB.GH.locations="D";
paths.AB.HJ.locations="D";
paths.AB.JK.locations="D,J";
paths.AB.HZ.locations="A,O";
paths.AB.ZO.locations="A,O";
paths.AB.OM.locations="A";
paths.AB.MN.locations="A,M";
paths.AB.OA.locations="A";
paths.BC = {};
paths.BC.AB.locations="";
paths.BC.BC.locations="";
paths.BC.CD.locations="";
paths.BC.DG.locations="D";
paths.BC.GH.locations="D";
paths.BC.HJ.locations="D";
paths.BC.JK.locations="D,J";
paths.BC.HZ.locations="A,O";
paths.BC.ZO.locations="A,O";
paths.BC.OM.locations="A";
paths.BC.MN.locations="A,M";
paths.BC.OA.locations="A";
paths.CD = {};
paths.CD.AB.locations="";
paths.CD.BC.locations="";
paths.CD.CD.locations="";
paths.CD.DG.locations="D";
paths.CD.GH.locations="D";
paths.CD.HJ.locations="D";
paths.CD.JK.locations="D,J";
paths.CD.HZ.locations="D,H";
paths.CD.ZO.locations="A,O";
paths.CD.OM.locations="A";
paths.CD.MN.locations="A,M";
paths.CD.OA.locations="A";
paths.DG = {};
paths.DG.AB.locations="D";
paths.DG.BC.locations="D";
paths.DG.CD.locations="D";
paths.DG.DG.locations="";
paths.DG.GH.locations="";
paths.DG.HJ.locations="";
paths.DG.JK.locations="J";
paths.DG.HZ.locations="H";
paths.DG.ZO.locations="H";
paths.DG.OM.locations="H,O";
paths.DG.MN.locations="H,O,M";
paths.DG.OA.locations="D,A";
paths.GH = {};
paths.GH.AB.locations="D";
paths.GH.BC.locations="D";
paths.GH.CD.locations="D";
paths.GH.DG.locations="";
paths.GH.GH.locations="";
paths.GH.HJ.locations="";
paths.GH.JK.locations="J";
paths.GH.HZ.locations="H";
paths.GH.ZO.locations="H";
paths.GH.OM.locations="H,O";
paths.GH.MN.locations="H,O,M";
paths.HJ = {};
paths.HJ.AB.locations="D";
paths.HJ.BC.locations="D";
paths.HJ.CD.locations="D";
paths.HJ.DG.locations="";
paths.HJ.GH.locations="";
paths.HJ.HJ.locations="";
paths.HJ.JK.locations="J";
paths.HJ.HZ.locations="H";
paths.HJ.ZO.locations="H";
paths.HJ.OM.locations="H,O";
paths.HJ.MN.locations="H,O,M";
paths.HJ.OA.locations="H,O";
paths.GH.OA.locations="H,O";
paths.JK = {};
paths.JK.AB.locations="J,D";
paths.JK.BC.locations="J,D";
paths.JK.CD.locations="J,D";
paths.JK.DG.locations="J";
paths.JK.GH.locations="J";
paths.JK.HJ.locations="J";
paths.JK.JK.locations="";
paths.JK.HZ.locations="J,H";
paths.JK.ZO.locations="J,H";
paths.JK.OM.locations="J,H,O";
paths.JK.MN.locations="J,H,O";
paths.JK.OA.locations="J,H,O";
paths.HZ = {};
paths.HZ.AB.locations="H,D";
paths.HZ.BC.locations="H,D";
paths.HZ.CD.locations="H,D";
paths.HZ.DG.locations="H";
paths.HZ.GH.locations="H";
paths.HZ.HJ.locations="H";
paths.HZ.JK.locations="H,J";
paths.HZ.HZ.locations="";
paths.HZ.ZO.locations="";
paths.HZ.OM.locations="O";
paths.HZ.MN.locations="O,M";
paths.HZ.OA.locations="O";
paths.ZO = {};
paths.ZO.AB.locations="O,A";
paths.ZO.BC.locations="O,A";
paths.ZO.CD.locations="H,D";
paths.ZO.DG.locations="H";
paths.ZO.GH.locations="H";
paths.ZO.HJ.locations="H";
paths.ZO.JK.locations="H,J";
paths.ZO.HZ.locations="";
paths.ZO.ZO.locations="";
paths.ZO.OM.locations="";
paths.ZO.MN.locations="O,M";
paths.ZO.OA.locations="O";
paths.OM = {};
paths.OM.AB.locations="A";
paths.OM.BC.locations="A";
paths.OM.CD.locations="A";
paths.OM.DG.locations="O,H";
paths.OM.GH.locations="O,H";
paths.OM.HJ.locations="O,H";
paths.OM.JK.locations="O,H,J";
paths.OM.HZ.locations="O";
paths.OM.ZO.locations="O";
paths.OM.OM.locations="";
paths.OM.MN.locations="M";
paths.OM.OA.locations="";
paths.MN = {};
paths.MN.AB.locations="M,A";
paths.MN.BC.locations="M,A";
paths.MN.CD.locations="M,A";
paths.MN.DG.locations="M,O,H";
paths.MN.GH.locations="M,O,H";
paths.MN.HJ.locations="M,O,H";
paths.MN.JK.locations="M,O,H,J";
paths.MN.HZ.locations="M,O";
paths.MN.ZO.locations="M,O";
paths.MN.OM.locations="M";
paths.MN.MN.locations="";
paths.MN.OA.locations="M";
paths.OA = {};
paths.OA.AB.locations="A";
paths.OA.BC.locations="A";
paths.OA.CD.locations="A";
paths.OA.DG.locations="A,D";
paths.OA.GH.locations="O,H";
paths.OA.HJ.locations="O,H";
paths.OA.JK.locations="O,H,J";
paths.OA.HZ.locations="O";
paths.OA.ZO.locations="O";
paths.OA.OM.locations="";
paths.OA.MN.locations="M";
paths.OA.OA.locations="";

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
