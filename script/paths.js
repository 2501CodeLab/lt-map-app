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
paths.AB.AB = {};
paths.AB.AB.locations="";
paths.AB.BC = {};
paths.AB.BC.locations="";
paths.AB.CD = {};
paths.AB.CD.locations="";
paths.AB.DG = {};
paths.AB.DG.locations="D";
paths.AB.GH = {};
paths.AB.GH.locations="D";
paths.AB.HJ = {};
paths.AB.HJ.locations="D";
paths.AB.JK = {};
paths.AB.JK.locations="D,J";
paths.AB.HZ = {};
paths.AB.HZ.locations="A,O";
paths.AB.ZO = {};
paths.AB.ZO.locations="A,O";
paths.AB.OM = {};
paths.AB.OM.locations="A";
paths.AB.MN = {};
paths.AB.MN.locations="A,M";
paths.AB.OA = {};
paths.AB.OA.locations="A";
paths.BC = {};
paths.BC.AB = {};
paths.BC.AB.locations="";
paths.BC.BC = {};
paths.BC.BC.locations="";
paths.BC.CD = {};
paths.BC.CD.locations="";
paths.BC.DG = {};
paths.BC.DG.locations="D";
paths.BC.GH = {};
paths.BC.GH.locations="D";
paths.BC.HJ = {};
paths.BC.HJ.locations="D";
paths.BC.JK = {};
paths.BC.JK.locations="D,J";
paths.BC.HZ = {};
paths.BC.HZ.locations="A,O";
paths.BC.ZO = {};
paths.BC.ZO.locations="A,O";
paths.BC.OM = {};
paths.BC.OM.locations="A";
paths.BC.MN = {};
paths.BC.MN.locations="A,M";
paths.BC.OA = {};
paths.BC.OA.locations="A";

paths.CD = {};
paths.CD.AB = {};
paths.CD.AB.locations="";
paths.CD.BC = {};
paths.CD.BC.locations="";
paths.CD.CD = {};
paths.CD.CD.locations="";
paths.CD.DG = {};
paths.CD.DG.locations="D";
paths.CD.GH = {};
paths.CD.GH.locations="D";
paths.CD.GH = {};
paths.CD.GH.locations="D";
paths.CD.GH = {};
paths.CD.GH.locations="D,J";
paths.CD.HZ = {};
paths.CD.HZ.locations="D,H";
paths.CD.ZO = {};
paths.CD.ZO.locations="A,O";
paths.CD.OM = {};
paths.CD.OM.locations="A";
paths.CD.MN = {};
paths.CD.MN.locations="A,M";
paths.CD.OA = {};
paths.CD.OA.locations="A";

paths.DG = {};
paths.DG.AB = {};
paths.DG.AB.locations="D";
paths.DG.BC = {};
paths.DG.BC.locations="D";
paths.DG.CD = {};
paths.DG.CD.locations="D";
paths.DG.DG = {};
paths.DG.DG.locations="";
paths.DG.GH = {};
paths.DG.GH.locations="";
paths.DG.HJ = {};
paths.DG.HJ.locations="";
paths.DG.JK = {};
paths.DG.JK.locations="J";
paths.DG.HZ = {};
paths.DG.HZ.locations="H";
paths.DG.ZO = {};
paths.DG.ZO.locations="H";
paths.DG.OM = {};
paths.DG.OM.locations="H,O";
paths.DG.MN = {};
paths.DG.MN.locations="H,O,M";
paths.DG.OA = {};
paths.DG.OA.locations="D,A";

paths.GH = {};
paths.GH.AB = {};
paths.GH.AB.locations="D";
paths.GH.BC = {};
paths.GH.BC.locations="D";
paths.GH.CD = {};
paths.GH.CD.locations="D";
paths.GH.DG = {};
paths.GH.DG.locations="";
paths.GH.GH = {};
paths.GH.GH.locations="";
paths.GH.HJ = {};
paths.GH.HJ.locations="";
paths.GH.JK = {};
paths.GH.JK.locations="J";
paths.GH.HZ = {};
paths.GH.HZ.locations="H";
paths.GH.ZO = {};
paths.GH.ZO.locations="H";
paths.GH.OM = {};
paths.GH.OM.locations="H,O";
paths.GH.MN = {};
paths.GH.MN.locations="H,O,M";
paths.GH.OA = {};
paths.GH.OA.locations="H,O";

paths.HJ = {};
paths.HJ.AB = {};
paths.HJ.AB.locations="D";
paths.HJ.BC = {};
paths.HJ.BC.locations="D";
paths.HJ.CD = {};
paths.HJ.CD.locations="D";
paths.HJ.DG = {};
paths.HJ.DG.locations="";
paths.HJ.GH = {};
paths.HJ.GH.locations="";
paths.HJ.HJ = {};
paths.HJ.HJ.locations="";
paths.HJ.JK = {};
paths.HJ.JK.locations="J";
paths.HJ.HZ = {};
paths.HJ.HZ.locations="H";
paths.HJ.ZO = {};
paths.HJ.ZO.locations="H";
paths.HJ.OM = {};
paths.HJ.OM.locations="H,O";
paths.HJ.MN = {};
paths.HJ.MN.locations="H,O,M";
paths.HJ.OA = {};
paths.HJ.OA.locations="H,O";


