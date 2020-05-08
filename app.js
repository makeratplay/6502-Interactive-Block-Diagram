
var controlLines = [
    { Name: "DL/DB",  left:	605, top: 155, Register: "Input Data Latch (DL)", BusEnable: "DB", direction: "fa-arrow-circle-down" },
    { Name: "DL/ADL", left:	833, top: 155, Register: "Input Data Latch (DL)", BusEnable: "ADL", direction: "fa-arrow-circle-down"  },
    { Name: "DL/ADH", left:	1064, top: 155, Register: "Input Data Latch (DL)", BusEnable: "ADH", direction: "fa-arrow-circle-down" },
    { Name: "PHI2",   left:	578, top: 127, Register: "Input Data Latch (DL)", LoadEnable: true, direction: "fa-arrow-circle-right"  },
   
    { Name: "PHI2",   left:	410, top: 127, Register: "Predecode Register (PD)", LoadEnable: true, direction: "fa-arrow-circle-left"  },

    { Name: "PHI1",   left:	565, top: 305, Register: "Data Output Register (DOR)", LoadEnable: true, direction: "fa-arrow-circle-left"  },


    { Name: "PHI2",   left:	578, top: 398, Register: "DB Precharge Mosfets", BusEnable: "DB", direction: "fa-arrow-circle-right" },


    { Name: "PCL/PCL", left: 665, top: 225, Register: "Program Counter Low Select Register (PCLS)", LoadEnable: true, direction: "fa-arrow-circle-right" },
    { Name: "ADLPCL",  left: 787, top: 225, Register: "Program Counter Low Select Register (PCLS)", LoadEnable: true, direction: "fa-arrow-circle-left" },

    { Name: "I/PC",  left: 725, top: 365, Register: "Program Counter Low Increment Logic", LoadEnable: true, direction: "fa-arrow-circle-down" },


    { Name: "PHI2",  left: 725, top: 365, Register: "Program Counter Low Register (PCL)", LoadEnable: true, direction: "fa-arrow-circle-down" },
    { Name: "PCL/DB",  left: 665, top: 425, Register: "Program Counter Low Select Register (PCLS)", LoadEnable: true, direction: "fa-arrow-circle-left" },
    { Name: "PCLADL",  left: 788, top: 410, Register: "Program Counter Low Select Register (PCLS)", LoadEnable: true, direction: "fa-arrow-circle-right" },

    { Name: "0ADL0",   left:	802, top: 545, Register: "ADL Open Drain Mosfets", BusEnable: "ADL", direction: "fa-arrow-circle-right" },
    { Name: "0ADL1",   left:	802, top: 545, Register: "ADL Open Drain Mosfets", BusEnable: "ADL", direction: "fa-arrow-circle-right" },
    { Name: "0ADL2",   left:	802, top: 545, Register: "ADL Open Drain Mosfets", BusEnable: "ADL", direction: "fa-arrow-circle-right" },

    { Name: "PHI2",   left:	802, top: 661, Register: "ADL Precharge Mosfets", BusEnable: "ADL", direction: "fa-arrow-circle-right" },

    { Name: "PCH/PCH",  left: 895, top: 220, Register: "Program Counter High Select Register (PCHS)", LoadEnable: true, direction: "fa-arrow-circle-right" },
    { Name: "ADHPCH",  left: 1017, top: 220, Register: "Program Counter High Select Register (PCHS)", LoadEnable: true, direction: "fa-arrow-circle-left" },
    
    { Name: "PHI2",  left: 954, top: 430, Register: "Program Counter High Register (PCH)", LoadEnable: true, direction: "fa-arrow-circle-down" },
    { Name: "PCH/DB",  left: 895, top: 487, Register: "Program Counter High Register (PCH)", BusEnable: "DB", direction: "fa-arrow-circle-left" },
    { Name: "PCHADH",  left: 1017, top: 474, Register: "Program Counter High Register (PCH)", BusEnable: "ADH", direction: "fa-arrow-circle-right" },


    { Name: "SBDB",  left: 957, top: 602, Register: "SB/DB Pass Mosfets", BusEnable: "DB", direction: "fa-arrow-circle-right" },
    { Name: "SBDB",  left: 862, top: 602, Register: "DB/SB Pass Mosfets", BusEnable: "SB", direction: "fa-arrow-circle-left" },

    { Name: "SB/ADH",  left: 1065, top: 530, Register: "SB/ADH Pass Mosfets", BusEnable: "ADH", direction: "fa-arrow-circle-up" },
    { Name: "SB/ADH",  left: 1065, top: 581, Register: "ADH/SB Pass Mosfets", BusEnable: "SB", direction: "fa-arrow-circle-down" },

    { Name: "ADH/ABH",  left: 1110, top: 425, Register: "Address Bus High Register (ABH)", LoadEnable: true, direction: "fa-arrow-circle-right" },
    
    { Name: "0/ADH(1-7)",  left: 1091, top: 263, Register: "ADH Open Drain Mosfets", BusEnable: "ADH", direction: "fa-arrow-circle-left" },
    { Name: "0/ADH0",  left: 1091, top: 263, Register: "ADH Open Drain Mosfets", BusEnable: "ADH", direction: "fa-arrow-circle-left" },        
    
    { Name: "PHI2",   left:	1091, top: 190, Register: "ADH Precharge Mosfets", BusEnable: "DB", direction: "fa-arrow-circle-left" },


    { Name: "SB/S",  left: 1020, top: 686, Register: "Stack Pointer Register (S)", LoadEnable: true, direction: "fa-arrow-circle-left" },
    { Name: "S/ADL",  left: 880, top: 703, Register: "Stack Pointer Register (S)", BusEnable: "ADL", direction: "fa-arrow-circle-left" },
    { Name: "S/SB",  left: 1020, top: 718, Register: "Stack Pointer Register (S)", BusEnable: "SB", direction: "fa-arrow-circle-right" },


    { Name: "ADL/ABL",  left: 1110, top: 840, Register: "Address Bus Low Register (ABL)", LoadEnable: true, direction: "fa-arrow-circle-right" },

    { Name: "SB/X",  left: 1120, top: 1050, Register: "X Index Register (X)", LoadEnable: true, direction: "fa-arrow-circle-right" },
    { Name: "X/SB",  left: 1120, top: 1106, Register: "X Index Register (X)", BusEnable: "SB", direction: "fa-arrow-circle-left" },

    { Name: "SB/Y",  left: 1120, top: 1287, Register: "Y Index Register (Y)", LoadEnable: true, direction: "fa-arrow-circle-right" },
    { Name: "Y/SB",  left: 1120, top: 1345, Register: "Y Index Register (Y)", BusEnable: "SB", direction: "fa-arrow-circle-left" },

    
    { Name: "SBAC",  left: 835, top: 1360, Register: "Accumulator (AC)", LoadEnable: true, direction: "fa-arrow-circle-down" },
    { Name: "AC/DB",  left: 754, top: 1408, Register: "Accumulator (AC)", BusEnable: "DB", direction: "fa-arrow-circle-left" },
    { Name: "AC/SB",  left: 920, top: 1405, Register: "Accumulator (AC)", BusEnable: "SB", direction: "fa-arrow-circle-right" },


    { Name: "SBADD",  left: 815, top: 1129, Register: "A Input Regiter (AI)", LoadEnable: true, direction: "fa-arrow-circle-left" },
    { Name: "0ADD",  left: 677, top: 1165, Register: "A Input Regiter (AI)", LoadEnable: true, direction: "fa-arrow-circle-up" },


    { Name: "PHI2",  left: 990, top: 795, Register: "Precharge Mosfets", BusEnable: "SB", direction: "fa-arrow-circle-right" },

    { Name: "ADDSB06",  left: 1000, top: 955, Register: "Adder Hold Register (ADD)", BusEnable: "SB", direction: "fa-arrow-circle-right" },
    { Name: "ADDSB7",  left: 1000, top: 955, Register: "Adder Hold Register (ADD)", BusEnable: "SB", direction: "fa-arrow-circle-right" },
    { Name: "ADDADL",  left: 944, top: 880, Register: "Adder Hold Register (ADD)", BusEnable: "ADL", direction: "fa-arrow-circle-up" },
    { Name: "PHI2",  left: 885, top: 956, Register: "Adder Hold Register (ADD)", LoadEnable: true, direction: "fa-arrow-circle-right" },

    { Name: "NDB/ADD",  left: 658, top: 775, Register: "B Input Register (BI)", LoadEnable: true, direction: "fa-arrow-circle-down" },
    { Name: "DB/ADD",  left: 716, top: 775, Register: "B Input Register (BI)", LoadEnable: true, direction: "fa-arrow-circle-down" },
    { Name: "ADL/ADD",  left: 774, top: 775, Register: "B Input Register (BI)", LoadEnable: true, direction: "fa-arrow-circle-down" },



    { Name: "SUMS",  left: 805, top: 885, Register: "Arithmetic Logic With Decimal Carry Look-A-Head (CD)", BusEnable: "ADD", direction: "fa-arrow-circle-right" },
    { Name: "ANDS",  left: 805, top: 920, Register: "Arithmetic Logic With Decimal Carry Look-A-Head (CD)", BusEnable: "ADD", direction: "fa-arrow-circle-right" },
    { Name: "EORS",  left: 805, top: 956, Register: "Arithmetic Logic With Decimal Carry Look-A-Head (CD)", BusEnable: "ADD", direction: "fa-arrow-circle-right" },
    { Name: "ORS",  left: 805, top: 992, Register: "Arithmetic Logic With Decimal Carry Look-A-Head (CD)", BusEnable: "ADD", direction: "fa-arrow-circle-right" },
    { Name: "SRS",  left: 805, top: 1029, Register: "Arithmetic Logic With Decimal Carry Look-A-Head (CD)", BusEnable: "ADD", direction: "fa-arrow-circle-right" },

    { Name: "P/DB",  left: 515, top: 1408, Register: "Processor Status Register (P)", BusEnable: "DB", direction: "fa-arrow-circle-right" },



    { Name: "SS??", left: 830, top: 711 },

    { Name: "PCHC", left: 	867	, top: 370 },

    { Name: "PCLC", left: 	685	, top: 394 },
    { Name: "PCLC", left: 	922	, top: 373 },

    { Name: "~DAA", left: 	613	, top: 909 },
    { Name: "~DAA", left: 583, top:  1398 },
    { Name: "~DAA", left: 865, top: 1395 },
    { Name: "~DSA", left: 552, top: 1293 },
    { Name: "~DSA", left: 898, top: 1298 },


 
 
    { Name: "T1", left: 269, top: 426 },

    { Name: "ACR", left: 	379	, top: 1231 },
    { Name: "ACR", left: 	628	, top: 1150 },
    { Name: "ACR/C", left: 	265	, top: 1300 },


    
    
  
    { Name: "AVR", left: 	401	, top: 1249 },
    { Name: "AVR", left: 	597	, top: 1157 },
    { Name: "AVR/V", left: 	265	, top: 1494 },

    { Name: "DB0/C", left: 	265	, top: 1279 },
    { Name: "DB1/Z", left: 	265	, top: 1324 },
    { Name: "DB2/I", left: 	265	, top: 1359 },
    { Name: "DB3/D", left: 	265	, top: 1391 },
    { Name: "DB6/V", left: 	265	, top: 1469 },
    { Name: "DB7/N", left: 	265	, top: 1518 },
    { Name: "DBADD", left: 	650	, top: 803 },
    { Name: "DBZ", left: 	442	, top: 1288 },
    { Name: "DBZ/Z", left: 	265	, top: 1339 },

    
    { Name: "HC", left: 	661	, top: 1146 },
    { Name: "I/ADDC", left: 	680	, top: 913 },
    { Name: "~IPC", left: 	577	, top: 345 },
    { Name: "I/V", left: 	265	, top: 1495 },
    { Name: "IR5", left: 	360	, top: 1246 },
    { Name: "IR5/C", left: 	265	, top: 1290 },
    { Name: "IR5/D", left: 	265	, top: 4101 },
    { Name: "IR5/I", left: 	265	, top: 1370 },
   
   


    { Name: "phi1", left: 	256	, top: 1211 },
    { Name: "phi1", left: 	462	, top: 345 },
    { Name: "phi2", left: 	1105	, top: 256 },
    { Name: "phi2", left: 	256	, top: 1231 },
    { Name: "phi2", left: 	315	, top: 166 },
    { Name: "phi2", left: 	369	, top: 465 },
    { Name: "phi2", left: 	496	, top: 166 },
    { Name: "phi2", left: 	592	, top: 727 },
    { Name: "phi2", left: 	595	, top: 418 },
    { Name: "phi2", left: 	774	, top: 863 },
    { Name: "phi2", left: 	786	, top: 1108 },
    { Name: "phi2", left: 	905	, top: 482 },


    
    
    


 
  

    

]

