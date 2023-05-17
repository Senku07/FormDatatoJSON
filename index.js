let dummy = [
    ["name[0].name[0].ui.name[1]" , "sdlf"],
    ["name[1]" , "sdlfasdf"],
    ["name[2]" , "sdlafadsf"],
    ["name[3]" , "sdladfsdff"],
    ["id[0]" , "io"],
    ["id[1]" , "iortw"],
    ["id[2]" , "iowert"],
    ["id[3]" , "iourty"],
    ["id[4]" , "ioyui"],
    ["caseType","BL"],
    ["Executive","Rajat"],
    ["Status[0].current","Ongoing"],
    ["Status[0].pendency","Yes"],
    ["Status[1].current","Reject"],
    ["Status[2].current","Done"],
];


function parse(dummy){
    let obj = {};
    for (const d of dummy) {
        
        if(d[0].includes('['))
        {
            let name = d[0].substring(0,d[0].indexOf('['));
            let index = parseInt(d[0].substring(d[0].indexOf('[')+1,d[0].indexOf(']')))
            
            if(!obj[name])
                obj[name] = []

            if(d[0].includes('.')){
                let lastName = d[0].substring(d[0].indexOf('.')+1)
                
                if(!obj[name][index]) {
                    obj[name][index] = {};
                }
                obj[name][index][lastName] = d[1];
            }
            else{
           
            obj[name][index] = d[1]
            }
        }
        else{
            obj[d[0]] = d[1];
        }

    }
    console.log(obj)
}

parse(dummy);
