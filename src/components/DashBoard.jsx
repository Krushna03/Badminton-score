import { CircleDot } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import Button from './Button'
import { submittedScores } from '../utils/scoreData'

export default function DashBoard() {

  console.log(submittedScores);
  
  return (
    <div className="min-h-screen flex flex-col items-center bg-[#001219] text-white p-6">
      <h1 className="text-4xl font-medium mb-6 mt-10">Latest Scores</h1>
      
      <div className="space-y-6">
      <div className="space-y-4 mt-5">
      {submittedScores.map((match, index) => (
        <div key={match.id}>
          <div className="flex items-center gap-2 mb-3">
            <CircleDot className="w-4 h-4 text-red-500" />
            <span className="text-2xl text-[#9BA1A6] uppercase tracking-wide">
              Match {index + 1}
            </span>
            <NavLink
              className="ml-64 text-[13px] text-[#9BA1A6] hover:text-white"
            >
              Result
            </NavLink>
          </div>

          <div className="flex items-center text-[13px] mb-2">
            <span className="w-[100px] text-[#9BA1A6]">{match.date}</span>
            <div className="flex items-center gap-2 w-[180px]">
              <img
                src="/placeholder.svg?height=20&width=30"
                alt={`${match.name1} flag`}
                className="w-5 h-3"
              />
              <span>{match.name1}</span>
            </div>
            <div className="flex gap-8">
              {/* <span className="w-3">{match.won === match.name1 ? "2" : "0"}</span> */}
              <div className="space-x-4 text-[#9BA1A6]">
                <span>{match.name1Score}</span>
              </div>
            </div>
            <div className="ml-auto">
            <span
                className={`px-[6px] text-[11px] rounded text-white ${
                  match.won === match.name1 ? 'bg-green-700' : 'bg-red-700'
                }`}
              >
                {match.won === match.name1 ? "W" : "L"}
              </span>
            </div>
          </div>

          <div className="flex items-center text-[13px]">
            <span className="w-[100px] invisible">{match.date}</span>
            <div className="flex items-center gap-2 w-[180px]">
              <img
                src="/placeholder.svg?height=20&width=30"
                alt={`${match.name2} flag`}
                className="w-5 h-3"
              />
              <span>{match.name2}</span>
            </div>
            <div className="flex gap-8">
              {/* <span className="w-3">{match.won === match.name2 ? "2" : "0"}</span> */}
              <div className="space-x-4 text-[#9BA1A6]">
                <span>{match.name2Score}</span>
              </div>
            </div>

            <div className="ml-auto">
            <span
                className={`px-[6px] text-[11px] rounded text-white ${
                  match.won === match.name2 ? 'bg-green-700' : 'bg-red-700'
                }`}
              >
                {match.won === match.name2 ? "W" : "L"}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>


      <div className='flex justify-center mt-10'>
        <NavLink to={"/"}>
          <Button label="Go to GamePad" color="green" className="rounded w-34 p-3 bg-green-500 "/>
        </NavLink>
      </div>

      </div>
    </div>
  )
}

