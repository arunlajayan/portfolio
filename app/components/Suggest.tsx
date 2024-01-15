import React from 'react'

const Suggest = () => {
  return (
<div className="bg-blue-500  overflow-hidden relative" style={{width: '800px', height: '200px'}}>

  <div className="absolute inset-0 flex items-center justify-center">
   
    <img src="assets/jithin.jpg" alt="Profile 1" className="w-8 h-8 rounded-full mr-4"/>

   
    <div>
                  <h3 className="text-white font-bold text-lg mb-2">Jithin Robert</h3>
                  <a href="https://www.linkedin.com/posts/jithinrobert_kudos-teamplayer-activity-6996322095706120192-_DKJ" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-blue-300 text-sm">
                      <img src="assets/svg/linkedin.svg" width={20} />
      </a>
      <p className="text-white text-sm">CEO, iLapz Technologies</p>
      #Kudos It's honestly hard to explain how integral you are to this team #TeamPlayer   
      
    </div>
  </div>
</div>

  
  )
}

export default Suggest