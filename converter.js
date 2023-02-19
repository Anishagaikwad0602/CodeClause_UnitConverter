const converter=()=>{
    var in_val=document.querySelector("#in_val").value;
    var in_unit=document.querySelector("#in_unit").value;
    var out_val =document.querySelector("#out_val");
    var out_unit=document.querySelector("#out_unit").value;
    //meter and centimeter
    if(in_unit=="meter" && out_unit=="centimeter"){
        let output_val = in_val*100;
        out_val.value = output_val;
    }
    
    //centimeter and meter
     else if(in_unit=="centimeter" && out_unit=="meter"){
        let output_val = in_val/100;
        out_val.value = output_val;
    }
    //kilometer  and meter
     else if(in_unit=="kilometer" && out_unit=="meter"){
        let output_val = in_val*1000;
     out_val.value = output_val;
    }
    //meter and kilometer
    else if(in_unit=="meter" && out_unit=="kilometer"){
        let output_val = in_val/1000;
     out_val.value = output_val;
    }
    //kilometer and centimeter
    else if(in_unit=="meter" && out_unit=="centimeter"){
        let output_val = in_val*100000;
     out_val.value = output_val;
    }
    //centimeter and kilometer
    else if(in_unit=="centimeter" && out_unit=="kilometer"){
        let output_val = in_val/100000;
     out_val.value = output_val;
    }
    //kilometer and centimeter
    else if(in_unit=="kilometer" && out_unit=="centimeter"){
      let output_val = in_val*100000;
   out_val.value = output_val;
  }
   //meter and inch
   else if(in_unit=="meter" && out_unit=="inch"){
    let output_val = in_val*39.37;
   out_val.value = output_val;
  }
  //inch and meter
  else if(in_unit=="inch" && out_unit=="meter"){
    let output_val = in_val/39.37;
   out_val.value = output_val;
  }
  //millimeter to centimeter
  else if(in_unit=="millimeter" && out_unit=="centimeter"){
    let output_val = in_val/10;
   out_val.value = output_val;
  }
  //micrometer to centimeter
  else if(in_unit=="micrometer" && out_unit=="centimeter"){
    let output_val = in_val/10000;
   out_val.value = output_val;
  }
  //nanometer to centimeter
  else if(in_unit=="nanometer" && out_unit=="centimeter"){
    let output_val = in_val/10000000;
   out_val.value = output_val;
  }
  //foot  to centimeter
  else if(in_unit=="foot" && out_unit=="centimeter"){
    let output_val = in_val*30.48;
   out_val.value = output_val;
  }
// inch to centimeter
else if(in_unit=="inch" && out_unit=="centimeter"){
    let output_val = in_val*2.54;
   out_val.value = output_val;
  }
// millimeter to kilometer
else if(in_unit=="millimeter" && out_unit=="kilometer"){
    let output_val = in_val/1000000;
   out_val.value = output_val;
  }
  // micrometer to kilometer
else if(in_unit=="micrometer" && out_unit=="kilometer"){
    let output_val = in_val/1000000000;
   out_val.value = output_val;
  }
  // nanometer to kilometer
else if(in_unit=="nanometer" && out_unit=="kilometer"){
    let output_val = in_val/1e+12;
   out_val.value = output_val;
  }

 // foot to kilometer
 else if(in_unit=="foot" && out_unit=="kilometer"){
    let output_val = in_val/3281;
   out_val.value = output_val;
  }
//   inch to kilometer
else if(in_unit=="inch" && out_unit=="kilometer"){
    let output_val = in_val/39370;
   out_val.value = output_val;
  }
//   millimeter to meter
else if(in_unit=="millimeter" && out_unit=="meter"){
    let output_val = in_val/1000;
   out_val.value = output_val;
  }
  //   millimeter to meter
else if(in_unit=="micrometer" && out_unit=="meter"){
    let output_val = in_val/1e+6;
   out_val.value = output_val;
  }
   //   nanometer to meter
else if(in_unit=="nanometer" && out_unit=="meter"){
    let output_val = in_val/1e+9;
   out_val.value = output_val;
  }
//  foot to meter
else if(in_unit=="foot" && out_unit=="meter"){
    let output_val = in_val/3.281;
   out_val.value = output_val;
  }
  //  meter to millimeter
else if(in_unit=="meter" && out_unit=="millimeter"){
    let output_val = in_val/1000;
   out_val.value = output_val;
  }
//  centimeter to millimeter
else if(in_unit=="centimeter" && out_unit=="millimeter"){
    let output_val = in_val*10;
   out_val.value = output_val;
  }
  //  micrometer to millimeter
else if(in_unit=="micrometer" && out_unit=="millimeter"){
    let output_val = in_val/1000;
   out_val.value = output_val;
  }
//  nanoometer to millimeter
else if(in_unit=="nanometer" && out_unit=="millimeter"){
    let output_val = in_val/1e+6;
   out_val.value = output_val;
  }
//  Foot to millimeter
else if(in_unit=="foot" && out_unit=="millimeter"){
    let output_val = in_val*304.8;
   out_val.value = output_val;
  }
  //  inch to millimeter
else if(in_unit=="inch" && out_unit=="millimeter"){
    let output_val = in_val*25.4;
   out_val.value = output_val;
  }
//  kilometer to millimeter
else if(in_unit=="kilometer" && out_unit=="millimeter"){
    let output_val = in_val*1e+6;
   out_val.value = output_val;
  }
  //  kilometer to micrometer
else if(in_unit=="kilometer" && out_unit=="micrometer"){
    let output_val = in_val*1e+9;
   out_val.value = output_val;
  }
 //  meter to micrometer
 else if(in_unit=="meter" && out_unit=="micrometer"){
    let output_val = in_val*1e+6;
   out_val.value = output_val;
  }
  //  centimeter to micrometer
 else if(in_unit=="centimeter" && out_unit=="micrometer"){
    let output_val = in_val*10000;
   out_val.value = output_val;
  }
 //  millimeter to micrometer
 else if(in_unit=="millimeter" && out_unit=="micrometer"){
    let output_val = in_val*1000;
   out_val.value = output_val;
  }
//  nanometer to micrometer
else if(in_unit=="nanometer" && out_unit=="micrometer"){
    let output_val = in_val/1000;
   out_val.value = output_val;
  }
//  foot to micrometer
else if(in_unit=="foot" && out_unit=="micrometer"){
    let output_val = in_val*304800;
   out_val.value = output_val;
  }
  //  inch to micrometer
else if(in_unit=="inch" && out_unit=="micrometer"){
    let output_val = in_val*25400;
   out_val.value = output_val;
  }
//  kilometer and nanometer
else if(in_unit=="kilometer" && out_unit=="nanometer"){
    let output_val = in_val*1e+12;
   out_val.value = output_val;
  }
//  centimeter and nanometer
else if(in_unit=="centimeter" && out_unit=="nanometer"){
    let output_val = in_val*1e+7;
   out_val.value = output_val;
  }
// millimeter and nanometer
else if(in_unit=="millimeter" && out_unit=="nanometer"){
    let output_val = in_val*1e+6;
   out_val.value = output_val;
  }
  // micrometer and nanometer
else if(in_unit=="micrometer" && out_unit=="nanometer"){
    let output_val = in_val*1000;
   out_val.value = output_val;
  }
// foot and nanometer
else if(in_unit=="foot" && out_unit=="nanometer"){
    let output_val = in_val*3.048e+8;
   out_val.value = output_val;
  }
// inch and nanometer
else if(in_unit=="inch" && out_unit=="nanometer"){
    let output_val = in_val*2.54e+7;
   out_val.value = output_val;
  }
// meter and nanometer
else if(in_unit=="meter" && out_unit=="nanometer"){
    let output_val = in_val*1e+9;
   out_val.value = output_val;
  }
// kilometer and foot
else if(in_unit=="kilometer" && out_unit=="foot"){
    let output_val = in_val*3280;
   out_val.value = output_val;
  }
// meter and foot
else if(in_unit=="meter" && out_unit=="foot"){
    let output_val = in_val*3.281;
   out_val.value = output_val;
  }
// centimeter and foot
else if(in_unit=="centimeter" && out_unit=="foot"){
    let output_val = in_val/30.48;
   out_val.value = output_val;
  }
  // millimeter and foot
else if(in_unit=="millimeter" && out_unit=="foot"){
    let output_val = in_val/304.8;
   out_val.value = output_val;
  }
   // nanaometer and foot
else if(in_unit=="nanometer" && out_unit=="foot"){
    let output_val = in_val/3.048e+8;
   out_val.value = output_val;
  }
 // inch and foot
 else if(in_unit=="inch" && out_unit=="foot"){
    let output_val = in_val/12;
   out_val.value = output_val;
  }
// micrometer and foot
else if(in_unit=="micrometer" && out_unit=="foot"){
    let output_val = in_val/304800;
   out_val.value = output_val;
  }
  // kilometer and inch
 else if(in_unit=="kilometer" && out_unit=="inch"){
    let output_val = in_val/39370;
   out_val.value = output_val;
  }
// centimeter and inch
else if(in_unit=="centimeter" && out_unit=="inch"){
    let output_val = in_val/2.54;
   out_val.value = output_val;
  }
// millimeter and inch
else if(in_unit=="millimeter" && out_unit=="inch"){
    let output_val = in_val/25.4;
   out_val.value = output_val;
  }
  // micrometer and inch
else if(in_unit=="micrometer" && out_unit=="inch"){
    let output_val = in_val/25400;
   out_val.value = output_val;
  }
// nanometer and inch
else if(in_unit=="nanometer" && out_unit=="inch"){
    let output_val = in_val/2.54e+7;
   out_val.value = output_val;
  }
// foot and inch
else if(in_unit=="foot" && out_unit=="inch"){
    let output_val = in_val*12;
   out_val.value = output_val;
  }
}