paths.JK = {};
paths.JK.AB = {};
paths.JK.AB.locations="J,D";
paths.JK.BC = {};
paths.JK.BC.locations="J,D";
paths.JK.CD = {};
paths.JK.CD.locations="J,D";
paths.JK.DG = {};
paths.JK.DG.locations="J";
paths.JK.GH = {};
paths.JK.GH.locations="J";
paths.JK.HJ = {};
paths.JK.HJ.locations="J";
paths.JK.JK = {};
paths.JK.JK.locations="";
paths.JK.HZ = {};
paths.JK.HZ.locations="J,H";
paths.JK.ZO = {};
paths.JK.ZO.locations="J,H";
paths.JK.OM = {};
paths.JK.OM.locations="J,H,O";
paths.JK.MN = {};
paths.JK.MN.locations="J,H,O";
paths.JK.OA = {};
paths.JK.OA.locations="J,H,O";

paths.HZ = {};
paths.HZ.AB = {};
paths.HZ.AB.locations="H,D";
paths.HZ.BC = {};
paths.HZ.BC.locations="H,D";
paths.HZ.CD = {};
paths.HZ.CD.locations="H,D";
paths.HZ.DG = {};
paths.HZ.DG.locations="H";
paths.HZ.GH = {};
paths.HZ.GH.locations="H";
paths.HZ.HJ = {};
paths.HZ.HJ.locations="H";
paths.HZ.JK = {};
paths.HZ.JK.locations="H,J";
paths.HZ.HZ = {};
paths.HZ.HZ.locations="";
paths.HZ.ZO = {};
paths.HZ.ZO.locations="";
paths.HZ.OM = {};
paths.HZ.OM.locations="O";
paths.HZ.MN = {};
paths.HZ.MN.locations="O,M";
paths.HZ.OA = {};
paths.HZ.OA.locations="O";


paths.ZO = {};
paths.ZO.AB = {};
paths.ZO.AB.locations="O,A";
paths.ZO.BC = {};
paths.ZO.BC.locations="O,A";
paths.ZO.CD = {};
paths.ZO.CD.locations="H,D";
paths.ZO.DG = {};
paths.ZO.DG.locations="H";
paths.ZO.GH = {};
paths.ZO.GH.locations="H";
paths.ZO.HJ = {};
paths.ZO.HJ.locations="H";
paths.ZO.JK = {};
paths.ZO.JK.locations="H,J";
paths.ZO.HZ = {};
paths.ZO.HZ.locations="";
paths.ZO.ZO = {};
paths.ZO.ZO.locations="";
paths.ZO.OM = {};
paths.ZO.OM.locations="";
paths.ZO.MN = {};
paths.ZO.MN.locations="O,M";
paths.ZO.OA = {};
paths.ZO.OA.locations="O";


paths.OM = {};
paths.OM.AB = {};
paths.OM.AB.locations="A";
paths.OM.BC = {};
paths.OM.BC.locations="A";
paths.OM.CD = {};
paths.OM.CD.locations="A";
paths.OM.DG = {};
paths.OM.DG.locations="O,H";
paths.OM.GH = {};
paths.OM.GH.locations="O,H";
paths.OM.HJ = {};
paths.OM.HJ.locations="O,H";
paths.OM.JK = {};
paths.OM.JK.locations="O,H,J";
paths.OM.HZ = {};
paths.OM.HZ.locations="O";
paths.OM.ZO = {};
paths.OM.ZO.locations="O";
paths.OM.OM = {};
paths.OM.OM.locations="";
paths.OM.MN = {};
paths.OM.MN.locations="M";
paths.OM.OA = {};
paths.OM.OA.locations="";


paths.MN = {};
paths.MN.AB = {};
paths.MN.AB.locations="M,A";
paths.MN.BC = {};
paths.MN.BC.locations="M,A";
paths.MN.CD = {};
paths.MN.CD.locations="M,A";
paths.MN.DG = {};
paths.MN.DG.locations="M,O,H";
paths.MN.GH = {};
paths.MN.GH.locations="M,O,H";
paths.MN.HJ = {};
paths.MN.HJ.locations="M,O,H";
paths.MN.JK = {};
paths.MN.JK.locations="M,O,H,J";
paths.MN.HZ = {};
paths.MN.HZ.locations="M,O";
paths.MN.ZO = {};
paths.MN.ZO.locations="M,O";
paths.MN.OM = {};
paths.MN.OM.locations="M";

paths.MN.MN = {};
paths.MN.MN.locations="";
paths.MN.OA = {};
paths.MN.OA.locations="M";
paths.OA = {};
paths.OA.AB = {};
paths.OA.AB.locations="A";
paths.OA.BC = {};
paths.OA.BC.locations="A";
paths.OA.CD = {};
paths.OA.CD.locations="A";
paths.OA.DG = {};
paths.OA.DG.locations="A,D";
paths.OA.GH = {};
paths.OA.GH.locations="O,H";
paths.OA.HJ = {};
paths.OA.HJ.locations="O,H";
paths.OA.JK = {};
paths.OA.JK.locations="O,H,J";
paths.OA.HZ = {};
paths.OA.HZ.locations="O";
paths.OA.ZO = {};
paths.OA.ZO.locations="O";
paths.OA.OM = {};
paths.OA.OM.locations="";
paths.OA.MN = {};
paths.OA.MN.locations="M";
paths.OA.OA = {};
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