var busData = {
     DB:{
            Sources : [ 
                { ControlLine : "DL/DB", Description: "Input Data Latch" },
                { ControlLine : "phi2", Description: "Precharge Mosfets" },
                { ControlLine : "PCL/DB", Description: "Program Counter Low Register" },
                { ControlLine : "PCH/DB", Description: "Program Counter High Register" },
                { ControlLine : "P/DB", Description: "Processor Status Register" },
                { ControlLine : "AC/DB", Description: "Accumulator Register" },
                { ControlLine : "SBDB", Description: "SB Bus" },
            ],
            Destinations : [
                { ControlLine : "phi1", Description: "Data Output Resgister" },
                { ControlLine : "!DB/ADD", Description: "B Input ALU Register via Inverter" },
                { ControlLine : "DBADD", Description: "B Input ALU Register" },
                { ControlLine : "SBDB", Description: "SB Bus" },
                //{ ControlLine : "P", Description: "Processor Status Register" },  // need to flush out all flags here
            ]
        },
     SB:{
            Sources : [ 
                { ControlLine : "S/SB", Description: "Stack Pointer Register" },
                { ControlLine : "phi2", Description: "Precharge Mosfets" },
                { ControlLine : "ADDSB06", Description: "ALU Adder Hold Register (ADD)" },
                { ControlLine : "ADDSB7", Description: "ALU Adder Hold Register (ADD)" },
                { ControlLine : "X/SB", Description: "X Index Register" },
                { ControlLine : "Y/SB", Description: "Y Index Register" },
                { ControlLine : "AC/SB", Description: "Accumulator" },
                { ControlLine : "SBDB", Description: "DB Bus" },
                { ControlLine : "SB/ADH", Description: "ADH Bus" },
            ],
            Destinations : [
                { ControlLine : "SB/S", Description: "Stack Pointer Register" },
                { ControlLine : "SB/X", Description: "X Index Register" },
                { ControlLine : "SB/Y", Description: "Y Index Register" },
                { ControlLine : "SB/ADD", Description: "A Input of ALU" },
                { ControlLine : "SBDB", Description: "DB Bus" },
                { ControlLine : "SB/ADH", Description: "ADH Bus" },
            ]
        },        
     ADL:{
            Sources : [ 
                { ControlLine : "DL/ADL", Description: "Input Data Latch" },
                { ControlLine : "0/ADL0", Description: "Zero via Open Drain Mosfets" },
                { ControlLine : "0/ADL1", Description: "Zero via Open Drain Mosfets" },
                { ControlLine : "0/ADL2", Description: "Zero via Open Drain Mosfets" },
                { ControlLine : "phi2", Description: "Precharge Mosfets" },
                { ControlLine : "S/ADL", Description: "Stack Pointer Register" },
                { ControlLine : "ADDADL", Description: "ALU Adder Hold Register (ADD)" },
            ],
            Destinations : [
                { ControlLine : "ADL/PCL", Description: "Program  Counter Low Select Register (PCLS)" },
                { ControlLine : "ADL/ADD", Description: "B Input ALU Register" },
                { ControlLine : "ADL/ABL", Description: "Address Bus Low Register (ABL) on phi1" },
            ]
        },      
    ADH:{
            Sources : [ 
                { ControlLine : "DL/ADH", Description: "Input Data Latch" },
                { ControlLine : "phi2", Description: "Precharge Mosfets" },
                { ControlLine : "0/ADH0", Description: "Zero via Open Drain Mosfets" },
                { ControlLine : "0/ADH17", Description: "Zero via Open Drain Mosfets" },             
                { ControlLine : "PCHADH", Description: "Program Counter High Register (PCH)" },      
                { ControlLine : "SB/ADH", Description: "SB Bus" },  
            ],
            Destinations : [
                { ControlLine : "ADHPCH", Description: "Program  Counter High Select Register (PCLH)" },
                { ControlLine : "ADH/ABH", Description: "Address Bus High Register (ABH) on phi1" },
                { ControlLine : "SB/ADH", Description: "SB Bus" },  
            ]
        }            
    }


