// function trial(dataobj){
//     document.write(
//        `
//     <div>
//         <h2>
//        lecture: ${dataobj.lecture},
//        teaacher: ${dataobj.teacher},
//        mood: ${dataobj.mood}
//        </h2>
//     </div>
//        `
//     )
// }
//
//
// let data=[
//     {lecture:'1', teacher:'t1',mood:'well'},
//     {lecture:'2', teacher:'t2',mood:'wellwell'},
//     {lecture:'3', teacher:'t3',mood:'wellwellwell'}
// ]
// for(const datum of data){
// trial(datum)
//}


let data=[
    {lecture:'1', teacher:'t1',mood:'well'},
    {lecture:'2', teacher:'t2',mood:'wellwell'},
    {lecture:'3', teacher:'t3',mood:'wellwellwell'}
]

function plan2(array){
    for(const datum of array){
        document.write(`
            <div>
                <h2>
                    urok-${datum.lecture},
                    teacher-${datum.teacher},
                    mood-${datum.mood}
                </h2>
            </div>
        `)
    }
}


plan2(data);


