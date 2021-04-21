import React, { useState } from 'react'
// import { useEffect } from 'react';

// class Diff extends React.Component {
//     state = {
//         arr: [1, 2]
//     }
//     render() {
//         return <div>
//           {
//               this.state.arr.map(v => {
//                   return <div key={v}>{v}</div>
//               })
//           }
//         </div>
//     }
// }

export default function Diff() {
    const [arr, setArr] = useState(['A', 'B', 'C', 'D']);
    setTimeout(() => {
        setArr(['A', 'C', 'D', 'B'])
    }, 1000)
    return (
        <div className="diff-sample">
            {
                arr.map(v => (<p className="item" key={v}>{v}</p>))
            }
        </div>
    )
}


// export default function Diff() {
//     const [arr, setArr] = useState([1, 2]);
//     const handleDesc = () => {
//         arr.sort((a, b) => (a - b))
//         console.log('arr:::', arr)
//         setArr(arr.map(i => i))
//     }
//     const handleAsc = () => {
//         arr.sort((a, b) => (b - a))
//         console.log('arr:::', arr)
//         setArr(arr.map(i => i))
//     } 
//     const startDiff
//     return (
//         <div className="diff-sample">
//             <button className="desc" onClick={handleDesc}>DESC</button>
//             <button className="desc" onClick={handleAsc}>ASC</button>
//             {
//                 arr.map(v => (<p className="item" key={v}>{v}</p>))
//             }
//         </div>
//     )
// }