function mapIt(){
    $('#blockDiagram').empty();
    
    let data = $("#ControlSignals"). val().toUpperCase();

    let debugData = "";

    controlLines.forEach( item => {
        debugData += item.Name + ',';

        if ( data.includes( item.Name ) ){
            let title = item.Name + "( " + item.left + ", " + item.top + " )";
            let div = '<i class="fas ' + item.direction + ' busEnable" style="top: ' + item.top + 'px; left: ' + item.left + 'px;" title = "' + title  +'" ></i>'
            $('#blockDiagram').append(div);
        }
    })

    renderRCLLines( data );

    console.log(debugData);
}

function renderRCLLines( data ){
    var words = data.split(',');

    let linesHtml = '<div id="lines">'
    words.forEach( item => {
        if ( item != "PHI1" && item != "PHI2"){
            let found = false;
            for( i = 0; i < controlLines.length; i++ ){
                if ( item == controlLines[i].Name ){
                    found = true;
                    linesHtml += '<span class="lineFound"> <i class="fas fa-arrow-right"></i> ' + item + '</span>';
                    break;
                }
            }
            if ( !found && !item.startsWith('#') ){
                linesHtml += '<span class="lineNotFound"> <i class="fas fa-arrow-right"></i> ' + item + '</span>';
            }
        }
    })
    linesHtml += '</div>';
    $('#blockDiagram').append(linesHtml);
}

