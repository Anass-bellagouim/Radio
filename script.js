class player{
    constructor(){
        var heightMain = document.getElementById("player")
        heightMain.style.height = screen.height + "px"
        if(screen.width<620){
            heightMain.style.width =  screen.width + "px"
        }

        var heightDiv = document.getElementById("content")
        heightDiv.style.height = screen.height-300 + "px"
    }
}
onload = new player()

//class buttons

class Audio_Player{
    constructor(){
        this.audio_file = document.getElementById("audio_file")
        this.title_audio = document.getElementById("title_radio")
        this.play_pause_button = document.getElementById("play_pause")
        
        this.isPlayed
        
        this.play_pause_button.addEventListener("click", ()=>{
            this.play_pause()
        })


            this.names_radio =[]
            this.names_radio[0]="RADIO"


            this.source_audio =[]
            this.source_audio[0]="http://edge.mixlr.com/channel/qtgru"
            this.server = 0;
        
            this.setResource()

            document.getElementById("next").addEventListener("click",()=>{
                if(this.server<this.source_audio.length-1){
                    ++this.server
                    this.isPlayed = false
                }
                this.setResource()
            })

            document.getElementById("back").addEventListener("click",()=>{
                if(this.server>0){
                    --this.server
                    this.isPlayed = false

                }
                this.setResource()
            })

    }

    setResource(){
        this.audio_file.src = this.source_audio[this.server]
        this.title_audio.innerHTML = this.names_radio[this.server]
        this.play_pause()
    }



    
    play_pause(){
        if(this.isPlayed == false){
            this.play_pause_button.src = "./img/pause.png"
            this.audio_file.play()
            this.isPlayed=true
        }else{
            this.play_pause_button.src = "./img/play.png"
            this.audio_file.pause()
            this.isPlayed=false
        }
    }
}
onload = new Audio_Player()

