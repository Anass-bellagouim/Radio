class Volume {
  constructor() {
    this.audio_file = document.getElementById("audio_file");
    this.audio_file.Volume = 50 / 100;

    this.volume_range = document.getElementById("volume_range");
    this.volume_range.addEventListener("change", () => {
      this.audio_file.Volume = this.volume_range.value/100;
    });

    this.volume_speed = document.getElementById("volume_speed")
    this.volume_speed.addEventListener("change",()=>{
        this.audio_file.playbackRate = this.volume_speed/100
    })

  }
}
onload = new Volume();