function buildBusTable(){
    $('#busDetails').empty();
    var busHtml = '<table><tr><td>Bus</td><td>Source</td><td>Destinations</td></tr>';

    // DB Bus
    busHtml += '<tr><td>DB</td><td>'
    for( i = 0; i < busData.DB.Sources.length; i++ ){
        if ( data.includes( busData.DB.Sources[i].ControlLine  ) ){
            busHtml += '<span class="source" title="' + busData.DB.Sources[i].ControlLine + '">' +  busData.DB.Sources[i].Description + '</span>';
        }
    }
    busHtml += '</td><td>'
    for( i = 0; i < busData.DB.Destinations.length; i++ ){
        if ( data.includes( busData.DB.Destinations[i].ControlLine  ) ){
            busHtml += '<span class="dest" title="' +  busData.DB.Destinations[i].ControlLine + '">' + busData.DB.Destinations[i].Description + '; </span>';
        }
    }    
    busHtml += '</td></tr>'

    // SB Bus
    busHtml += '<tr><td>SB</td><td>'
    for( i = 0; i < busData.SB.Sources.length; i++ ){
        if ( data.includes( busData.SB.Sources[i].ControlLine  ) ){
            busHtml += '<span class="source" title="' + busData.SB.Sources[i].ControlLine + '">' +  busData.SB.Sources[i].Description + '</span>';
        }
    }
    busHtml += '</td><td>'
    for( i = 0; i < busData.SB.Destinations.length; i++ ){
        if ( data.includes( busData.SB.Destinations[i].ControlLine  ) ){
            busHtml += '<span class="dest" title="' +  busData.SB.Destinations[i].ControlLine + '">' + busData.SB.Destinations[i].Description + '; </span>';
        }
    }    
    busHtml += '</td></tr>'    

    // ADL Bus
    busHtml += '<tr><td>ADL</td><td>'
    for( i = 0; i < busData.ADL.Sources.length; i++ ){
        if ( data.includes( busData.ADL.Sources[i].ControlLine  ) ){
            busHtml += '<span class="source" title="' + busData.ADL.Sources[i].ControlLine + '">' +  busData.ADL.Sources[i].Description + '</span>';
        }
    }
    busHtml += '</td><td>'
    for( i = 0; i < busData.ADL.Destinations.length; i++ ){
        if ( data.includes( busData.ADL.Destinations[i].ControlLine  ) ){
            busHtml += '<span class="dest" title="' +  busData.ADL.Destinations[i].ControlLine + '">' + busData.ADL.Destinations[i].Description + '; </span>';
        }
    }    
    busHtml += '</td></tr>' 

    // ADH Bus
    busHtml += '<tr><td>ADH</td><td>'
    for( i = 0; i < busData.ADH.Sources.length; i++ ){
        if ( data.includes( busData.ADH.Sources[i].ControlLine  ) ){
            busHtml += '<span class="source" title="' + busData.ADH.Sources[i].ControlLine + '">' +  busData.ADH.Sources[i].Description + '</span>';
        }
    }
    busHtml += '</td><td>'
    for( i = 0; i < busData.ADH.Destinations.length; i++ ){
        if ( data.includes( busData.ADH.Destinations[i].ControlLine  ) ){
            busHtml += '<span class="dest" title="' +  busData.ADH.Destinations[i].ControlLine + '">' + busData.ADH.Destinations[i].Description + '; </span>';
        }
    }    
    busHtml += '</td></tr>'     

    $('#busDetails').append(busHtml);
}

async function paste() {
    const text = await navigator.clipboard.readText();
    $("#ControlSignals"). val(text);
    mapIt();
  }


  $( document ).ready(function() {
    mapIt()
});