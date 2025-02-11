import {
  useState,
  useCallback,
  useEffect,
  useRef
} from "react";
function App() {
  //Defining states
  const [copy,
    setCopy] = useState("Copy");
  const [pass,
    setPass] = useState("")
  const [length,
    setLength] = useState(8);
  const [nums,
    setNums] = useState(false)
  const [char,
    setChar] = useState(false)
  //states finished

  //copy function
  const copyToClip = useCallback(()=> {
    window.navigator.clipboard.writeText(pass)
    setCopy("Copied!")
    const time = setTimeout(()=>setCopy("Copy"), 2000)
  }, [pass]
  )


  //password generator
  const generator = useCallback(()=> {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghikjlmnopqrstuvwxyz";

    if (nums) str += "0123456789"
    if (char)str += "~`|•√π÷×§∆€¥$¢^°={}©®™✓]"

    //Generation

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random()*str.length+1)
      //pass +=
      pass += str.charAt(char);
    }
    setPass(pass)
  },
    [length,
      nums,
      char,
      setPass])

  useEffect(()=> {
    generator()},
    [length,
      nums,
      char,
      setPass
    ])

  return(
    <div className="bg-black w-screen h-screen py-20">
      <div className="w-[90%] h-80 bg-gray-700 mx-5 py-4">
        <div className="text-white bg-gray-900 w-50 h-10 mx-15 flex items-center justify-center rounded-lg">
          Password Generator
        </div>
        <input type="text" className="text-yellow-500 bg-gray-800 my-4 mx-8 h-8 rounded-lg shadow-blue-900 px-2"
        placeholder="Password"
        value={pass}
        /><br />
    <input
    type="range"
    min={6}
    max={20}
    value={length}
    className="mx-6"
    onChange={(e) => { setLength(e.target.value)}}
    />
  <label className="text-white">Length: {length}</label><br />
<input
className="mx-8"
type="checkbox"
defaultChecked={nums}
onChange={(e) => setNums(e.target.checked)}
//onChange={(prev)=> { !prev }}
/>
<label className="text-white">Numbers</label><br />
<input
className="mx-8"
type="checkbox"
defaultChecked={char}
onChange={(e) => setChar(e.target.checked)}
//onChange={(prev)=>!prev}
/>
<label className="text-white">Characters</label><br />
<button className="bg-[#141fe0] mx-8 my-4 text-center w-60 h-8 rounded-xl
text-white shadow-xl hover:bg-[#020fed] hover:bg-violet-600 focus:outline-2
focus:outline-offset-2 focus:outline-blue-700"
onClick={copyToClip}
> {copy} </button>
</div>
</div>
)

}
//document.write(setPass(pass))

export default App;